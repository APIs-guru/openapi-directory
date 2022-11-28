import requests
from sdk.models import operations
from . import utils

class SwaggerDoc:
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

    
    def get_swagger_doc_format_(self) -> operations.GetSwaggerDocFormatResponse:
        r"""Swagger compatible API description
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/swagger_doc.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSwaggerDocFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_swagger_doc_name_format_(self, request: operations.GetSwaggerDocNameFormatRequest) -> operations.GetSwaggerDocNameFormatResponse:
        r"""Swagger compatible API description for specific API
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/swagger_doc/{name}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSwaggerDocNameFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    