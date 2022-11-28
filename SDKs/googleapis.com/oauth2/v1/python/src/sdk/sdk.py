
__doc__ = """ SDK Documentation: https://developers.google.com/identity/protocols/oauth2/"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils


from .userinfo import Userinfo


SERVERS = [
	"https://www.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/identity/protocols/oauth2/"""
    userinfo: Userinfo

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
        
    
    
    
    def oauth2_tokeninfo(self, request: operations.Oauth2TokeninfoRequest) -> operations.Oauth2TokeninfoResponse:
        r"""Get token info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth2/v1/tokeninfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Oauth2TokeninfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tokeninfo])
                res.tokeninfo = out

        return res

    