import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Monitor:
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

    
    def generate_device_camera_snapshot(self, request: operations.GenerateDeviceCameraSnapshotRequest) -> operations.GenerateDeviceCameraSnapshotResponse:
        r"""Generate a snapshot of what the camera sees at the specified time and return a link to that image.
        Generate a snapshot of what the camera sees at the specified time and return a link to that image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/generateSnapshot", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenerateDeviceCameraSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.generate_device_camera_snapshot_202_application_json_object = out

        return res

    
    def get_device_appliance_dhcp_subnets(self, request: operations.GetDeviceApplianceDhcpSubnetsRequest) -> operations.GetDeviceApplianceDhcpSubnetsResponse:
        r"""Return the DHCP subnet information for an appliance
        Return the DHCP subnet information for an appliance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/appliance/dhcp/subnets", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceApplianceDhcpSubnetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_appliance_dhcp_subnets_200_application_json_object = out

        return res

    
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

    
    def get_device_camera_analytics_live(self, request: operations.GetDeviceCameraAnalyticsLiveRequest) -> operations.GetDeviceCameraAnalyticsLiveResponse:
        r"""Returns live state from camera of analytics zones
        Returns live state from camera of analytics zones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/live", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsLiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_live_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_overview(self, request: operations.GetDeviceCameraAnalyticsOverviewRequest) -> operations.GetDeviceCameraAnalyticsOverviewResponse:
        r"""Returns an overview of aggregate analytics data for a timespan
        Returns an overview of aggregate analytics data for a timespan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_overview_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_recent(self, request: operations.GetDeviceCameraAnalyticsRecentRequest) -> operations.GetDeviceCameraAnalyticsRecentResponse:
        r"""Returns most recent record for analytics zones
        Returns most recent record for analytics zones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/recent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsRecentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_recent_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_zone_history(self, request: operations.GetDeviceCameraAnalyticsZoneHistoryRequest) -> operations.GetDeviceCameraAnalyticsZoneHistoryResponse:
        r"""Return historical records for analytic zones
        Return historical records for analytic zones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/zones/{zoneId}/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsZoneHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_zone_history_200_application_json_object = out

        return res

    
    def get_device_camera_analytics_zones(self, request: operations.GetDeviceCameraAnalyticsZonesRequest) -> operations.GetDeviceCameraAnalyticsZonesResponse:
        r"""Returns all configured analytic zones for this camera
        Returns all configured analytic zones for this camera
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/camera/analytics/zones", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCameraAnalyticsZonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_camera_analytics_zones_200_application_json_object = out

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

    
    def get_device_switch_ports_statuses(self, request: operations.GetDeviceSwitchPortsStatusesRequest) -> operations.GetDeviceSwitchPortsStatusesResponse:
        r"""Return the status for all the ports of a switch
        Return the status for all the ports of a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_200_application_json_object = out

        return res

    
    def get_device_switch_ports_statuses_packets(self, request: operations.GetDeviceSwitchPortsStatusesPacketsRequest) -> operations.GetDeviceSwitchPortsStatusesPacketsResponse:
        r"""Return the packet counters for all the ports of a switch
        Return the packet counters for all the ports of a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses/packets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesPacketsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_packets_200_application_json_object = out

        return res

    
    def get_device_wireless_connection_stats(self, request: operations.GetDeviceWirelessConnectionStatsRequest) -> operations.GetDeviceWirelessConnectionStatsResponse:
        r"""Aggregated connectivity info for a given AP on this network
        Aggregated connectivity info for a given AP on this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_connection_stats_200_application_json_object = out

        return res

    
    def get_device_wireless_latency_stats(self, request: operations.GetDeviceWirelessLatencyStatsRequest) -> operations.GetDeviceWirelessLatencyStatsResponse:
        r"""Aggregated latency info for a given AP on this network
        Aggregated latency info for a given AP on this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_latency_stats_200_application_json_object = out

        return res

    
    def get_device_wireless_status(self, request: operations.GetDeviceWirelessStatusRequest) -> operations.GetDeviceWirelessStatusResponse:
        r"""Return the SSID statuses of an access point
        Return the SSID statuses of an access point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/status", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_status_200_application_json_object = out

        return res

    
    def get_network_appliance_client_security_events(self, request: operations.GetNetworkApplianceClientSecurityEventsRequest) -> operations.GetNetworkApplianceClientSecurityEventsResponse:
        r"""List the security events for a client
        List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/clients/{clientId}/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceClientSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_client_security_events_200_application_json_object = out

        return res

    
    def get_network_appliance_security_events(self, request: operations.GetNetworkApplianceSecurityEventsRequest) -> operations.GetNetworkApplianceSecurityEventsResponse:
        r"""List the security events for a network
        List the security events for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_events_200_application_json_object = out

        return res

    
    def get_network_appliance_uplinks_usage_history(self, request: operations.GetNetworkApplianceUplinksUsageHistoryRequest) -> operations.GetNetworkApplianceUplinksUsageHistoryResponse:
        r"""Get the sent and received bytes for each uplink of a network.
        Get the sent and received bytes for each uplink of a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/uplinks/usageHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceUplinksUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_uplinks_usage_history_200_application_json_object = out

        return res

    
    def get_network_bluetooth_client(self, request: operations.GetNetworkBluetoothClientRequest) -> operations.GetNetworkBluetoothClientResponse:
        r"""Return a Bluetooth client
        Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/bluetoothClients/{bluetoothClientId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkBluetoothClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_bluetooth_client_200_application_json_object = out

        return res

    
    def get_network_bluetooth_clients(self, request: operations.GetNetworkBluetoothClientsRequest) -> operations.GetNetworkBluetoothClientsResponse:
        r"""List the Bluetooth clients seen by APs in this network
        List the Bluetooth clients seen by APs in this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/bluetoothClients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkBluetoothClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_bluetooth_clients_200_application_json_object = out

        return res

    
    def get_network_client(self, request: operations.GetNetworkClientRequest) -> operations.GetNetworkClientResponse:
        r"""Return the client associated with the given identifier
        Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_200_application_json_object = out

        return res

    
    def get_network_client_traffic_history(self, request: operations.GetNetworkClientTrafficHistoryRequest) -> operations.GetNetworkClientTrafficHistoryResponse:
        r"""Return the client's network traffic data over time
        Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/trafficHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientTrafficHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_traffic_history_200_application_json_object = out

        return res

    
    def get_network_client_usage_history(self, request: operations.GetNetworkClientUsageHistoryRequest) -> operations.GetNetworkClientUsageHistoryResponse:
        r"""Return the client's daily usage history
        Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/usageHistory", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_usage_history_200_application_json_object = out

        return res

    
    def get_network_clients(self, request: operations.GetNetworkClientsRequest) -> operations.GetNetworkClientsResponse:
        r"""List the clients that have used this network in the timespan
        List the clients that have used this network in the timespan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_200_application_json_object = out

        return res

    
    def get_network_clients_application_usage(self, request: operations.GetNetworkClientsApplicationUsageRequest) -> operations.GetNetworkClientsApplicationUsageResponse:
        r"""Return the application usage data for clients
        Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/applicationUsage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsApplicationUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_application_usage_200_application_json_object = out

        return res

    
    def get_network_clients_overview(self, request: operations.GetNetworkClientsOverviewRequest) -> operations.GetNetworkClientsOverviewResponse:
        r"""Return overview statistics for network clients
        Return overview statistics for network clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_overview_200_application_json_object = out

        return res

    
    def get_network_clients_usage_histories(self, request: operations.GetNetworkClientsUsageHistoriesRequest) -> operations.GetNetworkClientsUsageHistoriesResponse:
        r"""Return the usage histories for clients
        Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/usageHistories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientsUsageHistoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_clients_usage_histories_200_application_json_object = out

        return res

    
    def get_network_events(self, request: operations.GetNetworkEventsRequest) -> operations.GetNetworkEventsResponse:
        r"""List the events for the network
        List the events for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_events_200_application_json_object = out

        return res

    
    def get_network_events_event_types(self, request: operations.GetNetworkEventsEventTypesRequest) -> operations.GetNetworkEventsEventTypesResponse:
        r"""List the event type to human-readable description
        List the event type to human-readable description
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/events/eventTypes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkEventsEventTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_events_event_types_200_application_json_object = out

        return res

    
    def get_network_insight_application_health_by_time(self, request: operations.GetNetworkInsightApplicationHealthByTimeRequest) -> operations.GetNetworkInsightApplicationHealthByTimeResponse:
        r"""Get application health by time
        Get application health by time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/insight/applications/{applicationId}/healthByTime", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkInsightApplicationHealthByTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_insight_application_health_by_time_200_application_json_object = out

        return res

    
    def get_network_network_health_channel_utilization(self, request: operations.GetNetworkNetworkHealthChannelUtilizationRequest) -> operations.GetNetworkNetworkHealthChannelUtilizationResponse:
        r"""Get the channel utilization over each radio for all APs in a network.
        Get the channel utilization over each radio for all APs in a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/networkHealth/channelUtilization", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkNetworkHealthChannelUtilizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_network_health_channel_utilization_200_application_json_object = out

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

    
    def get_network_splash_login_attempts(self, request: operations.GetNetworkSplashLoginAttemptsRequest) -> operations.GetNetworkSplashLoginAttemptsResponse:
        r"""List the splash login attempts for a network
        List the splash login attempts for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/splashLoginAttempts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSplashLoginAttemptsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_splash_login_attempts_200_application_json_object = out

        return res

    
    def get_network_traffic(self, request: operations.GetNetworkTrafficRequest) -> operations.GetNetworkTrafficResponse:
        r"""Return the traffic analysis data for this network
        Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/traffic", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkTrafficResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_traffic_200_application_json_object = out

        return res

    
    def get_network_wireless_air_marshal(self, request: operations.GetNetworkWirelessAirMarshalRequest) -> operations.GetNetworkWirelessAirMarshalResponse:
        r"""List Air Marshal scan results from a network
        List Air Marshal scan results from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/airMarshal", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessAirMarshalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_air_marshal_200_application_json_object = out

        return res

    
    def get_network_wireless_channel_utilization_history(self, request: operations.GetNetworkWirelessChannelUtilizationHistoryRequest) -> operations.GetNetworkWirelessChannelUtilizationHistoryResponse:
        r"""Return AP channel utilization over time for a device or network client
        Return AP channel utilization over time for a device or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/channelUtilizationHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessChannelUtilizationHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_channel_utilization_history_200_application_json_object = out

        return res

    
    def get_network_wireless_client_connection_stats(self, request: operations.GetNetworkWirelessClientConnectionStatsRequest) -> operations.GetNetworkWirelessClientConnectionStatsResponse:
        r"""Aggregated connectivity info for a given client on this network
        Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_client_connectivity_events(self, request: operations.GetNetworkWirelessClientConnectivityEventsRequest) -> operations.GetNetworkWirelessClientConnectivityEventsResponse:
        r"""List the wireless connectivity events for a client within a network in the timespan.
        List the wireless connectivity events for a client within a network in the timespan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/connectivityEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientConnectivityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_connectivity_events_200_application_json_object = out

        return res

    
    def get_network_wireless_client_count_history(self, request: operations.GetNetworkWirelessClientCountHistoryRequest) -> operations.GetNetworkWirelessClientCountHistoryResponse:
        r"""Return wireless client counts over time for a network, device, or network client
        Return wireless client counts over time for a network, device, or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clientCountHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientCountHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_count_history_200_application_json_object = out

        return res

    
    def get_network_wireless_client_latency_history(self, request: operations.GetNetworkWirelessClientLatencyHistoryRequest) -> operations.GetNetworkWirelessClientLatencyHistoryResponse:
        r"""Return the latency history for a client
        Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/latencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_latency_history_200_application_json_object = out

        return res

    
    def get_network_wireless_client_latency_stats(self, request: operations.GetNetworkWirelessClientLatencyStatsRequest) -> operations.GetNetworkWirelessClientLatencyStatsResponse:
        r"""Aggregated latency info for a given client on this network
        Aggregated latency info for a given client on this network. Clients are identified by their MAC.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_clients_connection_stats(self, request: operations.GetNetworkWirelessClientsConnectionStatsRequest) -> operations.GetNetworkWirelessClientsConnectionStatsResponse:
        r"""Aggregated connectivity info for this network, grouped by clients
        Aggregated connectivity info for this network, grouped by clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientsConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_clients_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_clients_latency_stats(self, request: operations.GetNetworkWirelessClientsLatencyStatsRequest) -> operations.GetNetworkWirelessClientsLatencyStatsResponse:
        r"""Aggregated latency info for this network, grouped by clients
        Aggregated latency info for this network, grouped by clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientsLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_clients_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_connection_stats(self, request: operations.GetNetworkWirelessConnectionStatsRequest) -> operations.GetNetworkWirelessConnectionStatsResponse:
        r"""Aggregated connectivity info for this network
        Aggregated connectivity info for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/connectionStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessConnectionStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_connection_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_data_rate_history(self, request: operations.GetNetworkWirelessDataRateHistoryRequest) -> operations.GetNetworkWirelessDataRateHistoryResponse:
        r"""Return PHY data rates over time for a network, device, or network client
        Return PHY data rates over time for a network, device, or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/dataRateHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDataRateHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_data_rate_history_200_application_json_object = out

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

    
    def get_network_wireless_failed_connections(self, request: operations.GetNetworkWirelessFailedConnectionsRequest) -> operations.GetNetworkWirelessFailedConnectionsResponse:
        r"""List of all failed client connection events on this network in a given time range
        List of all failed client connection events on this network in a given time range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/failedConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessFailedConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_failed_connections_200_application_json_object = out

        return res

    
    def get_network_wireless_latency_history(self, request: operations.GetNetworkWirelessLatencyHistoryRequest) -> operations.GetNetworkWirelessLatencyHistoryResponse:
        r"""Return average wireless latency over time for a network, device, or network client
        Return average wireless latency over time for a network, device, or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/latencyHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessLatencyHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_latency_history_200_application_json_object = out

        return res

    
    def get_network_wireless_latency_stats(self, request: operations.GetNetworkWirelessLatencyStatsRequest) -> operations.GetNetworkWirelessLatencyStatsResponse:
        r"""Aggregated latency info for this network
        Aggregated latency info for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_mesh_statuses(self, request: operations.GetNetworkWirelessMeshStatusesRequest) -> operations.GetNetworkWirelessMeshStatusesResponse:
        r"""List wireless mesh statuses for repeaters
        List wireless mesh statuses for repeaters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/meshStatuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessMeshStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_mesh_statuses_200_application_json_object = out

        return res

    
    def get_network_wireless_signal_quality_history(self, request: operations.GetNetworkWirelessSignalQualityHistoryRequest) -> operations.GetNetworkWirelessSignalQualityHistoryResponse:
        r"""Return signal quality (SNR/RSSI) over time for a device or network client
        Return signal quality (SNR/RSSI) over time for a device or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/signalQualityHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessSignalQualityHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_signal_quality_history_200_application_json_object = out

        return res

    
    def get_network_wireless_usage_history(self, request: operations.GetNetworkWirelessUsageHistoryRequest) -> operations.GetNetworkWirelessUsageHistoryResponse:
        r"""Return AP usage over time for a device or network client
        Return AP usage over time for a device or network client
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/usageHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_usage_history_200_application_json_object = out

        return res

    
    def get_organization_api_requests(self, request: operations.GetOrganizationAPIRequestsRequest) -> operations.GetOrganizationAPIRequestsResponse:
        r"""List the API requests made by an organization
        List the API requests made by an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_200_application_json_object = out

        return res

    
    def get_organization_api_requests_overview(self, request: operations.GetOrganizationAPIRequestsOverviewRequest) -> operations.GetOrganizationAPIRequestsOverviewResponse:
        r"""Return an aggregated overview of API requests data
        Return an aggregated overview of API requests data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/apiRequests/overview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationAPIRequestsOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_api_requests_overview_200_application_json_object = out

        return res

    
    def get_organization_appliance_security_events(self, request: operations.GetOrganizationApplianceSecurityEventsRequest) -> operations.GetOrganizationApplianceSecurityEventsResponse:
        r"""List the security events for an organization
        List the security events for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_events_200_application_json_object = out

        return res

    
    def get_organization_appliance_uplink_statuses(self, request: operations.GetOrganizationApplianceUplinkStatusesRequest) -> operations.GetOrganizationApplianceUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MX and Z series appliances in the organization
        List the uplink status of every Meraki MX and Z series appliances in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_uplink_statuses_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_stats(self, request: operations.GetOrganizationApplianceVpnStatsRequest) -> operations.GetOrganizationApplianceVpnStatsResponse:
        r"""Show VPN history stat for networks in an organization
        Show VPN history stat for networks in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/stats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_stats_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_statuses(self, request: operations.GetOrganizationApplianceVpnStatusesRequest) -> operations.GetOrganizationApplianceVpnStatusesResponse:
        r"""Show VPN status for networks in an organization
        Show VPN status for networks in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_statuses_200_application_json_object = out

        return res

    
    def get_organization_cellular_gateway_uplink_statuses(self, request: operations.GetOrganizationCellularGatewayUplinkStatusesRequest) -> operations.GetOrganizationCellularGatewayUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MG cellular gateway in the organization
        List the uplink status of every Meraki MG cellular gateway in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/cellularGateway/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCellularGatewayUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_cellular_gateway_uplink_statuses_200_application_json_object = out

        return res

    
    def get_organization_configuration_changes(self, request: operations.GetOrganizationConfigurationChangesRequest) -> operations.GetOrganizationConfigurationChangesResponse:
        r"""View the Change Log for your organization
        View the Change Log for your organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configurationChanges", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigurationChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_configuration_changes_200_application_json_object = out

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

    
    def get_organization_licenses_overview(self, request: operations.GetOrganizationLicensesOverviewRequest) -> operations.GetOrganizationLicensesOverviewResponse:
        r"""Return an overview of the license state for an organization
        Return an overview of the license state for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/licenses/overview", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationLicensesOverviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_licenses_overview_200_application_json_object = out

        return res

    
    def get_organization_openapi_spec(self, request: operations.GetOrganizationOpenapiSpecRequest) -> operations.GetOrganizationOpenapiSpecResponse:
        r"""Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
        Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/openapiSpec", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationOpenapiSpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_openapi_spec_200_application_json_object = out

        return res

    
    def get_organization_uplinks_statuses(self, request: operations.GetOrganizationUplinksStatusesRequest) -> operations.GetOrganizationUplinksStatusesResponse:
        r"""List the uplink status of every Meraki MX, MG and Z series devices in the organization
        List the uplink status of every Meraki MX, MG and Z series devices in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/uplinks/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationUplinksStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_uplinks_statuses_200_application_json_object = out

        return res

    
    def get_organization_webhooks_alert_types(self, request: operations.GetOrganizationWebhooksAlertTypesRequest) -> operations.GetOrganizationWebhooksAlertTypesResponse:
        r"""Return a list of alert types to be used with managing webhook alerts
        Return a list of alert types to be used with managing webhook alerts
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/alertTypes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksAlertTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_alert_types_200_application_json_object = out

        return res

    
    def get_organization_webhooks_logs(self, request: operations.GetOrganizationWebhooksLogsRequest) -> operations.GetOrganizationWebhooksLogsResponse:
        r"""Return the log of webhook POSTs sent
        Return the log of webhook POSTs sent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/webhooks/logs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationWebhooksLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_webhooks_logs_200_application_json_object = out

        return res

    