import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class WarmSpare:
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

    
    def get_device_switch_warm_spare(self, request: operations.GetDeviceSwitchWarmSpareRequest) -> operations.GetDeviceSwitchWarmSpareResponse:
        r"""Return warm spare configuration for a switch
        Return warm spare configuration for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_warm_spare_200_application_json_object = out

        return res

    
    def get_network_appliance_warm_spare(self, request: operations.GetNetworkApplianceWarmSpareRequest) -> operations.GetNetworkApplianceWarmSpareResponse:
        r"""Return MX warm spare settings
        Return MX warm spare settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    def swap_network_appliance_warm_spare(self, request: operations.SwapNetworkApplianceWarmSpareRequest) -> operations.SwapNetworkApplianceWarmSpareResponse:
        r"""Swap MX primary and warm spare appliances
        Swap MX primary and warm spare appliances
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare/swap", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SwapNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.swap_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    def update_device_switch_warm_spare(self, request: operations.UpdateDeviceSwitchWarmSpareRequest) -> operations.UpdateDeviceSwitchWarmSpareResponse:
        r"""Update warm spare configuration for a switch
        Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_warm_spare_200_application_json_object = out

        return res

    
    def update_network_appliance_warm_spare(self, request: operations.UpdateNetworkApplianceWarmSpareRequest) -> operations.UpdateNetworkApplianceWarmSpareResponse:
        r"""Update MX warm spare settings
        Update MX warm spare settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_warm_spare_200_application_json_object = out

        return res

    