import requests
from typing import Optional
from sdk.models import operations
from . import utils

class WelcomeAndHealthCheck:
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

    
    def get(self) -> operations.GetResponse:
        r"""/
        ### Welcome & Health Check
        
        Welcome to Herald! You can use the root endpoint to confirm HeraldAPI is available and you are able to successfully connect.
        
        This endpoint does not require authentication.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Get200ApplicationJSON])
                res.get_200_application_json_object = out

        return res

    