import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Wireless {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkWirelessRfProfile - Creates new RF profile for this network
     *
     * Creates new RF profile for this network
    **/
    createNetworkWirelessRfProfile(req: operations.CreateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessRfProfileResponse>;
    /**
     * createNetworkWirelessSsidIdentityPsk - Create an Identity PSK
     *
     * Create an Identity PSK
    **/
    createNetworkWirelessSsidIdentityPsk(req: operations.CreateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * deleteNetworkWirelessRfProfile - Delete a RF Profile
     *
     * Delete a RF Profile
    **/
    deleteNetworkWirelessRfProfile(req: operations.DeleteNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessRfProfileResponse>;
    /**
     * deleteNetworkWirelessSsidIdentityPsk - Delete an Identity PSK
     *
     * Delete an Identity PSK
    **/
    deleteNetworkWirelessSsidIdentityPsk(req: operations.DeleteNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessSsidIdentityPskResponse>;
    /**
     * getDeviceWirelessBluetoothSettings - Return the bluetooth settings for a wireless device
     *
     * Return the bluetooth settings for a wireless device
    **/
    getDeviceWirelessBluetoothSettings(req: operations.GetDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse>;
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
     * getDeviceWirelessRadioSettings - Return the radio settings of a device
     *
     * Return the radio settings of a device
    **/
    getDeviceWirelessRadioSettings(req: operations.GetDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessRadioSettingsResponse>;
    /**
     * getDeviceWirelessStatus - Return the SSID statuses of an access point
     *
     * Return the SSID statuses of an access point
    **/
    getDeviceWirelessStatus(req: operations.GetDeviceWirelessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessStatusResponse>;
    /**
     * getNetworkWirelessAirMarshal - List Air Marshal scan results from a network
     *
     * List Air Marshal scan results from a network
    **/
    getNetworkWirelessAirMarshal(req: operations.GetNetworkWirelessAirMarshalRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAirMarshalResponse>;
    /**
     * getNetworkWirelessAlternateManagementInterface - Return alternate management interface and devices with IP assigned
     *
     * Return alternate management interface and devices with IP assigned
    **/
    getNetworkWirelessAlternateManagementInterface(req: operations.GetNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * getNetworkWirelessBilling - Return the billing settings of this network
     *
     * Return the billing settings of this network
    **/
    getNetworkWirelessBilling(req: operations.GetNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBillingResponse>;
    /**
     * getNetworkWirelessBluetoothSettings - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
    **/
    getNetworkWirelessBluetoothSettings(req: operations.GetNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse>;
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
     * getNetworkWirelessRfProfile - Return a RF profile
     *
     * Return a RF profile
    **/
    getNetworkWirelessRfProfile(req: operations.GetNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfileResponse>;
    /**
     * getNetworkWirelessRfProfiles - List the non-basic RF profiles for this network
     *
     * List the non-basic RF profiles for this network
    **/
    getNetworkWirelessRfProfiles(req: operations.GetNetworkWirelessRfProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfilesResponse>;
    /**
     * getNetworkWirelessSettings - Return the wireless settings for a network
     *
     * Return the wireless settings for a network
    **/
    getNetworkWirelessSettings(req: operations.GetNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSettingsResponse>;
    /**
     * getNetworkWirelessSignalQualityHistory - Return signal quality (SNR/RSSI) over time for a device or network client
     *
     * Return signal quality (SNR/RSSI) over time for a device or network client
    **/
    getNetworkWirelessSignalQualityHistory(req: operations.GetNetworkWirelessSignalQualityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSignalQualityHistoryResponse>;
    /**
     * getNetworkWirelessSsid - Return a single MR SSID
     *
     * Return a single MR SSID
    **/
    getNetworkWirelessSsid(req: operations.GetNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidResponse>;
    /**
     * getNetworkWirelessSsidBonjourForwarding - List the Bonjour forwarding setting and rules for the SSID
     *
     * List the Bonjour forwarding setting and rules for the SSID
    **/
    getNetworkWirelessSsidBonjourForwarding(req: operations.GetNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * getNetworkWirelessSsidDeviceTypeGroupPolicies - List the device type group policies for the SSID
     *
     * List the device type group policies for the SSID
    **/
    getNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * getNetworkWirelessSsidEapOverride - Return the EAP overridden parameters for an SSID
     *
     * Return the EAP overridden parameters for an SSID
    **/
    getNetworkWirelessSsidEapOverride(req: operations.GetNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidEapOverrideResponse>;
    /**
     * getNetworkWirelessSsidFirewallL3FirewallRules - Return the L3 firewall rules for an SSID on an MR network
     *
     * Return the L3 firewall rules for an SSID on an MR network
    **/
    getNetworkWirelessSsidFirewallL3FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * getNetworkWirelessSsidFirewallL7FirewallRules - Return the L7 firewall rules for an SSID on an MR network
     *
     * Return the L7 firewall rules for an SSID on an MR network
    **/
    getNetworkWirelessSsidFirewallL7FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * getNetworkWirelessSsidHotspot20 - Return the Hotspot 2.0 settings for an SSID
     *
     * Return the Hotspot 2.0 settings for an SSID
    **/
    getNetworkWirelessSsidHotspot20(req: operations.GetNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidHotspot20Response>;
    /**
     * getNetworkWirelessSsidIdentityPsk - Return an Identity PSK
     *
     * Return an Identity PSK
    **/
    getNetworkWirelessSsidIdentityPsk(req: operations.GetNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPskResponse>;
    /**
     * getNetworkWirelessSsidIdentityPsks - List all Identity PSKs in a wireless network
     *
     * List all Identity PSKs in a wireless network
    **/
    getNetworkWirelessSsidIdentityPsks(req: operations.GetNetworkWirelessSsidIdentityPsksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPsksResponse>;
    /**
     * getNetworkWirelessSsidSchedules - List the outage schedule for the SSID
     *
     * List the outage schedule for the SSID
    **/
    getNetworkWirelessSsidSchedules(req: operations.GetNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSchedulesResponse>;
    /**
     * getNetworkWirelessSsidSplashSettings - Display the splash page settings for the given SSID
     *
     * Display the splash page settings for the given SSID
    **/
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * getNetworkWirelessSsidTrafficShapingRules - Display the traffic shaping settings for a SSID on an MR network
     *
     * Display the traffic shaping settings for a SSID on an MR network
    **/
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * getNetworkWirelessSsidVpn - List the VPN settings for the SSID.
     *
     * List the VPN settings for the SSID.
    **/
    getNetworkWirelessSsidVpn(req: operations.GetNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidVpnResponse>;
    /**
     * getNetworkWirelessSsids - List the MR SSIDs in a network
     *
     * List the MR SSIDs in a network
    **/
    getNetworkWirelessSsids(req: operations.GetNetworkWirelessSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidsResponse>;
    /**
     * getNetworkWirelessUsageHistory - Return AP usage over time for a device or network client
     *
     * Return AP usage over time for a device or network client
    **/
    getNetworkWirelessUsageHistory(req: operations.GetNetworkWirelessUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessUsageHistoryResponse>;
    /**
     * updateDeviceWirelessBluetoothSettings - Update the bluetooth settings for a wireless device
     *
     * Update the bluetooth settings for a wireless device
    **/
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * updateDeviceWirelessRadioSettings - Update the radio settings of a device
     *
     * Update the radio settings of a device
    **/
    updateDeviceWirelessRadioSettings(req: operations.UpdateDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse>;
    /**
     * updateNetworkWirelessAlternateManagementInterface - Update alternate management interface and device static IP
     *
     * Update alternate management interface and device static IP
    **/
    updateNetworkWirelessAlternateManagementInterface(req: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * updateNetworkWirelessBilling - Update the billing settings
     *
     * Update the billing settings
    **/
    updateNetworkWirelessBilling(req: operations.UpdateNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBillingResponse>;
    /**
     * updateNetworkWirelessBluetoothSettings - Update the Bluetooth settings for a network
     *
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
    **/
    updateNetworkWirelessBluetoothSettings(req: operations.UpdateNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse>;
    /**
     * updateNetworkWirelessRfProfile - Updates specified RF profile for this network
     *
     * Updates specified RF profile for this network
    **/
    updateNetworkWirelessRfProfile(req: operations.UpdateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessRfProfileResponse>;
    /**
     * updateNetworkWirelessSettings - Update the wireless settings for a network
     *
     * Update the wireless settings for a network
    **/
    updateNetworkWirelessSettings(req: operations.UpdateNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSettingsResponse>;
    /**
     * updateNetworkWirelessSsid - Update the attributes of an MR SSID
     *
     * Update the attributes of an MR SSID
    **/
    updateNetworkWirelessSsid(req: operations.UpdateNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidResponse>;
    /**
     * updateNetworkWirelessSsidBonjourForwarding - Update the bonjour forwarding setting and rules for the SSID
     *
     * Update the bonjour forwarding setting and rules for the SSID
    **/
    updateNetworkWirelessSsidBonjourForwarding(req: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * updateNetworkWirelessSsidDeviceTypeGroupPolicies - Update the device type group policies for the SSID
     *
     * Update the device type group policies for the SSID
    **/
    updateNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * updateNetworkWirelessSsidEapOverride - Update the EAP overridden parameters for an SSID.
     *
     * Update the EAP overridden parameters for an SSID.
    **/
    updateNetworkWirelessSsidEapOverride(req: operations.UpdateNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidEapOverrideResponse>;
    /**
     * updateNetworkWirelessSsidFirewallL3FirewallRules - Update the L3 firewall rules of an SSID on an MR network
     *
     * Update the L3 firewall rules of an SSID on an MR network
    **/
    updateNetworkWirelessSsidFirewallL3FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * updateNetworkWirelessSsidFirewallL7FirewallRules - Update the L7 firewall rules of an SSID on an MR network
     *
     * Update the L7 firewall rules of an SSID on an MR network
    **/
    updateNetworkWirelessSsidFirewallL7FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * updateNetworkWirelessSsidHotspot20 - Update the Hotspot 2.0 settings of an SSID
     *
     * Update the Hotspot 2.0 settings of an SSID
    **/
    updateNetworkWirelessSsidHotspot20(req: operations.UpdateNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidHotspot20Response>;
    /**
     * updateNetworkWirelessSsidIdentityPsk - Update an Identity PSK
     *
     * Update an Identity PSK
    **/
    updateNetworkWirelessSsidIdentityPsk(req: operations.UpdateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * updateNetworkWirelessSsidSchedules - Update the outage schedule for the SSID
     *
     * Update the outage schedule for the SSID
    **/
    updateNetworkWirelessSsidSchedules(req: operations.UpdateNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSchedulesResponse>;
    /**
     * updateNetworkWirelessSsidSplashSettings - Modify the splash page settings for the given SSID
     *
     * Modify the splash page settings for the given SSID
    **/
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * updateNetworkWirelessSsidTrafficShapingRules - Update the traffic shaping settings for an SSID on an MR network
     *
     * Update the traffic shaping settings for an SSID on an MR network
    **/
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * updateNetworkWirelessSsidVpn - Update the VPN settings for the SSID
     *
     * Update the VPN settings for the SSID
    **/
    updateNetworkWirelessSsidVpn(req: operations.UpdateNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidVpnResponse>;
}
