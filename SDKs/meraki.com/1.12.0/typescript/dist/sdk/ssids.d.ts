import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ssids {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkWirelessSsidIdentityPsk - Create an Identity PSK
     *
     * Create an Identity PSK
    **/
    createNetworkWirelessSsidIdentityPsk(req: operations.CreateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * deleteNetworkWirelessSsidIdentityPsk - Delete an Identity PSK
     *
     * Delete an Identity PSK
    **/
    deleteNetworkWirelessSsidIdentityPsk(req: operations.DeleteNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessSsidIdentityPskResponse>;
    /**
     * getNetworkWirelessSsid - Return a single MR SSID
     *
     * Return a single MR SSID
    **/
    getNetworkWirelessSsid(req: operations.GetNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidResponse>;
    /**
     * getNetworkWirelessSsidBonjourForwarding - List the Bonjour forwarding setting and rules for the SSID
     *
     * List the Bonjour forwarding setting and rules for the SSID
    **/
    getNetworkWirelessSsidBonjourForwarding(req: operations.GetNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * getNetworkWirelessSsidDeviceTypeGroupPolicies - List the device type group policies for the SSID
     *
     * List the device type group policies for the SSID
    **/
    getNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * getNetworkWirelessSsidEapOverride - Return the EAP overridden parameters for an SSID
     *
     * Return the EAP overridden parameters for an SSID
    **/
    getNetworkWirelessSsidEapOverride(req: operations.GetNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidEapOverrideResponse>;
    /**
     * getNetworkWirelessSsidFirewallL3FirewallRules - Return the L3 firewall rules for an SSID on an MR network
     *
     * Return the L3 firewall rules for an SSID on an MR network
    **/
    getNetworkWirelessSsidFirewallL3FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * getNetworkWirelessSsidFirewallL7FirewallRules - Return the L7 firewall rules for an SSID on an MR network
     *
     * Return the L7 firewall rules for an SSID on an MR network
    **/
    getNetworkWirelessSsidFirewallL7FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * getNetworkWirelessSsidHotspot20 - Return the Hotspot 2.0 settings for an SSID
     *
     * Return the Hotspot 2.0 settings for an SSID
    **/
    getNetworkWirelessSsidHotspot20(req: operations.GetNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidHotspot20Response>;
    /**
     * getNetworkWirelessSsidIdentityPsk - Return an Identity PSK
     *
     * Return an Identity PSK
    **/
    getNetworkWirelessSsidIdentityPsk(req: operations.GetNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPskResponse>;
    /**
     * getNetworkWirelessSsidIdentityPsks - List all Identity PSKs in a wireless network
     *
     * List all Identity PSKs in a wireless network
    **/
    getNetworkWirelessSsidIdentityPsks(req: operations.GetNetworkWirelessSsidIdentityPsksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPsksResponse>;
    /**
     * getNetworkWirelessSsidSchedules - List the outage schedule for the SSID
     *
     * List the outage schedule for the SSID
    **/
    getNetworkWirelessSsidSchedules(req: operations.GetNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSchedulesResponse>;
    /**
     * getNetworkWirelessSsidSplashSettings - Display the splash page settings for the given SSID
     *
     * Display the splash page settings for the given SSID
    **/
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * getNetworkWirelessSsidTrafficShapingRules - Display the traffic shaping settings for a SSID on an MR network
     *
     * Display the traffic shaping settings for a SSID on an MR network
    **/
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * getNetworkWirelessSsidVpn - List the VPN settings for the SSID.
     *
     * List the VPN settings for the SSID.
    **/
    getNetworkWirelessSsidVpn(req: operations.GetNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidVpnResponse>;
    /**
     * getNetworkWirelessSsids - List the MR SSIDs in a network
     *
     * List the MR SSIDs in a network
    **/
    getNetworkWirelessSsids(req: operations.GetNetworkWirelessSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidsResponse>;
    /**
     * updateNetworkWirelessSsid - Update the attributes of an MR SSID
     *
     * Update the attributes of an MR SSID
    **/
    updateNetworkWirelessSsid(req: operations.UpdateNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidResponse>;
    /**
     * updateNetworkWirelessSsidBonjourForwarding - Update the bonjour forwarding setting and rules for the SSID
     *
     * Update the bonjour forwarding setting and rules for the SSID
    **/
    updateNetworkWirelessSsidBonjourForwarding(req: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * updateNetworkWirelessSsidDeviceTypeGroupPolicies - Update the device type group policies for the SSID
     *
     * Update the device type group policies for the SSID
    **/
    updateNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * updateNetworkWirelessSsidEapOverride - Update the EAP overridden parameters for an SSID.
     *
     * Update the EAP overridden parameters for an SSID.
    **/
    updateNetworkWirelessSsidEapOverride(req: operations.UpdateNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidEapOverrideResponse>;
    /**
     * updateNetworkWirelessSsidFirewallL3FirewallRules - Update the L3 firewall rules of an SSID on an MR network
     *
     * Update the L3 firewall rules of an SSID on an MR network
    **/
    updateNetworkWirelessSsidFirewallL3FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * updateNetworkWirelessSsidFirewallL7FirewallRules - Update the L7 firewall rules of an SSID on an MR network
     *
     * Update the L7 firewall rules of an SSID on an MR network
    **/
    updateNetworkWirelessSsidFirewallL7FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * updateNetworkWirelessSsidHotspot20 - Update the Hotspot 2.0 settings of an SSID
     *
     * Update the Hotspot 2.0 settings of an SSID
    **/
    updateNetworkWirelessSsidHotspot20(req: operations.UpdateNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidHotspot20Response>;
    /**
     * updateNetworkWirelessSsidIdentityPsk - Update an Identity PSK
     *
     * Update an Identity PSK
    **/
    updateNetworkWirelessSsidIdentityPsk(req: operations.UpdateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * updateNetworkWirelessSsidSchedules - Update the outage schedule for the SSID
     *
     * Update the outage schedule for the SSID
    **/
    updateNetworkWirelessSsidSchedules(req: operations.UpdateNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSchedulesResponse>;
    /**
     * updateNetworkWirelessSsidSplashSettings - Modify the splash page settings for the given SSID
     *
     * Modify the splash page settings for the given SSID
    **/
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * updateNetworkWirelessSsidTrafficShapingRules - Update the traffic shaping settings for an SSID on an MR network
     *
     * Update the traffic shaping settings for an SSID on an MR network
    **/
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * updateNetworkWirelessSsidVpn - Update the VPN settings for the SSID
     *
     * Update the VPN settings for the SSID
    **/
    updateNetworkWirelessSsidVpn(req: operations.UpdateNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidVpnResponse>;
}
