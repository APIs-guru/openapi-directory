import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InboundFirewallRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceFirewallInboundFirewallRules - Return the inbound firewall rules for an MX network
     *
     * Return the inbound firewall rules for an MX network
    **/
    getNetworkApplianceFirewallInboundFirewallRules(req: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallInboundFirewallRules - Update the inbound firewall rules of an MX network
     *
     * Update the inbound firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallInboundFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse>;
}
