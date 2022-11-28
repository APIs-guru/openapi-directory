import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DeviceTypeGroupPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessSsidDeviceTypeGroupPolicies - List the device type group policies for the SSID
     *
     * List the device type group policies for the SSID
    **/
    getNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * updateNetworkWirelessSsidDeviceTypeGroupPolicies - Update the device type group policies for the SSID
     *
     * Update the device type group policies for the SSID
    **/
    updateNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
}
