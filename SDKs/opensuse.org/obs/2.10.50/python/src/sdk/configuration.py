import requests
from sdk.models import operations
from . import utils

class Configuration:
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

    
    def get_configuration(self, request: operations.GetConfigurationRequest) -> operations.GetConfigurationResponse:
        r"""Display the configuration of this Open Build Service instance
        Display the configuration of this Open Build Service instance.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/configuration"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def put_configuration(self, request: operations.PutConfigurationRequest) -> operations.PutConfigurationResponse:
        r"""Update the configuration of this Open Build Service instance
        Update the configuration of this Open Build Service instance.
        
        This is for admins only.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/configuration"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    