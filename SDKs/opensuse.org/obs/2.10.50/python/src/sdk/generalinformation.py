import requests
from sdk.models import operations
from . import utils

class GeneralInformation:
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

    
    def get_about(self) -> operations.GetAboutResponse:
        r"""Get information about API.
        Get generic information about the API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/about"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAboutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_architectures(self, request: operations.GetArchitecturesRequest) -> operations.GetArchitecturesResponse:
        r"""List all known architectures.
        Get a list of all known architectures known to OBS in general. This is not the list of architectures provided by this instance. Check the schedulers element from the `/configuration` route for this.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/architectures"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArchitecturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_architectures_architecture_name_(self, request: operations.GetArchitecturesArchitectureNameRequest) -> operations.GetArchitecturesArchitectureNameResponse:
        r"""Show one architecture.
        Show information about one architecture.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/architectures/{architecture_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArchitecturesArchitectureNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    