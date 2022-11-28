
__doc__ = """ SDK Documentation: http://developer.nytimes.com/"""
import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"http://api.nytimes.com/svc/community/v3",
]


class SDK:
    r"""SDK Documentation: http://developer.nytimes.com/"""

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_user_content_by_date_json(self, request: operations.GetUserContentByDateJSONRequest) -> operations.GetUserContentByDateJSONResponse:
        r"""Comments by Date
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user-content/by-date.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentByDateJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentByDateJSON200ApplicationJSON])
                res.get_user_content_by_date_json_200_application_json_object = out

        return res

    
    def get_user_content_recent_json(self, request: operations.GetUserContentRecentJSONRequest) -> operations.GetUserContentRecentJSONResponse:
        r"""Recent User Comments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user-content/recent.json"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentRecentJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentRecentJSON200ApplicationJSON])
                res.get_user_content_recent_json_200_application_json_object = out

        return res

    
    def get_user_content_url_json(self, request: operations.GetUserContentURLJSONRequest) -> operations.GetUserContentURLJSONResponse:
        r"""Comments by URL
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user-content/url.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentURLJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentURLJSON200ApplicationJSON])
                res.get_user_content_url_json_200_application_json_object = out

        return res

    
    def get_user_content_user_json(self, request: operations.GetUserContentUserJSONRequest) -> operations.GetUserContentUserJSONResponse:
        r"""Comments by User
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user-content/user.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserContentUserJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserContentUserJSON200ApplicationJSON])
                res.get_user_content_user_json_200_application_json_object = out

        return res

    