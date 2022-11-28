import requests
from sdk.models import operations
from . import utils

class RequestInspection:
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

    
    def get_headers(self) -> operations.GetHeadersResponse:
        r"""Return the incoming request's HTTP headers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/headers"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHeadersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ip(self) -> operations.GetIPResponse:
        r"""Returns the requester's IP Address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ip"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_user_agent(self) -> operations.GetUserAgentResponse:
        r"""Return the incoming requests's User-Agent header.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user-agent"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    