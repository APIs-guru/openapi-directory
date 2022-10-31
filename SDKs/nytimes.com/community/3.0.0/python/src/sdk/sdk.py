import warnings
import requests
from typing import Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"http://api.nytimes.com/svc/community/v3",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_user_content_by_date_json(self, request: operations.GetUserContentByDateJSONRequest) -> operations.GetUserContentByDateJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user-content/by-date.json"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentByDateJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentByDateJSON200ApplicationJSON])
                res.get_user_content_by_date_json_200_application_json_object = out

        return res

    
    def get_user_content_recent_json(self, request: operations.GetUserContentRecentJSONRequest) -> operations.GetUserContentRecentJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user-content/recent.json"

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentRecentJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentRecentJSON200ApplicationJSON])
                res.get_user_content_recent_json_200_application_json_object = out

        return res

    
    def get_user_content_url_json(self, request: operations.GetUserContentURLJSONRequest) -> operations.GetUserContentURLJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user-content/url.json"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentURLJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentURLJSON200ApplicationJSON])
                res.get_user_content_url_json_200_application_json_object = out

        return res

    
    def get_user_content_user_json(self, request: operations.GetUserContentUserJSONRequest) -> operations.GetUserContentUserJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user-content/user.json"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentUserJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentUserJSON200ApplicationJSON])
                res.get_user_content_user_json_200_application_json_object = out

        return res

    