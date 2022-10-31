import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.openfigi.com/{basePath}",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def get_mapping_values_key_(self, request: operations.GetMappingValuesKeyRequest) -> operations.GetMappingValuesKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mapping/values/{key}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMappingValuesKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMappingValuesKey200ApplicationJSON])
                res.get_mapping_values_key_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.get_mapping_values_key_400_wildcard_string = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.get_mapping_values_key_500_wildcard_string = r.content

        return res

    
    def post_mapping(self, request: operations.PostMappingRequest) -> operations.PostMappingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mapping"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.bulk_mapping_job_result = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.post_mapping_400_wildcard_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.post_mapping_401_wildcard_string = r.content
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "*/*"):
                res.post_mapping_406_wildcard_string = r.content
        elif r.status_code == 413:
            if utils.match_content_type(content_type, "*/*"):
                res.post_mapping_413_wildcard_string = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.post_mapping_500_wildcard_string = r.content

        return res

    