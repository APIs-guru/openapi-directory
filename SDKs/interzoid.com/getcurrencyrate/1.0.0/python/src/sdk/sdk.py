
__doc__ = """ SDK Documentation: https://www.interzoid.com/services/getcurrencyrate - API home page and documentation"""
import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.interzoid.com",
]


class SDK:
    r"""SDK Documentation: https://www.interzoid.com/services/getcurrencyrate - API home page and documentation"""

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
        
    
    
    
    def getcurrencyrate(self, request: operations.GetcurrencyrateRequest) -> operations.GetcurrencyrateResponse:
        r"""Gets a foreign currency rate for one US Dollar
        Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getcurrencyrate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetcurrencyrateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Getcurrencyrate200ApplicationJSON])
                res.getcurrencyrate_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 500:
            pass

        return res

    