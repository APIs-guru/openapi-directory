import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Schedules:
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

    
    def get_network_camera_schedules(self, request: operations.GetNetworkCameraSchedulesRequest) -> operations.GetNetworkCameraSchedulesResponse:
        r"""Returns a list of all camera recording schedules.
        Returns a list of all camera recording schedules.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/camera/schedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCameraSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_camera_schedules_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_schedules(self, request: operations.GetNetworkWirelessSsidSchedulesRequest) -> operations.GetNetworkWirelessSsidSchedulesResponse:
        r"""List the outage schedule for the SSID
        List the outage schedule for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_schedules(self, request: operations.UpdateNetworkWirelessSsidSchedulesRequest) -> operations.UpdateNetworkWirelessSsidSchedulesResponse:
        r"""Update the outage schedule for the SSID
        Update the outage schedule for the SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_schedules_200_application_json_object = out

        return res

    