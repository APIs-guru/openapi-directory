import requests
from sdk.models import operations
from . import utils

class NumberSystemsConversion:
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

    
    def get_numbers_numeral_chinese(self, request: operations.GetNumbersNumeralChineseRequest) -> operations.GetNumbersNumeralChineseResponse:
        r"""Convert base 10 representation of a given number to chinese numeral.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/numeral/chinese"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersNumeralChineseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_numeral_egyptian(self, request: operations.GetNumbersNumeralEgyptianRequest) -> operations.GetNumbersNumeralEgyptianResponse:
        r"""Convert base 10 representation of a given number to egyptian numeral.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/numeral/egyptian"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersNumeralEgyptianResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_numbers_numeral_roman(self, request: operations.GetNumbersNumeralRomanRequest) -> operations.GetNumbersNumeralRomanResponse:
        r"""Convert base 10 representation of a given number to roman numeral.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/numeral/roman"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersNumeralRomanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    