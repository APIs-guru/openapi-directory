import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://api.nytimes.com/svc/semantic/v2/concept",
	"https://api.nytimes.com/svc/semantic/v2/concept",
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
    
    def get_name_concept_type_specific_concept_json(self, request: operations.GetNameConceptTypeSpecificConceptJSONRequest) -> operations.GetNameConceptTypeSpecificConceptJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/name/{concept-type}/{specific-concept}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNameConceptTypeSpecificConceptJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNameConceptTypeSpecificConceptJSON200ApplicationJSON])
                res.get_name_concept_type_specific_concept_json_200_application_json_object = out

        return res

    
    
    def get_search_json(self, request: operations.GetSearchJSONRequest) -> operations.GetSearchJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/search.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSearchJSON200ApplicationJSON])
                res.get_search_json_200_application_json_object = out

        return res

    