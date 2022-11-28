import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BonjourForwarding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessSsidBonjourForwarding - List the Bonjour forwarding setting and rules for the SSID
     *
     * List the Bonjour forwarding setting and rules for the SSID
    **/
    getNetworkWirelessSsidBonjourForwarding(req: operations.GetNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * updateNetworkWirelessSsidBonjourForwarding - Update the bonjour forwarding setting and rules for the SSID
     *
     * Update the bonjour forwarding setting and rules for the SSID
    **/
    updateNetworkWirelessSsidBonjourForwarding(req: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidBonjourForwardingResponse>;
}
