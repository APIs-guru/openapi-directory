import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class DesktopLogs:
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

    
    def get_network_sm_device_desktop_logs(self, request: operations.GetNetworkSmDeviceDesktopLogsRequest) -> operations.GetNetworkSmDeviceDesktopLogsResponse:
        r"""Return historical records of various Systems Manager network connection details for desktop devices.
        Return historical records of various Systems Manager network connection details for desktop devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/desktopLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDesktopLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_desktop_logs_200_application_json_object = out

        return res

    