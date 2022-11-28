import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Appliance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkApplianceStaticRoute - Add a static route for an MX or teleworker network
     *
     * Add a static route for an MX or teleworker network
    **/
    createNetworkApplianceStaticRoute(req: operations.CreateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceStaticRouteResponse>;
    /**
     * createNetworkApplianceTrafficShapingCustomPerformanceClass - Add a custom performance class for an MX network
     *
     * Add a custom performance class for an MX network
    **/
    createNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * createNetworkApplianceVlan - Add a VLAN
     *
     * Add a VLAN
    **/
    createNetworkApplianceVlan(req: operations.CreateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceVlanResponse>;
    /**
     * deleteNetworkApplianceStaticRoute - Delete a static route from an MX or teleworker network
     *
     * Delete a static route from an MX or teleworker network
    **/
    deleteNetworkApplianceStaticRoute(req: operations.DeleteNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceStaticRouteResponse>;
    /**
     * deleteNetworkApplianceTrafficShapingCustomPerformanceClass - Delete a custom performance class from an MX network
     *
     * Delete a custom performance class from an MX network
    **/
    deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * deleteNetworkApplianceVlan - Delete a VLAN from a network
     *
     * Delete a VLAN from a network
    **/
    deleteNetworkApplianceVlan(req: operations.DeleteNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceVlanResponse>;
    /**
     * getDeviceApplianceDhcpSubnets - Return the DHCP subnet information for an appliance
     *
     * Return the DHCP subnet information for an appliance
    **/
    getDeviceApplianceDhcpSubnets(req: operations.GetDeviceApplianceDhcpSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceDhcpSubnetsResponse>;
    /**
     * getDeviceAppliancePerformance - Return the performance score for a single MX
     *
     * Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
    **/
    getDeviceAppliancePerformance(req: operations.GetDeviceAppliancePerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAppliancePerformanceResponse>;
    /**
     * getNetworkApplianceClientSecurityEvents - List the security events for a client
     *
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * getNetworkApplianceConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MX network
     *
     * Return the connectivity testing destinations for an MX network
    **/
    getNetworkApplianceConnectivityMonitoringDestinations(req: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * getNetworkApplianceContentFiltering - Return the content filtering settings for an MX network
     *
     * Return the content filtering settings for an MX network
    **/
    getNetworkApplianceContentFiltering(req: operations.GetNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringResponse>;
    /**
     * getNetworkApplianceContentFilteringCategories - List all available content filtering categories for an MX network
     *
     * List all available content filtering categories for an MX network
    **/
    getNetworkApplianceContentFilteringCategories(req: operations.GetNetworkApplianceContentFilteringCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse>;
    /**
     * getNetworkApplianceFirewallCellularFirewallRules - Return the cellular firewall rules for an MX network
     *
     * Return the cellular firewall rules for an MX network
    **/
    getNetworkApplianceFirewallCellularFirewallRules(req: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallFirewalledService - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     *
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
    **/
    getNetworkApplianceFirewallFirewalledService(req: operations.GetNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * getNetworkApplianceFirewallFirewalledServices - List the appliance services and their accessibility rules
     *
     * List the appliance services and their accessibility rules
    **/
    getNetworkApplianceFirewallFirewalledServices(req: operations.GetNetworkApplianceFirewallFirewalledServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServicesResponse>;
    /**
     * getNetworkApplianceFirewallInboundFirewallRules - Return the inbound firewall rules for an MX network
     *
     * Return the inbound firewall rules for an MX network
    **/
    getNetworkApplianceFirewallInboundFirewallRules(req: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallL3FirewallRules - Return the L3 firewall rules for an MX network
     *
     * Return the L3 firewall rules for an MX network
    **/
    getNetworkApplianceFirewallL3FirewallRules(req: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallL7FirewallRules - List the MX L7 firewall rules for an MX network
     *
     * List the MX L7 firewall rules for an MX network
    **/
    getNetworkApplianceFirewallL7FirewallRules(req: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * getNetworkApplianceFirewallL7FirewallRulesApplicationCategories - Return the L7 firewall application categories and their associated applications for an MX network
     *
     * Return the L7 firewall application categories and their associated applications for an MX network
    **/
    getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse>;
    /**
     * getNetworkApplianceFirewallOneToManyNatRules - Return the 1:Many NAT mapping rules for an MX network
     *
     * Return the 1:Many NAT mapping rules for an MX network
    **/
    getNetworkApplianceFirewallOneToManyNatRules(req: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * getNetworkApplianceFirewallOneToOneNatRules - Return the 1:1 NAT mapping rules for an MX network
     *
     * Return the 1:1 NAT mapping rules for an MX network
    **/
    getNetworkApplianceFirewallOneToOneNatRules(req: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * getNetworkApplianceFirewallPortForwardingRules - Return the port forwarding rules for an MX network
     *
     * Return the port forwarding rules for an MX network
    **/
    getNetworkApplianceFirewallPortForwardingRules(req: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * getNetworkAppliancePort - Return per-port VLAN settings for a single MX port.
     *
     * Return per-port VLAN settings for a single MX port.
    **/
    getNetworkAppliancePort(req: operations.GetNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortResponse>;
    /**
     * getNetworkAppliancePorts - List per-port VLAN settings for all ports of a MX.
     *
     * List per-port VLAN settings for all ports of a MX.
    **/
    getNetworkAppliancePorts(req: operations.GetNetworkAppliancePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortsResponse>;
    /**
     * getNetworkApplianceSecurityEvents - List the security events for a network
     *
     * List the security events for a network
    **/
    getNetworkApplianceSecurityEvents(req: operations.GetNetworkApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityEventsResponse>;
    /**
     * getNetworkApplianceSecurityIntrusion - Returns all supported intrusion settings for an MX network
     *
     * Returns all supported intrusion settings for an MX network
    **/
    getNetworkApplianceSecurityIntrusion(req: operations.GetNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse>;
    /**
     * getNetworkApplianceSecurityMalware - Returns all supported malware settings for an MX network
     *
     * Returns all supported malware settings for an MX network
    **/
    getNetworkApplianceSecurityMalware(req: operations.GetNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityMalwareResponse>;
    /**
     * getNetworkApplianceSettings - Return the appliance settings for a network
     *
     * Return the appliance settings for a network
    **/
    getNetworkApplianceSettings(req: operations.GetNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSettingsResponse>;
    /**
     * getNetworkApplianceSingleLan - Return single LAN configuration
     *
     * Return single LAN configuration
    **/
    getNetworkApplianceSingleLan(req: operations.GetNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSingleLanResponse>;
    /**
     * getNetworkApplianceStaticRoute - Return a static route for an MX or teleworker network
     *
     * Return a static route for an MX or teleworker network
    **/
    getNetworkApplianceStaticRoute(req: operations.GetNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRouteResponse>;
    /**
     * getNetworkApplianceStaticRoutes - List the static routes for an MX or teleworker network
     *
     * List the static routes for an MX or teleworker network
    **/
    getNetworkApplianceStaticRoutes(req: operations.GetNetworkApplianceStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRoutesResponse>;
    /**
     * getNetworkApplianceTrafficShaping - Display the traffic shaping settings for an MX network
     *
     * Display the traffic shaping settings for an MX network
    **/
    getNetworkApplianceTrafficShaping(req: operations.GetNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingResponse>;
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClass - Return a custom performance class for an MX network
     *
     * Return a custom performance class for an MX network
    **/
    getNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClasses - List all custom performance classes for an MX network
     *
     * List all custom performance classes for an MX network
    **/
    getNetworkApplianceTrafficShapingCustomPerformanceClasses(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse>;
    /**
     * getNetworkApplianceTrafficShapingRules - Display the traffic shaping settings rules for an MX network
     *
     * Display the traffic shaping settings rules for an MX network
    **/
    getNetworkApplianceTrafficShapingRules(req: operations.GetNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * getNetworkApplianceTrafficShapingUplinkBandwidth - Returns the uplink bandwidth settings for your MX network.
     *
     * Returns the uplink bandwidth settings for your MX network.
    **/
    getNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * getNetworkApplianceTrafficShapingUplinkSelection - Show uplink selection settings for an MX network
     *
     * Show uplink selection settings for an MX network
    **/
    getNetworkApplianceTrafficShapingUplinkSelection(req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * getNetworkApplianceUplinksUsageHistory - Get the sent and received bytes for each uplink of a network.
     *
     * Get the sent and received bytes for each uplink of a network.
    **/
    getNetworkApplianceUplinksUsageHistory(req: operations.GetNetworkApplianceUplinksUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceUplinksUsageHistoryResponse>;
    /**
     * getNetworkApplianceVlan - Return a VLAN
     *
     * Return a VLAN
    **/
    getNetworkApplianceVlan(req: operations.GetNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlanResponse>;
    /**
     * getNetworkApplianceVlans - List the VLANs for an MX network
     *
     * List the VLANs for an MX network
    **/
    getNetworkApplianceVlans(req: operations.GetNetworkApplianceVlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansResponse>;
    /**
     * getNetworkApplianceVlansSettings - Returns the enabled status of VLANs for the network
     *
     * Returns the enabled status of VLANs for the network
    **/
    getNetworkApplianceVlansSettings(req: operations.GetNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansSettingsResponse>;
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
     * getNetworkApplianceWarmSpare - Return MX warm spare settings
     *
     * Return MX warm spare settings
    **/
    getNetworkApplianceWarmSpare(req: operations.GetNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceWarmSpareResponse>;
    /**
     * getOrganizationApplianceSecurityEvents - List the security events for an organization
     *
     * List the security events for an organization
    **/
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
    /**
     * getOrganizationApplianceSecurityIntrusion - Returns all supported intrusion settings for an organization
     *
     * Returns all supported intrusion settings for an organization
    **/
    getOrganizationApplianceSecurityIntrusion(req: operations.GetOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * getOrganizationApplianceUplinkStatuses - List the uplink status of every Meraki MX and Z series appliances in the organization
     *
     * List the uplink status of every Meraki MX and Z series appliances in the organization
    **/
    getOrganizationApplianceUplinkStatuses(req: operations.GetOrganizationApplianceUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceUplinkStatusesResponse>;
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
     * swapNetworkApplianceWarmSpare - Swap MX primary and warm spare appliances
     *
     * Swap MX primary and warm spare appliances
    **/
    swapNetworkApplianceWarmSpare(req: operations.SwapNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.SwapNetworkApplianceWarmSpareResponse>;
    /**
     * updateNetworkApplianceConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MX network
     *
     * Update the connectivity testing destinations for an MX network
    **/
    updateNetworkApplianceConnectivityMonitoringDestinations(req: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * updateNetworkApplianceContentFiltering - Update the content filtering settings for an MX network
     *
     * Update the content filtering settings for an MX network
    **/
    updateNetworkApplianceContentFiltering(req: operations.UpdateNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceContentFilteringResponse>;
    /**
     * updateNetworkApplianceFirewallCellularFirewallRules - Update the cellular firewall rules of an MX network
     *
     * Update the cellular firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallFirewalledService - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     *
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
    **/
    updateNetworkApplianceFirewallFirewalledService(req: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * updateNetworkApplianceFirewallInboundFirewallRules - Update the inbound firewall rules of an MX network
     *
     * Update the inbound firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallInboundFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallL3FirewallRules - Update the L3 firewall rules of an MX network
     *
     * Update the L3 firewall rules of an MX network
    **/
    updateNetworkApplianceFirewallL3FirewallRules(req: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallL7FirewallRules - Update the MX L7 firewall rules for an MX network
     *
     * Update the MX L7 firewall rules for an MX network
    **/
    updateNetworkApplianceFirewallL7FirewallRules(req: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * updateNetworkApplianceFirewallOneToManyNatRules - Set the 1:Many NAT mapping rules for an MX network
     *
     * Set the 1:Many NAT mapping rules for an MX network
    **/
    updateNetworkApplianceFirewallOneToManyNatRules(req: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * updateNetworkApplianceFirewallOneToOneNatRules - Set the 1:1 NAT mapping rules for an MX network
     *
     * Set the 1:1 NAT mapping rules for an MX network
    **/
    updateNetworkApplianceFirewallOneToOneNatRules(req: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * updateNetworkApplianceFirewallPortForwardingRules - Update the port forwarding rules for an MX network
     *
     * Update the port forwarding rules for an MX network
    **/
    updateNetworkApplianceFirewallPortForwardingRules(req: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * updateNetworkAppliancePort - Update the per-port VLAN settings for a single MX port.
     *
     * Update the per-port VLAN settings for a single MX port.
    **/
    updateNetworkAppliancePort(req: operations.UpdateNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePortResponse>;
    /**
     * updateNetworkApplianceSecurityIntrusion - Set the supported intrusion settings for an MX network
     *
     * Set the supported intrusion settings for an MX network
    **/
    updateNetworkApplianceSecurityIntrusion(req: operations.UpdateNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityIntrusionResponse>;
    /**
     * updateNetworkApplianceSecurityMalware - Set the supported malware settings for an MX network
     *
     * Set the supported malware settings for an MX network
    **/
    updateNetworkApplianceSecurityMalware(req: operations.UpdateNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityMalwareResponse>;
    /**
     * updateNetworkApplianceSingleLan - Update single LAN configuration
     *
     * Update single LAN configuration
    **/
    updateNetworkApplianceSingleLan(req: operations.UpdateNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSingleLanResponse>;
    /**
     * updateNetworkApplianceStaticRoute - Update a static route for an MX or teleworker network
     *
     * Update a static route for an MX or teleworker network
    **/
    updateNetworkApplianceStaticRoute(req: operations.UpdateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceStaticRouteResponse>;
    /**
     * updateNetworkApplianceTrafficShaping - Update the traffic shaping settings for an MX network
     *
     * Update the traffic shaping settings for an MX network
    **/
    updateNetworkApplianceTrafficShaping(req: operations.UpdateNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingResponse>;
    /**
     * updateNetworkApplianceTrafficShapingCustomPerformanceClass - Update a custom performance class for an MX network
     *
     * Update a custom performance class for an MX network
    **/
    updateNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * updateNetworkApplianceTrafficShapingRules - Update the traffic shaping settings rules for an MX network
     *
     * Update the traffic shaping settings rules for an MX network
    **/
    updateNetworkApplianceTrafficShapingRules(req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkBandwidth - Updates the uplink bandwidth settings for your MX network.
     *
     * Updates the uplink bandwidth settings for your MX network.
    **/
    updateNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * updateNetworkApplianceTrafficShapingUplinkSelection - Update uplink selection settings for an MX network
     *
     * Update uplink selection settings for an MX network
    **/
    updateNetworkApplianceTrafficShapingUplinkSelection(req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * updateNetworkApplianceVlan - Update a VLAN
     *
     * Update a VLAN
    **/
    updateNetworkApplianceVlan(req: operations.UpdateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlanResponse>;
    /**
     * updateNetworkApplianceVlansSettings - Enable/Disable VLANs for the given network
     *
     * Enable/Disable VLANs for the given network
    **/
    updateNetworkApplianceVlansSettings(req: operations.UpdateNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse>;
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
     * updateNetworkApplianceWarmSpare - Update MX warm spare settings
     *
     * Update MX warm spare settings
    **/
    updateNetworkApplianceWarmSpare(req: operations.UpdateNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceWarmSpareResponse>;
    /**
     * updateOrganizationApplianceSecurityIntrusion - Sets supported intrusion settings for an organization
     *
     * Sets supported intrusion settings for an organization
    **/
    updateOrganizationApplianceSecurityIntrusion(req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse>;
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
