import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Performance:
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

    
    def get_device_appliance_performance(self, request: operations.GetDeviceAppliancePerformanceRequest) -> operations.GetDeviceAppliancePerformanceResponse:
        r"""Return the performance score for a single MX
        Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/appliance/performance", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceAppliancePerformanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_appliance_performance_200_application_json_object = out

        return res

    