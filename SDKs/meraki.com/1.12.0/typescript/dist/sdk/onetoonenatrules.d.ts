import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OneToOneNatRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceFirewallOneToOneNatRules - Return the 1:1 NAT mapping rules for an MX network
     *
     * Return the 1:1 NAT mapping rules for an MX network
    **/
    getNetworkApplianceFirewallOneToOneNatRules(req: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * updateNetworkApplianceFirewallOneToOneNatRules - Set the 1:1 NAT mapping rules for an MX network
     *
     * Set the 1:1 NAT mapping rules for an MX network
    **/
    updateNetworkApplianceFirewallOneToOneNatRules(req: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse>;
}
