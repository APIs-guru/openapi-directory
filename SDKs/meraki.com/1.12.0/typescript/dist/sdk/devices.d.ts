import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * blinkDeviceLeds - Blink the LEDs on a device
     *
     * Blink the LEDs on a device
    **/
    blinkDeviceLeds(req: operations.BlinkDeviceLedsRequest, config?: AxiosRequestConfig): Promise<operations.BlinkDeviceLedsResponse>;
    /**
     * checkinNetworkSmDevices - Force check-in a set of devices
     *
     * Force check-in a set of devices
    **/
    checkinNetworkSmDevices(req: operations.CheckinNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CheckinNetworkSmDevicesResponse>;
    /**
     * claimNetworkDevices - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     *
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
    **/
    claimNetworkDevices(req: operations.ClaimNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ClaimNetworkDevicesResponse>;
    /**
     * cloneOrganizationSwitchDevices - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
     *
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
    **/
    cloneOrganizationSwitchDevices(req: operations.CloneOrganizationSwitchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationSwitchDevicesResponse>;
    /**
     * getDevice - Return a single device
     *
     * Return a single device
    **/
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
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
     * getDeviceManagementInterface - Return the management interface settings for a device
     *
     * Return the management interface settings for a device
    **/
    getDeviceManagementInterface(req: operations.GetDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceManagementInterfaceResponse>;
    /**
     * getNetworkDevices - List the devices in a network
     *
     * List the devices in a network
    **/
    getNetworkDevices(req: operations.GetNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesResponse>;
    /**
     * getNetworkSmDeviceCellularUsageHistory - Return the client's daily cellular data usage history
     *
     * Return the client's daily cellular data usage history. Usage data is in kilobytes.
    **/
    getNetworkSmDeviceCellularUsageHistory(req: operations.GetNetworkSmDeviceCellularUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCellularUsageHistoryResponse>;
    /**
     * getNetworkSmDeviceCerts - List the certs on a device
     *
     * List the certs on a device
    **/
    getNetworkSmDeviceCerts(req: operations.GetNetworkSmDeviceCertsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCertsResponse>;
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
     * getNetworkSmDeviceDeviceProfiles - Get the profiles associated with a device
     *
     * Get the profiles associated with a device
    **/
    getNetworkSmDeviceDeviceProfiles(req: operations.GetNetworkSmDeviceDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDeviceProfilesResponse>;
    /**
     * getNetworkSmDeviceNetworkAdapters - List the network adapters of a device
     *
     * List the network adapters of a device
    **/
    getNetworkSmDeviceNetworkAdapters(req: operations.GetNetworkSmDeviceNetworkAdaptersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceNetworkAdaptersResponse>;
    /**
     * getNetworkSmDevicePerformanceHistory - Return historical records of various Systems Manager client metrics for desktop devices.
     *
     * Return historical records of various Systems Manager client metrics for desktop devices.
    **/
    getNetworkSmDevicePerformanceHistory(req: operations.GetNetworkSmDevicePerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicePerformanceHistoryResponse>;
    /**
     * getNetworkSmDeviceRestrictions - List the restrictions on a device
     *
     * List the restrictions on a device
    **/
    getNetworkSmDeviceRestrictions(req: operations.GetNetworkSmDeviceRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceRestrictionsResponse>;
    /**
     * getNetworkSmDeviceSecurityCenters - List the security centers on a device
     *
     * List the security centers on a device
    **/
    getNetworkSmDeviceSecurityCenters(req: operations.GetNetworkSmDeviceSecurityCentersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSecurityCentersResponse>;
    /**
     * getNetworkSmDeviceSoftwares - Get a list of softwares associated with a device
     *
     * Get a list of softwares associated with a device
    **/
    getNetworkSmDeviceSoftwares(req: operations.GetNetworkSmDeviceSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSoftwaresResponse>;
    /**
     * getNetworkSmDeviceWlanLists - List the saved SSID names on a device
     *
     * List the saved SSID names on a device
    **/
    getNetworkSmDeviceWlanLists(req: operations.GetNetworkSmDeviceWlanListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceWlanListsResponse>;
    /**
     * getNetworkSmDevices - List the devices enrolled in an SM network with various specified fields and filters
     *
     * List the devices enrolled in an SM network with various specified fields and filters
    **/
    getNetworkSmDevices(req: operations.GetNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicesResponse>;
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
     * getOrganizationDevices - List the devices in an organization
     *
     * List the devices in an organization
    **/
    getOrganizationDevices(req: operations.GetOrganizationDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesResponse>;
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
     * lockNetworkSmDevices - Lock a set of devices
     *
     * Lock a set of devices
    **/
    lockNetworkSmDevices(req: operations.LockNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.LockNetworkSmDevicesResponse>;
    /**
     * modifyNetworkSmDevicesTags - Add, delete, or update the tags of a set of devices
     *
     * Add, delete, or update the tags of a set of devices
    **/
    modifyNetworkSmDevicesTags(req: operations.ModifyNetworkSmDevicesTagsRequest, config?: AxiosRequestConfig): Promise<operations.ModifyNetworkSmDevicesTagsResponse>;
    /**
     * moveNetworkSmDevices - Move a set of devices to a new network
     *
     * Move a set of devices to a new network
    **/
    moveNetworkSmDevices(req: operations.MoveNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.MoveNetworkSmDevicesResponse>;
    /**
     * rebootDevice - Reboot a device
     *
     * Reboot a device
    **/
    rebootDevice(req: operations.RebootDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RebootDeviceResponse>;
    /**
     * refreshNetworkSmDeviceDetails - Refresh the details of a device
     *
     * Refresh the details of a device
    **/
    refreshNetworkSmDeviceDetails(req: operations.RefreshNetworkSmDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.RefreshNetworkSmDeviceDetailsResponse>;
    /**
     * removeNetworkDevices - Remove a single device
     *
     * Remove a single device
    **/
    removeNetworkDevices(req: operations.RemoveNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkDevicesResponse>;
    /**
     * unenrollNetworkSmDevice - Unenroll a device
     *
     * Unenroll a device
    **/
    unenrollNetworkSmDevice(req: operations.UnenrollNetworkSmDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UnenrollNetworkSmDeviceResponse>;
    /**
     * updateDevice - Update the attributes of a device
     *
     * Update the attributes of a device
    **/
    updateDevice(req: operations.UpdateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceResponse>;
    /**
     * updateDeviceManagementInterface - Update the management interface settings for a device
     *
     * Update the management interface settings for a device
    **/
    updateDeviceManagementInterface(req: operations.UpdateDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceManagementInterfaceResponse>;
    /**
     * updateNetworkSmDevicesFields - Modify the fields of a device
     *
     * Modify the fields of a device
    **/
    updateNetworkSmDevicesFields(req: operations.UpdateNetworkSmDevicesFieldsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmDevicesFieldsResponse>;
    /**
     * wipeNetworkSmDevices - Wipe a device
     *
     * Wipe a device
    **/
    wipeNetworkSmDevices(req: operations.WipeNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.WipeNetworkSmDevicesResponse>;
}
