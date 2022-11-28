import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Settings:
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

    
    def get_device_camera_video_settings(self, request: operations.GetDeviceCameraVideoSettingsRequest) -> operations.GetDeviceCameraVideoSettingsResponse:
        r"""Returns video settings for the given camera
        Returns video settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_video_settings_200_application_json_object = out

        return res

    
    def get_device_wireless_bluetooth_settings(self, request: operations.GetDeviceWirelessBluetoothSettingsRequest) -> operations.GetDeviceWirelessBluetoothSettingsResponse:
        r"""Return the bluetooth settings for a wireless device
        Return the bluetooth settings for a wireless device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def get_device_wireless_radio_settings(self, request: operations.GetDeviceWirelessRadioSettingsRequest) -> operations.GetDeviceWirelessRadioSettingsResponse:
        r"""Return the radio settings of a device
        Return the radio settings of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    def get_network_alerts_settings(self, request: operations.GetNetworkAlertsSettingsRequest) -> operations.GetNetworkAlertsSettingsResponse:
        r"""Return the alert configuration for this network
        Return the alert configuration for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_alerts_settings_200_application_json_object = out

        return res

    
    def get_network_appliance_settings(self, request: operations.GetNetworkApplianceSettingsRequest) -> operations.GetNetworkApplianceSettingsResponse:
        r"""Return the appliance settings for a network
        Return the appliance settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_settings_200_application_json_object = out

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

    
    def get_network_settings(self, request: operations.GetNetworkSettingsRequest) -> operations.GetNetworkSettingsResponse:
        r"""Return the settings for a network
        Return the settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_settings_200_application_json_object = out

        return res

    
    def get_network_switch_settings(self, request: operations.GetNetworkSwitchSettingsRequest) -> operations.GetNetworkSwitchSettingsResponse:
        r"""Returns the switch network settings
        Returns the switch network settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_bluetooth_settings(self, request: operations.GetNetworkWirelessBluetoothSettingsRequest) -> operations.GetNetworkWirelessBluetoothSettingsResponse:
        r"""Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_settings(self, request: operations.GetNetworkWirelessSettingsRequest) -> operations.GetNetworkWirelessSettingsResponse:
        r"""Return the wireless settings for a network
        Return the wireless settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_settings_200_application_json_object = out

        return res

    
    def get_network_wireless_ssid_splash_settings(self, request: operations.GetNetworkWirelessSsidSplashSettingsRequest) -> operations.GetNetworkWirelessSsidSplashSettingsResponse:
        r"""Display the splash page settings for the given SSID
        Display the splash page settings for the given SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    def get_organization_adaptive_policy_settings(self, request: operations.GetOrganizationAdaptivePolicySettingsRequest) -> operations.GetOrganizationAdaptivePolicySettingsResponse:
        r"""Returns global adaptive policy settings in an organization
        Returns global adaptive policy settings in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    
    def update_device_camera_video_settings(self, request: operations.UpdateDeviceCameraVideoSettingsRequest) -> operations.UpdateDeviceCameraVideoSettingsResponse:
        r"""Update video settings for the given camera
        Update video settings for the given camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/video/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCameraVideoSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_camera_video_settings_200_application_json_object = out

        return res

    
    def update_device_wireless_bluetooth_settings(self, request: operations.UpdateDeviceWirelessBluetoothSettingsRequest) -> operations.UpdateDeviceWirelessBluetoothSettingsResponse:
        r"""Update the bluetooth settings for a wireless device
        Update the bluetooth settings for a wireless device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/bluetooth/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def update_device_wireless_radio_settings(self, request: operations.UpdateDeviceWirelessRadioSettingsRequest) -> operations.UpdateDeviceWirelessRadioSettingsResponse:
        r"""Update the radio settings of a device
        Update the radio settings of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/radio/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceWirelessRadioSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_wireless_radio_settings_200_application_json_object = out

        return res

    
    def update_network_alerts_settings(self, request: operations.UpdateNetworkAlertsSettingsRequest) -> operations.UpdateNetworkAlertsSettingsResponse:
        r"""Update the alert configuration for this network
        Update the alert configuration for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/alerts/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAlertsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_alerts_settings_200_application_json_object = out

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

    
    def update_network_settings(self, request: operations.UpdateNetworkSettingsRequest) -> operations.UpdateNetworkSettingsResponse:
        r"""Update the settings for a network
        Update the settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_settings_200_application_json_object = out

        return res

    
    def update_network_switch_settings(self, request: operations.UpdateNetworkSwitchSettingsRequest) -> operations.UpdateNetworkSwitchSettingsResponse:
        r"""Update switch network settings
        Update switch network settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_bluetooth_settings(self, request: operations.UpdateNetworkWirelessBluetoothSettingsRequest) -> operations.UpdateNetworkWirelessBluetoothSettingsResponse:
        r"""Update the Bluetooth settings for a network
        Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/bluetooth/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessBluetoothSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_bluetooth_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_settings(self, request: operations.UpdateNetworkWirelessSettingsRequest) -> operations.UpdateNetworkWirelessSettingsResponse:
        r"""Update the wireless settings for a network
        Update the wireless settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_settings_200_application_json_object = out

        return res

    
    def update_network_wireless_ssid_splash_settings(self, request: operations.UpdateNetworkWirelessSsidSplashSettingsRequest) -> operations.UpdateNetworkWirelessSsidSplashSettingsResponse:
        r"""Modify the splash page settings for the given SSID
        Modify the splash page settings for the given SSID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkWirelessSsidSplashSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_wireless_ssid_splash_settings_200_application_json_object = out

        return res

    
    def update_organization_adaptive_policy_settings(self, request: operations.UpdateOrganizationAdaptivePolicySettingsRequest) -> operations.UpdateOrganizationAdaptivePolicySettingsResponse:
        r"""Update global adaptive policy settings
        Update global adaptive policy settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/adaptivePolicy/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationAdaptivePolicySettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_adaptive_policy_settings_200_application_json_object = out

        return res

    