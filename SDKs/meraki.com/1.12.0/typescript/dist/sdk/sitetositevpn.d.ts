import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SiteToSiteVpn {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceVpnSiteToSiteVpn - Return the site-to-site VPN settings of a network
     *
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
    **/
    getNetworkApplianceVpnSiteToSiteVpn(req: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * updateNetworkApplianceVpnSiteToSiteVpn - Update the site-to-site VPN settings of a network
     *
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
    **/
    updateNetworkApplianceVpnSiteToSiteVpn(req: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse>;
}
