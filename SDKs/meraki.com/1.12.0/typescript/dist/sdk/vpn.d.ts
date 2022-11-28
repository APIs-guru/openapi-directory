import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Vpn {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceVpnBgp - Return a Hub BGP Configuration
     *
     * Return a Hub BGP Configuration
    **/
    getNetworkApplianceVpnBgp(req: operations.GetNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnBgpResponse>;
    /**
     * getNetworkApplianceVpnSiteToSiteVpn - Return the site-to-site VPN settings of a network
     *
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
    **/
    getNetworkApplianceVpnSiteToSiteVpn(req: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * getNetworkWirelessSsidVpn - List the VPN settings for the SSID.
     *
     * List the VPN settings for the SSID.
    **/
    getNetworkWirelessSsidVpn(req: operations.GetNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidVpnResponse>;
    /**
     * getOrganizationApplianceVpnStats - Show VPN history stat for networks in an organization
     *
     * Show VPN history stat for networks in an organization
    **/
    getOrganizationApplianceVpnStats(req: operations.GetOrganizationApplianceVpnStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatsResponse>;
    /**
     * getOrganizationApplianceVpnStatuses - Show VPN status for networks in an organization
     *
     * Show VPN status for networks in an organization
    **/
    getOrganizationApplianceVpnStatuses(req: operations.GetOrganizationApplianceVpnStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatusesResponse>;
    /**
     * getOrganizationApplianceVpnThirdPartyVpnPeers - Return the third party VPN peers for an organization
     *
     * Return the third party VPN peers for an organization
    **/
    getOrganizationApplianceVpnThirdPartyVpnPeers(req: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse>;
    /**
     * getOrganizationApplianceVpnVpnFirewallRules - Return the firewall rules for an organization's site-to-site VPN
     *
     * Return the firewall rules for an organization's site-to-site VPN
    **/
    getOrganizationApplianceVpnVpnFirewallRules(req: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse>;
    /**
     * updateNetworkApplianceVpnBgp - Update a Hub BGP Configuration
     *
     * Update a Hub BGP Configuration
    **/
    updateNetworkApplianceVpnBgp(req: operations.UpdateNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnBgpResponse>;
    /**
     * updateNetworkApplianceVpnSiteToSiteVpn - Update the site-to-site VPN settings of a network
     *
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
    **/
    updateNetworkApplianceVpnSiteToSiteVpn(req: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * updateNetworkWirelessSsidVpn - Update the VPN settings for the SSID
     *
     * Update the VPN settings for the SSID
    **/
    updateNetworkWirelessSsidVpn(req: operations.UpdateNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidVpnResponse>;
    /**
     * updateOrganizationApplianceVpnThirdPartyVpnPeers - Update the third party VPN peers for an organization
     *
     * Update the third party VPN peers for an organization
    **/
    updateOrganizationApplianceVpnThirdPartyVpnPeers(req: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse>;
    /**
     * updateOrganizationApplianceVpnVpnFirewallRules - Update the firewall rules of an organization's site-to-site VPN
     *
     * Update the firewall rules of an organization's site-to-site VPN
    **/
    updateOrganizationApplianceVpnVpnFirewallRules(req: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse>;
}
