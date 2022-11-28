import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OneToManyNatRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceFirewallOneToManyNatRules - Return the 1:Many NAT mapping rules for an MX network
     *
     * Return the 1:Many NAT mapping rules for an MX network
    **/
    getNetworkApplianceFirewallOneToManyNatRules(req: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * updateNetworkApplianceFirewallOneToManyNatRules - Set the 1:Many NAT mapping rules for an MX network
     *
     * Set the 1:Many NAT mapping rules for an MX network
    **/
    updateNetworkApplianceFirewallOneToManyNatRules(req: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse>;
}
