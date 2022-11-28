import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Monitor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * generateDeviceCameraSnapshot - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     *
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
    **/
    generateDeviceCameraSnapshot(req: operations.GenerateDeviceCameraSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDeviceCameraSnapshotResponse>;
    /**
     * getDeviceApplianceDhcpSubnets - Return the DHCP subnet information for an appliance
     *
     * Return the DHCP subnet information for an appliance
    **/
    getDeviceApplianceDhcpSubnets(req: operations.GetDeviceApplianceDhcpSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceDhcpSubnetsResponse>;
    /**
     * getDeviceAppliancePerformance - Return the performance score for a single MX
     *
     * Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
    **/
    getDeviceAppliancePerformance(req: operations.GetDeviceAppliancePerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAppliancePerformanceResponse>;
    /**
     * getDeviceCameraAnalyticsLive - Returns live state from camera of analytics zones
     *
     * Returns live state from camera of analytics zones
    **/
    getDeviceCameraAnalyticsLive(req: operations.GetDeviceCameraAnalyticsLiveRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsLiveResponse>;
    /**
     * getDeviceCameraAnalyticsOverview - Returns an overview of aggregate analytics data for a timespan
     *
     * Returns an overview of aggregate analytics data for a timespan
    **/
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * getDeviceCameraAnalyticsRecent - Returns most recent record for analytics zones
     *
     * Returns most recent record for analytics zones
    **/
    getDeviceCameraAnalyticsRecent(req: operations.GetDeviceCameraAnalyticsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsRecentResponse>;
    /**
     * getDeviceCameraAnalyticsZoneHistory - Return historical records for analytic zones
     *
     * Return historical records for analytic zones
    **/
    getDeviceCameraAnalyticsZoneHistory(req: operations.GetDeviceCameraAnalyticsZoneHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZoneHistoryResponse>;
    /**
     * getDeviceCameraAnalyticsZones - Returns all configured analytic zones for this camera
     *
     * Returns all configured analytic zones for this camera
    **/
    getDeviceCameraAnalyticsZones(req: operations.GetDeviceCameraAnalyticsZonesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZonesResponse>;
    /**
     * getDeviceClients - List the clients of a device, up to a maximum of a month ago
     *
     * List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
    **/
    getDeviceClients(req: operations.GetDeviceClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceClientsResponse>;
    /**
     * getDeviceLldpCdp - List LLDP and CDP information for a device
     *
     * List LLDP and CDP information for a device
    **/
    getDeviceLldpCdp(req: operations.GetDeviceLldpCdpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLldpCdpResponse>;
    /**
     * getDeviceLossAndLatencyHistory - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
     *
     * Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
    **/
    getDeviceLossAndLatencyHistory(req: operations.GetDeviceLossAndLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLossAndLatencyHistoryResponse>;
    /**
     * getDeviceSwitchPortsStatuses - Return the status for all the ports of a switch
     *
     * Return the status for all the ports of a switch
    **/
    getDeviceSwitchPortsStatuses(req: operations.GetDeviceSwitchPortsStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesResponse>;
    /**
     * getDeviceSwitchPortsStatusesPackets - Return the packet counters for all the ports of a switch
     *
     * Return the packet counters for all the ports of a switch
    **/
    getDeviceSwitchPortsStatusesPackets(req: operations.GetDeviceSwitchPortsStatusesPacketsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesPacketsResponse>;
    /**
     * getDeviceWirelessConnectionStats - Aggregated connectivity info for a given AP on this network
     *
     * Aggregated connectivity info for a given AP on this network
    **/
    getDeviceWirelessConnectionStats(req: operations.GetDeviceWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessConnectionStatsResponse>;
    /**
     * getDeviceWirelessLatencyStats - Aggregated latency info for a given AP on this network
     *
     * Aggregated latency info for a given AP on this network
    **/
    getDeviceWirelessLatencyStats(req: operations.GetDeviceWirelessLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessLatencyStatsResponse>;
    /**
     * getDeviceWirelessStatus - Return the SSID statuses of an access point
     *
     * Return the SSID statuses of an access point
    **/
    getDeviceWirelessStatus(req: operations.GetDeviceWirelessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessStatusResponse>;
    /**
     * getNetworkApplianceClientSecurityEvents - List the security events for a client
     *
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * getNetworkApplianceSecurityEvents - List the security events for a network
     *
     * List the security events for a network
    **/
    getNetworkApplianceSecurityEvents(req: operations.GetNetworkApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityEventsResponse>;
    /**
     * getNetworkApplianceUplinksUsageHistory - Get the sent and received bytes for each uplink of a network.
     *
     * Get the sent and received bytes for each uplink of a network.
    **/
    getNetworkApplianceUplinksUsageHistory(req: operations.GetNetworkApplianceUplinksUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceUplinksUsageHistoryResponse>;
    /**
     * getNetworkBluetoothClient - Return a Bluetooth client
     *
     * Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
    **/
    getNetworkBluetoothClient(req: operations.GetNetworkBluetoothClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientResponse>;
    /**
     * getNetworkBluetoothClients - List the Bluetooth clients seen by APs in this network
     *
     * List the Bluetooth clients seen by APs in this network
    **/
    getNetworkBluetoothClients(req: operations.GetNetworkBluetoothClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientsResponse>;
    /**
     * getNetworkClient - Return the client associated with the given identifier
     *
     * Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClient(req: operations.GetNetworkClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientResponse>;
    /**
     * getNetworkClientTrafficHistory - Return the client's network traffic data over time
     *
     * Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientTrafficHistory(req: operations.GetNetworkClientTrafficHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientTrafficHistoryResponse>;
    /**
     * getNetworkClientUsageHistory - Return the client's daily usage history
     *
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * getNetworkClients - List the clients that have used this network in the timespan
     *
     * List the clients that have used this network in the timespan
    **/
    getNetworkClients(req: operations.GetNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsResponse>;
    /**
     * getNetworkClientsApplicationUsage - Return the application usage data for clients
     *
     * Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientsApplicationUsage(req: operations.GetNetworkClientsApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsApplicationUsageResponse>;
    /**
     * getNetworkClientsOverview - Return overview statistics for network clients
     *
     * Return overview statistics for network clients
    **/
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * getNetworkClientsUsageHistories - Return the usage histories for clients
     *
     * Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientsUsageHistories(req: operations.GetNetworkClientsUsageHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsUsageHistoriesResponse>;
    /**
     * getNetworkEvents - List the events for the network
     *
     * List the events for the network
    **/
    getNetworkEvents(req: operations.GetNetworkEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsResponse>;
    /**
     * getNetworkEventsEventTypes - List the event type to human-readable description
     *
     * List the event type to human-readable description
    **/
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
    /**
     * getNetworkInsightApplicationHealthByTime - Get application health by time
     *
     * Get application health by time
    **/
    getNetworkInsightApplicationHealthByTime(req: operations.GetNetworkInsightApplicationHealthByTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkInsightApplicationHealthByTimeResponse>;
    /**
     * getNetworkNetworkHealthChannelUtilization - Get the channel utilization over each radio for all APs in a network.
     *
     * Get the channel utilization over each radio for all APs in a network.
    **/
    getNetworkNetworkHealthChannelUtilization(req: operations.GetNetworkNetworkHealthChannelUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetworkHealthChannelUtilizationResponse>;
    /**
     * getNetworkSmDeviceCellularUsageHistory - Return the client's daily cellular data usage history
     *
     * Return the client's daily cellular data usage history. Usage data is in kilobytes.
    **/
    getNetworkSmDeviceCellularUsageHistory(req: operations.GetNetworkSmDeviceCellularUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCellularUsageHistoryResponse>;
    /**
     * getNetworkSmDeviceConnectivity - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
     *
     * Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
    **/
    getNetworkSmDeviceConnectivity(req: operations.GetNetworkSmDeviceConnectivityRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceConnectivityResponse>;
    /**
     * getNetworkSmDeviceDesktopLogs - Return historical records of various Systems Manager network connection details for desktop devices.
     *
     * Return historical records of various Systems Manager network connection details for desktop devices.
    **/
    getNetworkSmDeviceDesktopLogs(req: operations.GetNetworkSmDeviceDesktopLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDesktopLogsResponse>;
    /**
     * getNetworkSmDeviceDeviceCommandLogs - Return historical records of commands sent to Systems Manager devices
     *
     * Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.
    **/
    getNetworkSmDeviceDeviceCommandLogs(req: operations.GetNetworkSmDeviceDeviceCommandLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDeviceCommandLogsResponse>;
    /**
     * getNetworkSmDevicePerformanceHistory - Return historical records of various Systems Manager client metrics for desktop devices.
     *
     * Return historical records of various Systems Manager client metrics for desktop devices.
    **/
    getNetworkSmDevicePerformanceHistory(req: operations.GetNetworkSmDevicePerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicePerformanceHistoryResponse>;
    /**
     * getNetworkSplashLoginAttempts - List the splash login attempts for a network
     *
     * List the splash login attempts for a network
    **/
    getNetworkSplashLoginAttempts(req: operations.GetNetworkSplashLoginAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSplashLoginAttemptsResponse>;
    /**
     * getNetworkTraffic - Return the traffic analysis data for this network
     *
     * Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
    **/
    getNetworkTraffic(req: operations.GetNetworkTrafficRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficResponse>;
    /**
     * getNetworkWirelessAirMarshal - List Air Marshal scan results from a network
     *
     * List Air Marshal scan results from a network
    **/
    getNetworkWirelessAirMarshal(req: operations.GetNetworkWirelessAirMarshalRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAirMarshalResponse>;
    /**
     * getNetworkWirelessChannelUtilizationHistory - Return AP channel utilization over time for a device or network client
     *
     * Return AP channel utilization over time for a device or network client
    **/
    getNetworkWirelessChannelUtilizationHistory(req: operations.GetNetworkWirelessChannelUtilizationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessChannelUtilizationHistoryResponse>;
    /**
     * getNetworkWirelessClientConnectionStats - Aggregated connectivity info for a given client on this network
     *
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
    **/
    getNetworkWirelessClientConnectionStats(req: operations.GetNetworkWirelessClientConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectionStatsResponse>;
    /**
     * getNetworkWirelessClientConnectivityEvents - List the wireless connectivity events for a client within a network in the timespan.
     *
     * List the wireless connectivity events for a client within a network in the timespan.
    **/
    getNetworkWirelessClientConnectivityEvents(req: operations.GetNetworkWirelessClientConnectivityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectivityEventsResponse>;
    /**
     * getNetworkWirelessClientCountHistory - Return wireless client counts over time for a network, device, or network client
     *
     * Return wireless client counts over time for a network, device, or network client
    **/
    getNetworkWirelessClientCountHistory(req: operations.GetNetworkWirelessClientCountHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientCountHistoryResponse>;
    /**
     * getNetworkWirelessClientLatencyHistory - Return the latency history for a client
     *
     * Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
    **/
    getNetworkWirelessClientLatencyHistory(req: operations.GetNetworkWirelessClientLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyHistoryResponse>;
    /**
     * getNetworkWirelessClientLatencyStats - Aggregated latency info for a given client on this network
     *
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
    **/
    getNetworkWirelessClientLatencyStats(req: operations.GetNetworkWirelessClientLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyStatsResponse>;
    /**
     * getNetworkWirelessClientsConnectionStats - Aggregated connectivity info for this network, grouped by clients
     *
     * Aggregated connectivity info for this network, grouped by clients
    **/
    getNetworkWirelessClientsConnectionStats(req: operations.GetNetworkWirelessClientsConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsConnectionStatsResponse>;
    /**
     * getNetworkWirelessClientsLatencyStats - Aggregated latency info for this network, grouped by clients
     *
     * Aggregated latency info for this network, grouped by clients
    **/
    getNetworkWirelessClientsLatencyStats(req: operations.GetNetworkWirelessClientsLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsLatencyStatsResponse>;
    /**
     * getNetworkWirelessConnectionStats - Aggregated connectivity info for this network
     *
     * Aggregated connectivity info for this network
    **/
    getNetworkWirelessConnectionStats(req: operations.GetNetworkWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessConnectionStatsResponse>;
    /**
     * getNetworkWirelessDataRateHistory - Return PHY data rates over time for a network, device, or network client
     *
     * Return PHY data rates over time for a network, device, or network client
    **/
    getNetworkWirelessDataRateHistory(req: operations.GetNetworkWirelessDataRateHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDataRateHistoryResponse>;
    /**
     * getNetworkWirelessDevicesConnectionStats - Aggregated connectivity info for this network, grouped by node
     *
     * Aggregated connectivity info for this network, grouped by node
    **/
    getNetworkWirelessDevicesConnectionStats(req: operations.GetNetworkWirelessDevicesConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDevicesConnectionStatsResponse>;
    /**
     * getNetworkWirelessDevicesLatencyStats - Aggregated latency info for this network, grouped by node
     *
     * Aggregated latency info for this network, grouped by node
    **/
    getNetworkWirelessDevicesLatencyStats(req: operations.GetNetworkWirelessDevicesLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDevicesLatencyStatsResponse>;
    /**
     * getNetworkWirelessFailedConnections - List of all failed client connection events on this network in a given time range
     *
     * List of all failed client connection events on this network in a given time range
    **/
    getNetworkWirelessFailedConnections(req: operations.GetNetworkWirelessFailedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessFailedConnectionsResponse>;
    /**
     * getNetworkWirelessLatencyHistory - Return average wireless latency over time for a network, device, or network client
     *
     * Return average wireless latency over time for a network, device, or network client
    **/
    getNetworkWirelessLatencyHistory(req: operations.GetNetworkWirelessLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessLatencyHistoryResponse>;
    /**
     * getNetworkWirelessLatencyStats - Aggregated latency info for this network
     *
     * Aggregated latency info for this network
    **/
    getNetworkWirelessLatencyStats(req: operations.GetNetworkWirelessLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessLatencyStatsResponse>;
    /**
     * getNetworkWirelessMeshStatuses - List wireless mesh statuses for repeaters
     *
     * List wireless mesh statuses for repeaters
    **/
    getNetworkWirelessMeshStatuses(req: operations.GetNetworkWirelessMeshStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessMeshStatusesResponse>;
    /**
     * getNetworkWirelessSignalQualityHistory - Return signal quality (SNR/RSSI) over time for a device or network client
     *
     * Return signal quality (SNR/RSSI) over time for a device or network client
    **/
    getNetworkWirelessSignalQualityHistory(req: operations.GetNetworkWirelessSignalQualityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSignalQualityHistoryResponse>;
    /**
     * getNetworkWirelessUsageHistory - Return AP usage over time for a device or network client
     *
     * Return AP usage over time for a device or network client
    **/
    getNetworkWirelessUsageHistory(req: operations.GetNetworkWirelessUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessUsageHistoryResponse>;
    /**
     * getOrganizationApiRequests - List the API requests made by an organization
     *
     * List the API requests made by an organization
    **/
    getOrganizationApiRequests(req: operations.GetOrganizationApiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsResponse>;
    /**
     * getOrganizationApiRequestsOverview - Return an aggregated overview of API requests data
     *
     * Return an aggregated overview of API requests data
    **/
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
    /**
     * getOrganizationApplianceSecurityEvents - List the security events for an organization
     *
     * List the security events for an organization
    **/
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
    /**
     * getOrganizationApplianceUplinkStatuses - List the uplink status of every Meraki MX and Z series appliances in the organization
     *
     * List the uplink status of every Meraki MX and Z series appliances in the organization
    **/
    getOrganizationApplianceUplinkStatuses(req: operations.GetOrganizationApplianceUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceUplinkStatusesResponse>;
    /**
     * getOrganizationApplianceVpnStats - Show VPN history stat for networks in an organization
     *
     * Show VPN history stat for networks in an organization
    **/
    getOrganizationApplianceVpnStats(req: operations.GetOrganizationApplianceVpnStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatsResponse>;
    /**
     * getOrganizationApplianceVpnStatuses - Show VPN status for networks in an organization
     *
     * Show VPN status for networks in an organization
    **/
    getOrganizationApplianceVpnStatuses(req: operations.GetOrganizationApplianceVpnStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatusesResponse>;
    /**
     * getOrganizationCellularGatewayUplinkStatuses - List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * List the uplink status of every Meraki MG cellular gateway in the organization
    **/
    getOrganizationCellularGatewayUplinkStatuses(req: operations.GetOrganizationCellularGatewayUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCellularGatewayUplinkStatusesResponse>;
    /**
     * getOrganizationConfigurationChanges - View the Change Log for your organization
     *
     * View the Change Log for your organization
    **/
    getOrganizationConfigurationChanges(req: operations.GetOrganizationConfigurationChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigurationChangesResponse>;
    /**
     * getOrganizationDevicesStatuses - List the status of every Meraki device in the organization
     *
     * List the status of every Meraki device in the organization
    **/
    getOrganizationDevicesStatuses(req: operations.GetOrganizationDevicesStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesResponse>;
    /**
     * getOrganizationDevicesUplinksLossAndLatency - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     *
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
    **/
    getOrganizationDevicesUplinksLossAndLatency(req: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksLossAndLatencyResponse>;
    /**
     * getOrganizationLicensesOverview - Return an overview of the license state for an organization
     *
     * Return an overview of the license state for an organization
    **/
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
    /**
     * getOrganizationOpenapiSpec - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     *
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
    **/
    getOrganizationOpenapiSpec(req: operations.GetOrganizationOpenapiSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationOpenapiSpecResponse>;
    /**
     * getOrganizationUplinksStatuses - List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
    **/
    getOrganizationUplinksStatuses(req: operations.GetOrganizationUplinksStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksStatusesResponse>;
    /**
     * getOrganizationWebhooksAlertTypes - Return a list of alert types to be used with managing webhook alerts
     *
     * Return a list of alert types to be used with managing webhook alerts
    **/
    getOrganizationWebhooksAlertTypes(req: operations.GetOrganizationWebhooksAlertTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksAlertTypesResponse>;
    /**
     * getOrganizationWebhooksLogs - Return the log of webhook POSTs sent
     *
     * Return the log of webhook POSTs sent
    **/
    getOrganizationWebhooksLogs(req: operations.GetOrganizationWebhooksLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksLogsResponse>;
}
