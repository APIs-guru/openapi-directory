import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EapOverride {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessSsidEapOverride - Return the EAP overridden parameters for an SSID
     *
     * Return the EAP overridden parameters for an SSID
    **/
    getNetworkWirelessSsidEapOverride(req: operations.GetNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidEapOverrideResponse>;
    /**
     * updateNetworkWirelessSsidEapOverride - Update the EAP overridden parameters for an SSID.
     *
     * Update the EAP overridden parameters for an SSID.
    **/
    updateNetworkWirelessSsidEapOverride(req: operations.UpdateNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidEapOverrideResponse>;
}
