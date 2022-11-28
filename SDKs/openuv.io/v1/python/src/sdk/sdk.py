

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.openuv.io/api/{version}",
]


class SDK:
    

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
        
    
    
    
    def get_forecast(self, request: operations.GetForecastRequest) -> operations.GetForecastResponse:
        r"""Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/forecast"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[List[shared.Forecast]]])
                res.forecast_results = out

        return res

    
    def get_protection(self, request: operations.GetProtectionRequest) -> operations.GetProtectionResponse:
        r"""Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/protection"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectionResult])
                res.protection_result = out

        return res

    
    def get_uv(self, request: operations.GetUvRequest) -> operations.GetUvResponse:
        r"""Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/uv"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UvIndexResult])
                res.uv_index_result = out

        return res

    