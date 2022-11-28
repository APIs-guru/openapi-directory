import requests
from sdk.models import operations
from . import utils

class BaseConversion:
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

    
    def get_numbers_base(self, request: operations.GetNumbersBaseRequest) -> operations.GetNumbersBaseResponse:
        r"""Convert a given number from one base to another base
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/base"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_base_binary(self, request: operations.GetNumbersBaseBinaryRequest) -> operations.GetNumbersBaseBinaryResponse:
        r"""Convert a given number to binary
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/base/binary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseBinaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_base_hex(self, request: operations.GetNumbersBaseHexRequest) -> operations.GetNumbersBaseHexResponse:
        r"""Convert a given number to hexadecimal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/base/hex"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseHexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_base_octal(self, request: operations.GetNumbersBaseOctalRequest) -> operations.GetNumbersBaseOctalResponse:
        r"""Convert a given number to octal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/base/octal"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersBaseOctalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    