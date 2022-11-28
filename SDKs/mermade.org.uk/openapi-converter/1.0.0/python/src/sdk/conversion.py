import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Conversion:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def convert(self, request: operations.ConvertRequest) -> operations.ConvertResponse:
        r"""Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/convert"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConvertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.convert_200_application_json_any = out
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.convert_400_application_json_any = out

        return res

    
    def convert_url(self, request: operations.ConvertURLRequest) -> operations.ConvertURLResponse:
        r"""Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/convert"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConvertURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.convert_url_200_application_json_any = out
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content

        return res

    