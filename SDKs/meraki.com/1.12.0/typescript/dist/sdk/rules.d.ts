import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceTrafficShapingRules - Display the traffic shaping settings rules for an MX network
     *
     * Display the traffic shaping settings rules for an MX network
    **/
    getNetworkApplianceTrafficShapingRules(req: operations.GetNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * getNetworkWirelessSsidTrafficShapingRules - Display the traffic shaping settings for a SSID on an MR network
     *
     * Display the traffic shaping settings for a SSID on an MR network
    **/
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * updateNetworkApplianceTrafficShapingRules - Update the traffic shaping settings rules for an MX network
     *
     * Update the traffic shaping settings rules for an MX network
    **/
    updateNetworkApplianceTrafficShapingRules(req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * updateNetworkWirelessSsidTrafficShapingRules - Update the traffic shaping settings for an SSID on an MR network
     *
     * Update the traffic shaping settings for an SSID on an MR network
    **/
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
}
