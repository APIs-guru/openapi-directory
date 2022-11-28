import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CellularFirewallRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceFirewallCellularFirewallRules - Return the cellular firewall rules for an MX network
     *
     * Return the cellular firewall rules for an MX network
    **/
    getNetworkApplianceFirewallCellularFirewallRules(req: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallCellularFirewallRules - Update the cellular firewall rules of an MX network
     *
     * Update the cellular firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse>;
}
