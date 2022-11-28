import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VpnFirewallRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationApplianceVpnVpnFirewallRules - Return the firewall rules for an organization's site-to-site VPN
     *
     * Return the firewall rules for an organization's site-to-site VPN
    **/
    getOrganizationApplianceVpnVpnFirewallRules(req: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse>;
    /**
     * updateOrganizationApplianceVpnVpnFirewallRules - Update the firewall rules of an organization's site-to-site VPN
     *
     * Update the firewall rules of an organization's site-to-site VPN
    **/
    updateOrganizationApplianceVpnVpnFirewallRules(req: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse>;
}
