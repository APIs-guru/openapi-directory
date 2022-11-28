import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Devices:
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

    
    def blink_device_leds(self, request: operations.BlinkDeviceLedsRequest) -> operations.BlinkDeviceLedsResponse:
        r"""Blink the LEDs on a device
        Blink the LEDs on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/blinkLeds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BlinkDeviceLedsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.blink_device_leds_202_application_json_object = out

        return res

    
    def checkin_network_sm_devices(self, request: operations.CheckinNetworkSmDevicesRequest) -> operations.CheckinNetworkSmDevicesResponse:
        r"""Force check-in a set of devices
        Force check-in a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/checkin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckinNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.checkin_network_sm_devices_200_application_json_object = out

        return res

    
    def claim_network_devices(self, request: operations.ClaimNetworkDevicesRequest) -> operations.ClaimNetworkDevicesResponse:
        r"""Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/claim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClaimNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def clone_organization_switch_devices(self, request: operations.CloneOrganizationSwitchDevicesRequest) -> operations.CloneOrganizationSwitchDevicesResponse:
        r"""Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
        Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/switch/devices/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneOrganizationSwitchDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.clone_organization_switch_devices_200_application_json_object = out

        return res

    
    def get_device(self, request: operations.GetDeviceRequest) -> operations.GetDeviceResponse:
        r"""Return a single device
        Return a single device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_200_application_json_object = out

        return res

    
    def get_device_clients(self, request: operations.GetDeviceClientsRequest) -> operations.GetDeviceClientsResponse:
        r"""List the clients of a device, up to a maximum of a month ago
        List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_clients_200_application_json_object = out

        return res

    
    def get_device_lldp_cdp(self, request: operations.GetDeviceLldpCdpRequest) -> operations.GetDeviceLldpCdpResponse:
        r"""List LLDP and CDP information for a device
        List LLDP and CDP information for a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/lldpCdp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceLldpCdpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_lldp_cdp_200_application_json_object = out

        return res

    
    def get_device_loss_and_latency_history(self, request: operations.GetDeviceLossAndLatencyHistoryRequest) -> operations.GetDeviceLossAndLatencyHistoryResponse:
        r"""Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
        Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/lossAndLatencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceLossAndLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_loss_and_latency_history_200_application_json_object = out

        return res

    
    def get_device_management_interface(self, request: operations.GetDeviceManagementInterfaceRequest) -> operations.GetDeviceManagementInterfaceResponse:
        r"""Return the management interface settings for a device
        Return the management interface settings for a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/managementInterface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_management_interface_200_application_json_object = out

        return res

    
    def get_network_devices(self, request: operations.GetNetworkDevicesRequest) -> operations.GetNetworkDevicesResponse:
        r"""List the devices in a network
        List the devices in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_devices_200_application_json_object = out

        return res

    
    def get_network_sm_device_cellular_usage_history(self, request: operations.GetNetworkSmDeviceCellularUsageHistoryRequest) -> operations.GetNetworkSmDeviceCellularUsageHistoryResponse:
        r"""Return the client's daily cellular data usage history
        Return the client's daily cellular data usage history. Usage data is in kilobytes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceCellularUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_cellular_usage_history_200_application_json_object = out

        return res

    
    def get_network_sm_device_certs(self, request: operations.GetNetworkSmDeviceCertsRequest) -> operations.GetNetworkSmDeviceCertsResponse:
        r"""List the certs on a device
        List the certs on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/certs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceCertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_certs_200_application_json_object = out

        return res

    
    def get_network_sm_device_connectivity(self, request: operations.GetNetworkSmDeviceConnectivityRequest) -> operations.GetNetworkSmDeviceConnectivityResponse:
        r"""Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
        Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/connectivity", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceConnectivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_connectivity_200_application_json_object = out

        return res

    
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

    
    def get_network_sm_device_device_command_logs(self, request: operations.GetNetworkSmDeviceDeviceCommandLogsRequest) -> operations.GetNetworkSmDeviceDeviceCommandLogsResponse:
        r"""Return historical records of commands sent to Systems Manager devices
        Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDeviceCommandLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_device_command_logs_200_application_json_object = out

        return res

    
    def get_network_sm_device_device_profiles(self, request: operations.GetNetworkSmDeviceDeviceProfilesRequest) -> operations.GetNetworkSmDeviceDeviceProfilesResponse:
        r"""Get the profiles associated with a device
        Get the profiles associated with a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/deviceProfiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceDeviceProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_device_profiles_200_application_json_object = out

        return res

    
    def get_network_sm_device_network_adapters(self, request: operations.GetNetworkSmDeviceNetworkAdaptersRequest) -> operations.GetNetworkSmDeviceNetworkAdaptersResponse:
        r"""List the network adapters of a device
        List the network adapters of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/networkAdapters", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceNetworkAdaptersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_network_adapters_200_application_json_object = out

        return res

    
    def get_network_sm_device_performance_history(self, request: operations.GetNetworkSmDevicePerformanceHistoryRequest) -> operations.GetNetworkSmDevicePerformanceHistoryResponse:
        r"""Return historical records of various Systems Manager client metrics for desktop devices.
        Return historical records of various Systems Manager client metrics for desktop devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/performanceHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDevicePerformanceHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_performance_history_200_application_json_object = out

        return res

    
    def get_network_sm_device_restrictions(self, request: operations.GetNetworkSmDeviceRestrictionsRequest) -> operations.GetNetworkSmDeviceRestrictionsResponse:
        r"""List the restrictions on a device
        List the restrictions on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/restrictions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_restrictions_200_application_json_object = out

        return res

    
    def get_network_sm_device_security_centers(self, request: operations.GetNetworkSmDeviceSecurityCentersRequest) -> operations.GetNetworkSmDeviceSecurityCentersResponse:
        r"""List the security centers on a device
        List the security centers on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/securityCenters", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSecurityCentersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_security_centers_200_application_json_object = out

        return res

    
    def get_network_sm_device_softwares(self, request: operations.GetNetworkSmDeviceSoftwaresRequest) -> operations.GetNetworkSmDeviceSoftwaresResponse:
        r"""Get a list of softwares associated with a device
        Get a list of softwares associated with a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/softwares", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceSoftwaresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_softwares_200_application_json_object = out

        return res

    
    def get_network_sm_device_wlan_lists(self, request: operations.GetNetworkSmDeviceWlanListsRequest) -> operations.GetNetworkSmDeviceWlanListsResponse:
        r"""List the saved SSID names on a device
        List the saved SSID names on a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/wlanLists", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDeviceWlanListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_device_wlan_lists_200_application_json_object = out

        return res

    
    def get_network_sm_devices(self, request: operations.GetNetworkSmDevicesRequest) -> operations.GetNetworkSmDevicesResponse:
        r"""List the devices enrolled in an SM network with various specified fields and filters
        List the devices enrolled in an SM network with various specified fields and filters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_devices_200_application_json_object = out

        return res

    
    def get_network_wireless_devices_connection_stats(self, request: operations.GetNetworkWirelessDevicesConnectionStatsRequest) -> operations.GetNetworkWirelessDevicesConnectionStatsResponse:
        r"""Aggregated connectivity info for this network, grouped by node
        Aggregated connectivity info for this network, grouped by node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/devices/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDevicesConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_devices_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_devices_latency_stats(self, request: operations.GetNetworkWirelessDevicesLatencyStatsRequest) -> operations.GetNetworkWirelessDevicesLatencyStatsResponse:
        r"""Aggregated latency info for this network, grouped by node
        Aggregated latency info for this network, grouped by node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/devices/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDevicesLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_devices_latency_stats_200_application_json_object = out

        return res

    
    def get_organization_devices(self, request: operations.GetOrganizationDevicesRequest) -> operations.GetOrganizationDevicesResponse:
        r"""List the devices in an organization
        List the devices in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_200_application_json_object = out

        return res

    
    def get_organization_devices_statuses(self, request: operations.GetOrganizationDevicesStatusesRequest) -> operations.GetOrganizationDevicesStatusesResponse:
        r"""List the status of every Meraki device in the organization
        List the status of every Meraki device in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_statuses_200_application_json_object = out

        return res

    
    def get_organization_devices_uplinks_loss_and_latency(self, request: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest) -> operations.GetOrganizationDevicesUplinksLossAndLatencyResponse:
        r"""Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/devices/uplinksLossAndLatency", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationDevicesUplinksLossAndLatencyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_devices_uplinks_loss_and_latency_200_application_json_object = out

        return res

    
    def lock_network_sm_devices(self, request: operations.LockNetworkSmDevicesRequest) -> operations.LockNetworkSmDevicesResponse:
        r"""Lock a set of devices
        Lock a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/lock", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LockNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.lock_network_sm_devices_200_application_json_object = out

        return res

    
    def modify_network_sm_devices_tags(self, request: operations.ModifyNetworkSmDevicesTagsRequest) -> operations.ModifyNetworkSmDevicesTagsResponse:
        r"""Add, delete, or update the tags of a set of devices
        Add, delete, or update the tags of a set of devices
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/modifyTags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyNetworkSmDevicesTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_network_sm_devices_tags_200_application_json_object = out

        return res

    
    def move_network_sm_devices(self, request: operations.MoveNetworkSmDevicesRequest) -> operations.MoveNetworkSmDevicesResponse:
        r"""Move a set of devices to a new network
        Move a set of devices to a new network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.move_network_sm_devices_200_application_json_object = out

        return res

    
    def reboot_device(self, request: operations.RebootDeviceRequest) -> operations.RebootDeviceResponse:
        r"""Reboot a device
        Reboot a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/reboot", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RebootDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.reboot_device_202_application_json_object = out

        return res

    
    def refresh_network_sm_device_details(self, request: operations.RefreshNetworkSmDeviceDetailsRequest) -> operations.RefreshNetworkSmDeviceDetailsResponse:
        r"""Refresh the details of a device
        Refresh the details of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/refreshDetails", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshNetworkSmDeviceDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def remove_network_devices(self, request: operations.RemoveNetworkDevicesRequest) -> operations.RemoveNetworkDevicesResponse:
        r"""Remove a single device
        Remove a single device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/devices/remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def unenroll_network_sm_device(self, request: operations.UnenrollNetworkSmDeviceRequest) -> operations.UnenrollNetworkSmDeviceResponse:
        r"""Unenroll a device
        Unenroll a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/{deviceId}/unenroll", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnenrollNetworkSmDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unenroll_network_sm_device_200_application_json_object = out

        return res

    
    def update_device(self, request: operations.UpdateDeviceRequest) -> operations.UpdateDeviceResponse:
        r"""Update the attributes of a device
        Update the attributes of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_200_application_json_object = out

        return res

    
    def update_device_management_interface(self, request: operations.UpdateDeviceManagementInterfaceRequest) -> operations.UpdateDeviceManagementInterfaceResponse:
        r"""Update the management interface settings for a device
        Update the management interface settings for a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/managementInterface", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_management_interface_200_application_json_object = out

        return res

    
    def update_network_sm_devices_fields(self, request: operations.UpdateNetworkSmDevicesFieldsRequest) -> operations.UpdateNetworkSmDevicesFieldsResponse:
        r"""Modify the fields of a device
        Modify the fields of a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/fields", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmDevicesFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_devices_fields_200_application_json_object = out

        return res

    
    def wipe_network_sm_devices(self, request: operations.WipeNetworkSmDevicesRequest) -> operations.WipeNetworkSmDevicesResponse:
        r"""Wipe a device
        Wipe a device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/devices/wipe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WipeNetworkSmDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.wipe_network_sm_devices_200_application_json_object = out

        return res

    