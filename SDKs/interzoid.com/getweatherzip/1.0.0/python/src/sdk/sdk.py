
__doc__ = """ SDK Documentation: https://www.interzoid.com/services/getweatherzipcode - API home page and documentation"""
import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.interzoid.com",
]


class SDK:
    r"""SDK Documentation: https://www.interzoid.com/services/getweatherzipcode - API home page and documentation"""

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
        
    
    
    
    def getweatherzipcode(self, request: operations.GetweatherzipcodeRequest) -> operations.GetweatherzipcodeResponse:
        r"""Gets current weather information for a US zip code
        Use a US zip code to retrieve current weather information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getweatherzipcode"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetweatherzipcodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Getweatherzipcode200ApplicationJSON])
                res.getweatherzipcode_200_application_json_object = out
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

    