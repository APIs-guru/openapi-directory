import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApplicationCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceFirewallL7FirewallRulesApplicationCategories - Return the L7 firewall application categories and their associated applications for an MX network
     *
     * Return the L7 firewall application categories and their associated applications for an MX network
    **/
    getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse>;
    /**
     * getNetworkTrafficShapingApplicationCategories - Returns the application categories for traffic shaping rules.
     *
     * Returns the application categories for traffic shaping rules.
    **/
    getNetworkTrafficShapingApplicationCategories(req: operations.GetNetworkTrafficShapingApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingApplicationCategoriesResponse>;
}
