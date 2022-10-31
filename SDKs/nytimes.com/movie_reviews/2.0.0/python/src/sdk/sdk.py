import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://api.nytimes.com/svc/movies/v2",
	"https://api.nytimes.com/svc/movies/v2",
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

    
    def get_critics_resource_type_json(self, request: operations.GetCriticsResourceTypeJSONRequest) -> operations.GetCriticsResourceTypeJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/critics/{resource-type}.json", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCriticsResourceTypeJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCriticsResourceTypeJSON200ApplicationJSON])
                res.get_critics_resource_type_json_200_application_json_object = out

        return res

    
    def get_reviews_resource_type_json(self, request: operations.GetReviewsResourceTypeJSONRequest) -> operations.GetReviewsResourceTypeJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/reviews/{resource-type}.json", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReviewsResourceTypeJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReviewsResourceTypeJSON200ApplicationJSON])
                res.get_reviews_resource_type_json_200_application_json_object = out

        return res

    
    def get_reviews_search_json(self, request: operations.GetReviewsSearchJSONRequest) -> operations.GetReviewsSearchJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/reviews/search.json"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReviewsSearchJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReviewsSearchJSON200ApplicationJSON])
                res.get_reviews_search_json_200_application_json_object = out

        return res

    