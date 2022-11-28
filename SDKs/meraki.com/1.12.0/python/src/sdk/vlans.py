import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Vlans:
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

    
    def create_network_appliance_vlan(self, request: operations.CreateNetworkApplianceVlanRequest) -> operations.CreateNetworkApplianceVlanResponse:
        r"""Add a VLAN
        Add a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_vlan_201_application_json_object = out

        return res

    
    def delete_network_appliance_vlan(self, request: operations.DeleteNetworkApplianceVlanRequest) -> operations.DeleteNetworkApplianceVlanResponse:
        r"""Delete a VLAN from a network
        Delete a VLAN from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_appliance_vlan(self, request: operations.GetNetworkApplianceVlanRequest) -> operations.GetNetworkApplianceVlanResponse:
        r"""Return a VLAN
        Return a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlan_200_application_json_object = out

        return res

    
    def get_network_appliance_vlans(self, request: operations.GetNetworkApplianceVlansRequest) -> operations.GetNetworkApplianceVlansResponse:
        r"""List the VLANs for an MX network
        List the VLANs for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_200_application_json_object = out

        return res

    
    def get_network_appliance_vlans_settings(self, request: operations.GetNetworkApplianceVlansSettingsRequest) -> operations.GetNetworkApplianceVlansSettingsResponse:
        r"""Returns the enabled status of VLANs for the network
        Returns the enabled status of VLANs for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_settings_200_application_json_object = out

        return res

    
    def update_network_appliance_vlan(self, request: operations.UpdateNetworkApplianceVlanRequest) -> operations.UpdateNetworkApplianceVlanResponse:
        r"""Update a VLAN
        Update a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlan_200_application_json_object = out

        return res

    
    def update_network_appliance_vlans_settings(self, request: operations.UpdateNetworkApplianceVlansSettingsRequest) -> operations.UpdateNetworkApplianceVlansSettingsResponse:
        r"""Enable/Disable VLANs for the given network
        Enable/Disable VLANs for the given network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlans_settings_200_application_json_object = out

        return res

    