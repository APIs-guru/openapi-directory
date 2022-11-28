# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                MerakiAPIKey: shared.SchemeMerakiAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetNetworkSwitchAccessControlListsRequest{
        PathParams: operations.GetNetworkSwitchAccessControlListsPathParams{
            NetworkID: "rerum",
        },
    }
    
    res, err := s.AccessControlLists.GetNetworkSwitchAccessControlLists(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessControlLists

* `GetNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `UpdateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network

### accessPolicies

* `CreateNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `DeleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `GetNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `GetNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `UpdateNetworkSwitchAccessPolicy` - Update an access policy for a switch network

### acls

* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL

### actionBatches

* `CreateOrganizationActionBatch` - Create an action batch
* `DeleteOrganizationActionBatch` - Delete an action batch
* `GetOrganizationActionBatch` - Return an action batch
* `GetOrganizationActionBatches` - Return the list of action batches in the organization
* `UpdateOrganizationActionBatch` - Update an action batch

### adaptivePolicy

* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings

### admins

* `CreateOrganizationAdmin` - Create a new dashboard administrator
* `DeleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `GetOrganizationAdmins` - List the dashboard administrators in this organization
* `UpdateOrganizationAdmin` - Update an administrator

### airMarshal

* `GetNetworkWirelessAirMarshal` - List Air Marshal scan results from a network

### alertTypes

* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts

### alerts

* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network

### alternateManagementInterface

* `GetNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `GetNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `UpdateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `UpdateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP

### analytics

* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera

### apiRequests

* `GetOrganizationAPIRequests` - List the API requests made by an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data

### apnsCert

* `GetOrganizationSmApnsCert` - Get the organization's APNS certificate

### appliance

* `CreateNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `CreateNetworkApplianceVlan` - Add a VLAN
* `DeleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `DeleteNetworkApplianceVlan` - Delete a VLAN from a network
* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `GetDeviceAppliancePerformance` - Return the performance score for a single MX
* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `GetNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `GetNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `GetNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `GetNetworkApplianceSettings` - Return the appliance settings for a network
* `GetNetworkApplianceSingleLan` - Return single LAN configuration
* `GetNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `GetNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `GetNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetNetworkApplianceVlan` - Return a VLAN
* `GetNetworkApplianceVlans` - List the VLANs for an MX network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `GetNetworkApplianceWarmSpare` - Return MX warm spare settings
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationApplianceVpnThirdPartyVpnPeers` - Return the third party VPN peers for an organization
* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `SwapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `UpdateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `UpdateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `UpdateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `UpdateNetworkApplianceSingleLan` - Update single LAN configuration
* `UpdateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `UpdateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `UpdateNetworkApplianceVlan` - Update a VLAN
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `UpdateNetworkApplianceWarmSpare` - Update MX warm spare settings
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization
* `UpdateOrganizationApplianceVpnThirdPartyVpnPeers` - Update the third party VPN peers for an organization
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### applicationCategories

* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.

### applicationUsage

* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients

### applications

* `GetNetworkInsightApplicationHealthByTime` - Get application health by time
* `GetOrganizationInsightApplications` - List all Insight tracked applications

### bgp

* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration

### billing

* `GetNetworkWirelessBilling` - Return the billing settings of this network
* `UpdateNetworkWirelessBilling` - Update the billing settings

### bluetooth

* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network

### bluetoothClients

* `GetNetworkBluetoothClient` - Return a Bluetooth client
* `GetNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network

### bonjourForwarding

* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID

### brandingPolicies

* `CreateOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `DeleteOrganizationBrandingPolicy` - Delete a branding policy
* `GetOrganizationBrandingPolicies` - List the branding policies of an organization
* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `GetOrganizationBrandingPolicy` - Return a branding policy
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `UpdateOrganizationBrandingPolicy` - Update a branding policy

### bypassActivationLockAttempts

* `CreateNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `GetNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status

### camera

* `CreateNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `CreateNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `DeleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `DeleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `GenerateDeviceCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
* `GetDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `GetDeviceCameraSense` - Returns sense settings for a given camera
* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `GetDeviceCameraVideoLink` - Returns video link to the specified camera
* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `GetDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `GetNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `GetNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `GetNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `GetNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `GetNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `UpdateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera
* `UpdateDeviceCameraSense` - Update sense settings for the given camera
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera
* `UpdateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `UpdateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.
* `UpdateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### categories

* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network

### cellularFirewallRules

* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network

### cellularGateway

* `GetDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `GetDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `GetNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `GetNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `GetNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `GetNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `UpdateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.
* `UpdateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `UpdateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network
* `UpdateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `UpdateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.
* `UpdateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.

### cellularUsageHistory

* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history

### certs

* `GetNetworkSmDeviceCerts` - List the certs on a device

### channelUtilization

* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.

### channelUtilizationHistory

* `GetNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client

### clientCountHistory

* `GetNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client

### clients

* `GetDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkClient` - Return the client associated with the given identifier
* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkClients` - List the clients that have used this network in the timespan
* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetNetworkClientsUsageHistories` - Return the usage histories for clients
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `ProvisionNetworkClients` - Provisions a client with a name and policy
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### configTemplates

* `CreateOrganizationConfigTemplate` - Create a new configuration template
* `DeleteOrganizationConfigTemplate` - Remove a configuration template
* `GetOrganizationConfigTemplate` - Return a single configuration template
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `GetOrganizationConfigTemplates` - List the configuration templates for this organization
* `UpdateOrganizationConfigTemplate` - Update a configuration template
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### configurationChanges

* `GetOrganizationConfigurationChanges` - View the Change Log for your organization

### configure

* `AddNetworkSwitchStack` - Add a switch to a stack
* `AssignOrganizationLicensesSeats` - Assign SM seats to a network
* `BindNetwork` - Bind a network to a template.
* `CheckinNetworkSmDevices` - Force check-in a set of devices
* `ClaimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `ClaimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `CloneOrganization` - Create a new organization by cloning the addressed organization
* `CloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `CombineOrganizationNetworks` - Combine multiple networks into a single network
* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `CreateNetworkApplianceVlan` - Add a VLAN
* `CreateNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `CreateNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `CreateNetworkFloorPlan` - Upload a floor plan
* `CreateNetworkGroupPolicy` - Create a group policy
* `CreateNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `CreateNetworkMqttBroker` - Add an MQTT broker
* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `CreateNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `CreateNetworkSmTargetGroup` - Add a target group
* `CreateNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `CreateNetworkSwitchLinkAggregation` - Create a link aggregation group
* `CreateNetworkSwitchPortSchedule` - Add a switch port schedule
* `CreateNetworkSwitchQosRule` - Add a quality of service rule
* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `CreateNetworkSwitchStack` - Create a stack
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `CreateNetworkWirelessRfProfile` - Creates new RF profile for this network
* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `CreateOrganization` - Create a new organization
* `CreateOrganizationActionBatch` - Create an action batch
* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `CreateOrganizationAdmin` - Create a new dashboard administrator
* `CreateOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `CreateOrganizationConfigTemplate` - Create a new configuration template
* `CreateOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `CreateOrganizationNetwork` - Create a network
* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `CreateOrganizationSamlRole` - Create a SAML role
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetwork` - Delete a network
* `DeleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `DeleteNetworkApplianceVlan` - Delete a VLAN from a network
* `DeleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `DeleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `DeleteNetworkFloorPlan` - Destroy a floor plan
* `DeleteNetworkGroupPolicy` - Delete a group policy
* `DeleteNetworkMerakiAuthUser` - Deauthorize a user
* `DeleteNetworkMqttBroker` - Delete an MQTT broker
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `DeleteNetworkSmTargetGroup` - Delete a target group from a network
* `DeleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `DeleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `DeleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `DeleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `DeleteNetworkSwitchQosRule` - Delete a quality of service rule
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `DeleteNetworkSwitchStack` - Delete a stack
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `DeleteNetworkWirelessRfProfile` - Delete a RF Profile
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `DeleteOrganization` - Delete an organization
* `DeleteOrganizationActionBatch` - Delete an action batch
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `DeleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `DeleteOrganizationBrandingPolicy` - Delete a branding policy
* `DeleteOrganizationConfigTemplate` - Remove a configuration template
* `DeleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `DeleteOrganizationSamlRole` - Remove a SAML role
* `GetDevice` - Return a single device
* `GetDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `GetDeviceCameraSense` - Returns sense settings for a given camera
* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `GetDeviceCameraVideoLink` - Returns video link to the specified camera
* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `GetDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `GetDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `GetDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `GetDeviceManagementInterface` - Return the management interface settings for a device
* `GetDeviceSwitchPort` - Return a switch port
* `GetDeviceSwitchPorts` - List the switch ports for a switch
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `GetNetwork` - Return a network
* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `GetNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `GetNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `GetNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `GetNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `GetNetworkApplianceSettings` - Return the appliance settings for a network
* `GetNetworkApplianceSingleLan` - Return single LAN configuration
* `GetNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `GetNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `GetNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `GetNetworkApplianceVlan` - Return a VLAN
* `GetNetworkApplianceVlans` - List the VLANs for an MX network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `GetNetworkApplianceWarmSpare` - Return MX warm spare settings
* `GetNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `GetNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `GetNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `GetNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `GetNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `GetNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `GetNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `GetNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `GetNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `GetNetworkDevices` - List the devices in a network
* `GetNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `GetNetworkFloorPlan` - Find a floor plan by ID
* `GetNetworkFloorPlans` - List the floor plans that belong to your network
* `GetNetworkGroupPolicies` - List the group policies in a network
* `GetNetworkGroupPolicy` - Display a group policy
* `GetNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `GetNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `GetNetworkMqttBroker` - Return an MQTT broker
* `GetNetworkMqttBrokers` - List the MQTT brokers for this network
* `GetNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization
* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `GetNetworkSettings` - Return the settings for a network
* `GetNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `GetNetworkSmDeviceCerts` - List the certs on a device
* `GetNetworkSmDeviceDeviceProfiles` - Get the profiles associated with a device
* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device
* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `GetNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `GetNetworkSmProfiles` - List all profiles in a network
* `GetNetworkSmTargetGroup` - Return a target group
* `GetNetworkSmTargetGroups` - List the target groups in this network
* `GetNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `GetNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `GetNetworkSnmp` - Return the SNMP settings for a network
* `GetNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `GetNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `GetNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `GetNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `GetNetworkSwitchDhcpServerPolicy` - Return the DHCP server policy
* `GetNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `GetNetworkSwitchLinkAggregations` - List link aggregation groups
* `GetNetworkSwitchMtu` - Return the MTU configuration
* `GetNetworkSwitchPortSchedules` - List switch port schedules
* `GetNetworkSwitchQosRule` - Return a quality of service rule
* `GetNetworkSwitchQosRules` - List quality of service rules
* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `GetNetworkSwitchSettings` - Returns the switch network settings
* `GetNetworkSwitchStack` - Show a switch stack
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `GetNetworkSwitchStacks` - List the switch stacks in a network
* `GetNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `GetNetworkSwitchStp` - Returns STP settings
* `GetNetworkSyslogServers` - List the syslog servers for a network
* `GetNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `GetNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `GetNetworkWirelessBilling` - Return the billing settings of this network
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `GetNetworkWirelessRfProfile` - Return a RF profile
* `GetNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `GetNetworkWirelessSettings` - Return the wireless settings for a network
* `GetNetworkWirelessSsid` - Return a single MR SSID
* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetNetworkWirelessSsids` - List the MR SSIDs in a network
* `GetOrganization` - Return an organization
* `GetOrganizationActionBatch` - Return an action batch
* `GetOrganizationActionBatches` - Return the list of action batches in the organization
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `GetOrganizationAdmins` - List the dashboard administrators in this organization
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `GetOrganizationApplianceVpnThirdPartyVpnPeers` - Return the third party VPN peers for an organization
* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `GetOrganizationBrandingPolicies` - List the branding policies of an organization
* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `GetOrganizationBrandingPolicy` - Return a branding policy
* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `GetOrganizationConfigTemplate` - Return a single configuration template
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `GetOrganizationConfigTemplates` - List the configuration templates for this organization
* `GetOrganizationDevices` - List the devices in an organization
* `GetOrganizationInsightApplications` - List all Insight tracked applications
* `GetOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `GetOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `GetOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `GetOrganizationInventoryDevices` - Return the device inventory for an organization
* `GetOrganizationLicense` - Display a license
* `GetOrganizationLicenses` - List the licenses for an organization
* `GetOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `GetOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `GetOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `GetOrganizationSamlRole` - Return a SAML role
* `GetOrganizationSamlRoles` - List the SAML roles for this organization
* `GetOrganizationSmApnsCert` - Get the organization's APNS certificate
* `GetOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `GetOrganizationSmVppAccounts` - List the VPP accounts in the organization
* `GetOrganizationSnmp` - Return the SNMP settings for an organization
* `GetOrganizations` - List the organizations that the user has privileges on
* `LockNetworkSmDevices` - Lock a set of devices
* `ModifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `MoveNetworkSmDevices` - Move a set of devices to a new network
* `MoveOrganizationLicenses` - Move licenses to another organization
* `MoveOrganizationLicensesSeats` - Move SM seats to another organization
* `ProvisionNetworkClients` - Provisions a client with a name and policy
* `RefreshNetworkSmDeviceDetails` - Refresh the details of a device
* `RemoveNetworkDevices` - Remove a single device
* `RemoveNetworkSwitchStack` - Remove a switch from a stack
* `RenewOrganizationLicensesSeats` - Renew SM seats of a license
* `SplitNetwork` - Split a combined network into individual networks for each type of device
* `SwapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `UnbindNetwork` - Unbind a network from a template.
* `UnenrollNetworkSmDevice` - Unenroll a device
* `UpdateDevice` - Update the attributes of a device
* `UpdateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera
* `UpdateDeviceCameraSense` - Update sense settings for the given camera
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera
* `UpdateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `UpdateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.
* `UpdateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `UpdateDeviceManagementInterface` - Update the management interface settings for a device
* `UpdateDeviceSwitchPort` - Update a switch port
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `UpdateNetwork` - Update a network
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network
* `UpdateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `UpdateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `UpdateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `UpdateNetworkApplianceSingleLan` - Update single LAN configuration
* `UpdateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `UpdateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `UpdateNetworkApplianceVlan` - Update a VLAN
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `UpdateNetworkApplianceWarmSpare` - Update MX warm spare settings
* `UpdateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.
* `UpdateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.
* `UpdateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network
* `UpdateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `UpdateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.
* `UpdateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization
* `UpdateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `UpdateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data
* `UpdateNetworkGroupPolicy` - Update a group policy
* `UpdateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `UpdateNetworkMqttBroker` - Update an MQTT broker
* `UpdateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network
* `UpdateNetworkSettings` - Update the settings for a network
* `UpdateNetworkSmDevicesFields` - Modify the fields of a device
* `UpdateNetworkSmTargetGroup` - Update a target group
* `UpdateNetworkSnmp` - Update the SNMP settings for a network
* `UpdateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network
* `UpdateNetworkSwitchAccessPolicy` - Update an access policy for a switch network
* `UpdateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `UpdateNetworkSwitchDhcpServerPolicy` - Update the DHCP server policy
* `UpdateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings
* `UpdateNetworkSwitchLinkAggregation` - Update a link aggregation group
* `UpdateNetworkSwitchMtu` - Update the MTU configuration
* `UpdateNetworkSwitchPortSchedule` - Update a switch port schedule
* `UpdateNetworkSwitchQosRule` - Update a quality of service rule
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `UpdateNetworkSwitchSettings` - Update switch network settings
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack
* `UpdateNetworkSwitchStormControl` - Update the storm control configuration for a switch network
* `UpdateNetworkSwitchStp` - Updates STP settings
* `UpdateNetworkSyslogServers` - Update the syslog servers for a network
* `UpdateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server
* `UpdateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP
* `UpdateNetworkWirelessBilling` - Update the billing settings
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `UpdateNetworkWirelessRfProfile` - Updates specified RF profile for this network
* `UpdateNetworkWirelessSettings` - Update the wireless settings for a network
* `UpdateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID
* `UpdateOrganization` - Update an organization
* `UpdateOrganizationActionBatch` - Update an action batch
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings
* `UpdateOrganizationAdmin` - Update an administrator
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization
* `UpdateOrganizationApplianceVpnThirdPartyVpnPeers` - Update the third party VPN peers for an organization
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `UpdateOrganizationBrandingPolicy` - Update a branding policy
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed
* `UpdateOrganizationConfigTemplate` - Update a configuration template
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port
* `UpdateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization
* `UpdateOrganizationLicense` - Update a license
* `UpdateOrganizationLoginSecurity` - Update the login security settings for an organization
* `UpdateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization
* `UpdateOrganizationSamlRole` - Update a SAML role
* `UpdateOrganizationSnmp` - Update the SNMP settings for an organization
* `WipeNetworkSmDevices` - Wipe a device

### connectionStats

* `GetDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node

### connectivity

* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### connectivityEvents

* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.

### connectivityMonitoringDestinations

* `GetNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `GetNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `UpdateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `UpdateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network

### contentFiltering

* `GetNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `UpdateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network

### customPerformanceClasses

* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network

### dataRateHistory

* `GetNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client

### desktopLogs

* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.

### deviceCommandLogs

* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices

### deviceProfiles

* `GetNetworkSmDeviceDeviceProfiles` - Get the profiles associated with a device
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user

### deviceTypeGroupPolicies

* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID

### devices

* `BlinkDeviceLeds` - Blink the LEDs on a device
* `CheckinNetworkSmDevices` - Force check-in a set of devices
* `ClaimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `CloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `GetDevice` - Return a single device
* `GetDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `GetDeviceLldpCdp` - List LLDP and CDP information for a device
* `GetDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `GetDeviceManagementInterface` - Return the management interface settings for a device
* `GetNetworkDevices` - List the devices in a network
* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `GetNetworkSmDeviceCerts` - List the certs on a device
* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `GetNetworkSmDeviceDeviceProfiles` - Get the profiles associated with a device
* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device
* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `GetNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetOrganizationDevices` - List the devices in an organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `LockNetworkSmDevices` - Lock a set of devices
* `ModifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `MoveNetworkSmDevices` - Move a set of devices to a new network
* `RebootDevice` - Reboot a device
* `RefreshNetworkSmDeviceDetails` - Refresh the details of a device
* `RemoveNetworkDevices` - Remove a single device
* `UnenrollNetworkSmDevice` - Unenroll a device
* `UpdateDevice` - Update the attributes of a device
* `UpdateDeviceManagementInterface` - Update the management interface settings for a device
* `UpdateNetworkSmDevicesFields` - Modify the fields of a device
* `WipeNetworkSmDevices` - Wipe a device

### dhcp

* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### dhcpServerPolicy

* `GetNetworkSwitchDhcpServerPolicy` - Return the DHCP server policy
* `UpdateNetworkSwitchDhcpServerPolicy` - Update the DHCP server policy

### dscpTaggingOptions

* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.

### dscpToCosMappings

* `GetNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `UpdateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings

### eapOverride

* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.

### eventTypes

* `GetNetworkEventsEventTypes` - List the event type to human-readable description

### events

* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkEvents` - List the events for the network
* `GetNetworkEventsEventTypes` - List the event type to human-readable description
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization

### failedConnections

* `GetNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range

### fields

* `UpdateNetworkSmDevicesFields` - Modify the fields of a device

### firewall

* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network

### firewalledServices

* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### firmwareUpgrades

* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `GetNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `UpdateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network

### floorPlans

* `CreateNetworkFloorPlan` - Upload a floor plan
* `DeleteNetworkFloorPlan` - Destroy a floor plan
* `GetNetworkFloorPlan` - Find a floor plan by ID
* `GetNetworkFloorPlans` - List the floor plans that belong to your network
* `UpdateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data

### groupPolicies

* `CreateNetworkGroupPolicy` - Create a group policy
* `DeleteNetworkGroupPolicy` - Delete a group policy
* `GetNetworkGroupPolicies` - List the group policies in a network
* `GetNetworkGroupPolicy` - Display a group policy
* `UpdateNetworkGroupPolicy` - Update a group policy

### healthByTime

* `GetNetworkInsightApplicationHealthByTime` - Get application health by time

### history

* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones

### hotspot20

* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID

### httpServers

* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server

### identityPsks

* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK

### idps

* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization

### inboundFirewallRules

* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network

### insight

* `CreateOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `DeleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `GetNetworkInsightApplicationHealthByTime` - Get application health by time
* `GetOrganizationInsightApplications` - List all Insight tracked applications
* `GetOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `GetOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `UpdateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### interfaces

* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### intrusion

* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization

### inventoryDevices

* `GetOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `GetOrganizationInventoryDevices` - Return the device inventory for an organization

### l3FirewallRules

* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network

### l7FirewallRules

* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network

### lan

* `GetDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `UpdateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.

### latencyHistory

* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client

### latencyStats

* `GetDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetNetworkWirelessLatencyStats` - Aggregated latency info for this network

### licenses

* `AssignOrganizationLicensesSeats` - Assign SM seats to a network
* `GetOrganizationLicense` - Display a license
* `GetOrganizationLicenses` - List the licenses for an organization
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `MoveOrganizationLicenses` - Move licenses to another organization
* `MoveOrganizationLicensesSeats` - Move SM seats to another organization
* `RenewOrganizationLicensesSeats` - Renew SM seats of a license
* `UpdateOrganizationLicense` - Update a license

### linkAggregations

* `CreateNetworkSwitchLinkAggregation` - Create a link aggregation group
* `DeleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `GetNetworkSwitchLinkAggregations` - List link aggregation groups
* `UpdateNetworkSwitchLinkAggregation` - Update a link aggregation group

### live

* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones

### liveTools

* `BlinkDeviceLeds` - Blink the LEDs on a device
* `CycleDeviceSwitchPorts` - Cycle a set of switch ports
* `RebootDevice` - Reboot a device

### lldpCdp

* `GetDeviceLldpCdp` - List LLDP and CDP information for a device

### loginSecurity

* `GetOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `UpdateOrganizationLoginSecurity` - Update the login security settings for an organization

### logs

* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent

### lossAndLatencyHistory

* `GetDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### malware

* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network

### managementInterface

* `GetDeviceManagementInterface` - Return the management interface settings for a device
* `UpdateDeviceManagementInterface` - Update the management interface settings for a device

### merakiAuthUsers

* `CreateNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `DeleteNetworkMerakiAuthUser` - Deauthorize a user
* `GetNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `GetNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `UpdateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### meshStatuses

* `GetNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters

### monitor

* `GenerateDeviceCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `GetDeviceAppliancePerformance` - Return the performance score for a single MX
* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
* `GetDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `GetDeviceLldpCdp` - List LLDP and CDP information for a device
* `GetDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `GetDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `GetDeviceWirelessStatus` - Return the SSID statuses of an access point
* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetNetworkBluetoothClient` - Return a Bluetooth client
* `GetNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network
* `GetNetworkClient` - Return the client associated with the given identifier
* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkClients` - List the clients that have used this network in the timespan
* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetNetworkClientsUsageHistories` - Return the usage histories for clients
* `GetNetworkEvents` - List the events for the network
* `GetNetworkEventsEventTypes` - List the event type to human-readable description
* `GetNetworkInsightApplicationHealthByTime` - Get application health by time
* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.
* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `GetNetworkSplashLoginAttempts` - List the splash login attempts for a network
* `GetNetworkTraffic` - Return the traffic analysis data for this network
* `GetNetworkWirelessAirMarshal` - List Air Marshal scan results from a network
* `GetNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `GetNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client
* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `GetNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range
* `GetNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client
* `GetNetworkWirelessLatencyStats` - Aggregated latency info for this network
* `GetNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters
* `GetNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client
* `GetNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client
* `GetOrganizationAPIRequests` - List the API requests made by an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `GetOrganizationConfigurationChanges` - View the Change Log for your organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `GetOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent

### monitoredMediaServers

* `CreateOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `DeleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `GetOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `GetOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `UpdateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### mqttBrokers

* `CreateNetworkMqttBroker` - Add an MQTT broker
* `DeleteNetworkMqttBroker` - Delete an MQTT broker
* `GetNetworkMqttBroker` - Return an MQTT broker
* `GetNetworkMqttBrokers` - List the MQTT brokers for this network
* `UpdateNetworkMqttBroker` - Update an MQTT broker

### mtu

* `GetNetworkSwitchMtu` - Return the MTU configuration
* `UpdateNetworkSwitchMtu` - Update the MTU configuration

### multicast

* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point

### netflow

* `GetNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `UpdateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network

### networkAdapters

* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device

### networkHealth

* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.

### networks

* `BindNetwork` - Bind a network to a template.
* `ClaimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `CombineOrganizationNetworks` - Combine multiple networks into a single network
* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `CreateNetworkFloorPlan` - Upload a floor plan
* `CreateNetworkGroupPolicy` - Create a group policy
* `CreateNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `CreateNetworkMqttBroker` - Add an MQTT broker
* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `CreateOrganizationNetwork` - Create a network
* `DeleteNetwork` - Delete a network
* `DeleteNetworkFloorPlan` - Destroy a floor plan
* `DeleteNetworkGroupPolicy` - Delete a group policy
* `DeleteNetworkMerakiAuthUser` - Deauthorize a user
* `DeleteNetworkMqttBroker` - Delete an MQTT broker
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `GetNetwork` - Return a network
* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `GetNetworkBluetoothClient` - Return a Bluetooth client
* `GetNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network
* `GetNetworkClient` - Return the client associated with the given identifier
* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkClients` - List the clients that have used this network in the timespan
* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetNetworkClientsUsageHistories` - Return the usage histories for clients
* `GetNetworkDevices` - List the devices in a network
* `GetNetworkEvents` - List the events for the network
* `GetNetworkEventsEventTypes` - List the event type to human-readable description
* `GetNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `GetNetworkFloorPlan` - Find a floor plan by ID
* `GetNetworkFloorPlans` - List the floor plans that belong to your network
* `GetNetworkGroupPolicies` - List the group policies in a network
* `GetNetworkGroupPolicy` - Display a group policy
* `GetNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `GetNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `GetNetworkMqttBroker` - Return an MQTT broker
* `GetNetworkMqttBrokers` - List the MQTT brokers for this network
* `GetNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.
* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization
* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `GetNetworkSettings` - Return the settings for a network
* `GetNetworkSnmp` - Return the SNMP settings for a network
* `GetNetworkSplashLoginAttempts` - List the splash login attempts for a network
* `GetNetworkSyslogServers` - List the syslog servers for a network
* `GetNetworkTraffic` - Return the traffic analysis data for this network
* `GetNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `GetOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `ProvisionNetworkClients` - Provisions a client with a name and policy
* `RemoveNetworkDevices` - Remove a single device
* `SplitNetwork` - Split a combined network into individual networks for each type of device
* `UnbindNetwork` - Unbind a network from a template.
* `UpdateNetwork` - Update a network
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization
* `UpdateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `UpdateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data
* `UpdateNetworkGroupPolicy` - Update a group policy
* `UpdateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `UpdateNetworkMqttBroker` - Update an MQTT broker
* `UpdateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network
* `UpdateNetworkSettings` - Update the settings for a network
* `UpdateNetworkSnmp` - Update the SNMP settings for a network
* `UpdateNetworkSyslogServers` - Update the syslog servers for a network
* `UpdateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server

### objectDetectionModels

* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera

### onboarding

* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### oneToManyNatRules

* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network

### oneToOneNatRules

* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network

### openapiSpec

* `GetOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### order

* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch

### organizations

* `AssignOrganizationLicensesSeats` - Assign SM seats to a network
* `ClaimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `CloneOrganization` - Create a new organization by cloning the addressed organization
* `CombineOrganizationNetworks` - Combine multiple networks into a single network
* `CreateOrganization` - Create a new organization
* `CreateOrganizationActionBatch` - Create an action batch
* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `CreateOrganizationAdmin` - Create a new dashboard administrator
* `CreateOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `CreateOrganizationConfigTemplate` - Create a new configuration template
* `CreateOrganizationNetwork` - Create a network
* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `CreateOrganizationSamlRole` - Create a SAML role
* `DeleteOrganization` - Delete an organization
* `DeleteOrganizationActionBatch` - Delete an action batch
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `DeleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `DeleteOrganizationBrandingPolicy` - Delete a branding policy
* `DeleteOrganizationConfigTemplate` - Remove a configuration template
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `DeleteOrganizationSamlRole` - Remove a SAML role
* `GetOrganization` - Return an organization
* `GetOrganizationActionBatch` - Return an action batch
* `GetOrganizationActionBatches` - Return the list of action batches in the organization
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `GetOrganizationAdmins` - List the dashboard administrators in this organization
* `GetOrganizationAPIRequests` - List the API requests made by an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data
* `GetOrganizationBrandingPolicies` - List the branding policies of an organization
* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `GetOrganizationBrandingPolicy` - Return a branding policy
* `GetOrganizationConfigTemplate` - Return a single configuration template
* `GetOrganizationConfigTemplates` - List the configuration templates for this organization
* `GetOrganizationConfigurationChanges` - View the Change Log for your organization
* `GetOrganizationDevices` - List the devices in an organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `GetOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `GetOrganizationInventoryDevices` - Return the device inventory for an organization
* `GetOrganizationLicense` - Display a license
* `GetOrganizationLicenses` - List the licenses for an organization
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `GetOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `GetOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `GetOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `GetOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `GetOrganizationSamlRole` - Return a SAML role
* `GetOrganizationSamlRoles` - List the SAML roles for this organization
* `GetOrganizationSnmp` - Return the SNMP settings for an organization
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent
* `GetOrganizations` - List the organizations that the user has privileges on
* `MoveOrganizationLicenses` - Move licenses to another organization
* `MoveOrganizationLicensesSeats` - Move SM seats to another organization
* `RenewOrganizationLicensesSeats` - Renew SM seats of a license
* `UpdateOrganization` - Update an organization
* `UpdateOrganizationActionBatch` - Update an action batch
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings
* `UpdateOrganizationAdmin` - Update an administrator
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `UpdateOrganizationBrandingPolicy` - Update a branding policy
* `UpdateOrganizationConfigTemplate` - Update a configuration template
* `UpdateOrganizationLicense` - Update a license
* `UpdateOrganizationLoginSecurity` - Update the login security settings for an organization
* `UpdateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization
* `UpdateOrganizationSamlRole` - Update a SAML role
* `UpdateOrganizationSnmp` - Update the SNMP settings for an organization

### ospf

* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration

### overview

* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization

### packets

* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch

### performance

* `GetDeviceAppliancePerformance` - Return the performance score for a single MX

### performanceHistory

* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.

### pii

* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization
* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### piiKeys

* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier

### policy

* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network

### portForwardingRules

* `GetDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `UpdateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network

### portSchedules

* `CreateNetworkSwitchPortSchedule` - Add a switch port schedule
* `DeleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `GetNetworkSwitchPortSchedules` - List switch port schedules
* `UpdateNetworkSwitchPortSchedule` - Update a switch port schedule

### ports

* `CycleDeviceSwitchPorts` - Cycle a set of switch ports
* `GetDeviceSwitchPort` - Return a switch port
* `GetDeviceSwitchPorts` - List the switch ports for a switch
* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `GetNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `UpdateDeviceSwitchPort` - Update a switch port
* `UpdateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### priorities

* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.

### profiles

* `GetNetworkSmProfiles` - List all profiles in a network
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### qosRules

* `CreateNetworkSwitchQosRule` - Add a quality of service rule
* `DeleteNetworkSwitchQosRule` - Delete a quality of service rule
* `GetNetworkSwitchQosRule` - Return a quality of service rule
* `GetNetworkSwitchQosRules` - List quality of service rules
* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `UpdateNetworkSwitchQosRule` - Update a quality of service rule
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch

### qualityAndRetention

* `GetDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `UpdateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera

### qualityRetentionProfiles

* `CreateNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `DeleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `GetNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `GetNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `UpdateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.

### radio

* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device

### recent

* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones

### rendezvousPoints

* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point

### requests

* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization

### restrictions

* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device

### rfProfiles

* `CreateNetworkWirelessRfProfile` - Creates new RF profile for this network
* `DeleteNetworkWirelessRfProfile` - Delete a RF Profile
* `GetNetworkWirelessRfProfile` - Return a RF profile
* `GetNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `UpdateNetworkWirelessRfProfile` - Updates specified RF profile for this network

### rollbacks

* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network

### routing

* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### rules

* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network

### saml

* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `GetOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `UpdateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization

### samlRoles

* `CreateOrganizationSamlRole` - Create a SAML role
* `DeleteOrganizationSamlRole` - Remove a SAML role
* `GetOrganizationSamlRole` - Return a SAML role
* `GetOrganizationSamlRoles` - List the SAML roles for this organization
* `UpdateOrganizationSamlRole` - Update a SAML role

### schedules

* `GetNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID

### security

* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization

### securityCenters

* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device

### sense

* `GetDeviceCameraSense` - Returns sense settings for a given camera
* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `UpdateDeviceCameraSense` - Update sense settings for the given camera

### settings

* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `GetNetworkApplianceSettings` - Return the appliance settings for a network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `GetNetworkSettings` - Return the settings for a network
* `GetNetworkSwitchSettings` - Returns the switch network settings
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `GetNetworkWirelessSettings` - Return the wireless settings for a network
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `UpdateNetworkSettings` - Update the settings for a network
* `UpdateNetworkSwitchSettings` - Update switch network settings
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `UpdateNetworkWirelessSettings` - Update the wireless settings for a network
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings

### signalQualityHistory

* `GetNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client

### singleLan

* `GetNetworkApplianceSingleLan` - Return single LAN configuration
* `UpdateNetworkApplianceSingleLan` - Update single LAN configuration

### siteToSiteVpn

* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network

### sm

* `CheckinNetworkSmDevices` - Force check-in a set of devices
* `CreateNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `CreateNetworkSmTargetGroup` - Add a target group
* `DeleteNetworkSmTargetGroup` - Delete a target group from a network
* `DeleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `GetNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `GetNetworkSmDeviceCerts` - List the certs on a device
* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `GetNetworkSmDeviceDeviceProfiles` - Get the profiles associated with a device
* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device
* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `GetNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `GetNetworkSmProfiles` - List all profiles in a network
* `GetNetworkSmTargetGroup` - Return a target group
* `GetNetworkSmTargetGroups` - List the target groups in this network
* `GetNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `GetNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `GetOrganizationSmApnsCert` - Get the organization's APNS certificate
* `GetOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `GetOrganizationSmVppAccounts` - List the VPP accounts in the organization
* `LockNetworkSmDevices` - Lock a set of devices
* `ModifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `MoveNetworkSmDevices` - Move a set of devices to a new network
* `RefreshNetworkSmDeviceDetails` - Refresh the details of a device
* `UnenrollNetworkSmDevice` - Unenroll a device
* `UpdateNetworkSmDevicesFields` - Modify the fields of a device
* `UpdateNetworkSmTargetGroup` - Update a target group
* `WipeNetworkSmDevices` - Wipe a device

### smDevicesForKey

* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

### smOwnersForKey

* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### snmp

* `GetNetworkSnmp` - Return the SNMP settings for a network
* `GetOrganizationSnmp` - Return the SNMP settings for an organization
* `UpdateNetworkSnmp` - Update the SNMP settings for a network
* `UpdateOrganizationSnmp` - Update the SNMP settings for an organization

### softwares

* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user

### splash

* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID

### splashAuthorizationStatus

* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### splashLoginAttempts

* `GetNetworkSplashLoginAttempts` - List the splash login attempts for a network

### ssids

* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `GetNetworkWirelessSsid` - Return a single MR SSID
* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetNetworkWirelessSsids` - List the MR SSIDs in a network
* `UpdateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID

### stacks

* `AddNetworkSwitchStack` - Add a switch to a stack
* `CreateNetworkSwitchStack` - Create a stack
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `DeleteNetworkSwitchStack` - Delete a stack
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetNetworkSwitchStack` - Show a switch stack
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `GetNetworkSwitchStacks` - List the switch stacks in a network
* `RemoveNetworkSwitchStack` - Remove a switch from a stack
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### staticRoutes

* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `GetNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### stats

* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization

### status

* `GetDeviceWirelessStatus` - Return the SSID statuses of an access point

### statuses

* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### stormControl

* `GetNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `UpdateNetworkSwitchStormControl` - Update the storm control configuration for a switch network

### stp

* `GetNetworkSwitchStp` - Returns STP settings
* `UpdateNetworkSwitchStp` - Updates STP settings

### subnetPool

* `GetNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `UpdateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.

### subnets

* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance

### switch

* `AddNetworkSwitchStack` - Add a switch to a stack
* `CloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `CreateNetworkSwitchLinkAggregation` - Create a link aggregation group
* `CreateNetworkSwitchPortSchedule` - Add a switch port schedule
* `CreateNetworkSwitchQosRule` - Add a quality of service rule
* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `CreateNetworkSwitchStack` - Create a stack
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `CycleDeviceSwitchPorts` - Cycle a set of switch ports
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `DeleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `DeleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `DeleteNetworkSwitchQosRule` - Delete a quality of service rule
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `DeleteNetworkSwitchStack` - Delete a stack
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetDeviceSwitchPort` - Return a switch port
* `GetDeviceSwitchPorts` - List the switch ports for a switch
* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `GetNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `GetNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `GetNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `GetNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `GetNetworkSwitchDhcpServerPolicy` - Return the DHCP server policy
* `GetNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `GetNetworkSwitchLinkAggregations` - List link aggregation groups
* `GetNetworkSwitchMtu` - Return the MTU configuration
* `GetNetworkSwitchPortSchedules` - List switch port schedules
* `GetNetworkSwitchQosRule` - Return a quality of service rule
* `GetNetworkSwitchQosRules` - List quality of service rules
* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `GetNetworkSwitchSettings` - Returns the switch network settings
* `GetNetworkSwitchStack` - Show a switch stack
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `GetNetworkSwitchStacks` - List the switch stacks in a network
* `GetNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `GetNetworkSwitchStp` - Returns STP settings
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `RemoveNetworkSwitchStack` - Remove a switch from a stack
* `UpdateDeviceSwitchPort` - Update a switch port
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `UpdateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network
* `UpdateNetworkSwitchAccessPolicy` - Update an access policy for a switch network
* `UpdateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `UpdateNetworkSwitchDhcpServerPolicy` - Update the DHCP server policy
* `UpdateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings
* `UpdateNetworkSwitchLinkAggregation` - Update a link aggregation group
* `UpdateNetworkSwitchMtu` - Update the MTU configuration
* `UpdateNetworkSwitchPortSchedule` - Update a switch port schedule
* `UpdateNetworkSwitchQosRule` - Update a quality of service rule
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `UpdateNetworkSwitchSettings` - Update switch network settings
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack
* `UpdateNetworkSwitchStormControl` - Update the storm control configuration for a switch network
* `UpdateNetworkSwitchStp` - Updates STP settings
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### syslogServers

* `GetNetworkSyslogServers` - List the syslog servers for a network
* `UpdateNetworkSyslogServers` - Update the syslog servers for a network

### targetGroups

* `CreateNetworkSmTargetGroup` - Add a target group
* `DeleteNetworkSmTargetGroup` - Delete a target group from a network
* `GetNetworkSmTargetGroup` - Return a target group
* `GetNetworkSmTargetGroups` - List the target groups in this network
* `UpdateNetworkSmTargetGroup` - Update a target group

### thirdPartyVPNPeers

* `GetOrganizationApplianceVpnThirdPartyVpnPeers` - Return the third party VPN peers for an organization
* `UpdateOrganizationApplianceVpnThirdPartyVpnPeers` - Update the third party VPN peers for an organization

### traffic

* `GetNetworkTraffic` - Return the traffic analysis data for this network

### trafficAnalysis

* `GetNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `UpdateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network

### trafficHistory

* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time

### trafficShaping

* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `GetNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `UpdateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network

### uplink

* `GetNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `UpdateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.

### uplinkBandwidth

* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.

### uplinkSelection

* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network

### uplinks

* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization

### uplinksLossAndLatency

* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### usageHistories

* `GetNetworkClientsUsageHistories` - Return the usage histories for clients

### usageHistory

* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client

### userAccessDevices

* `DeleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `GetNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections

### users

* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `GetNetworkSmUsers` - List the owners in an SM network with various specified fields and filters

### video

* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera

### videoLink

* `GetDeviceCameraVideoLink` - Returns video link to the specified camera

### vlans

* `CreateNetworkApplianceVlan` - Add a VLAN
* `DeleteNetworkApplianceVlan` - Delete a VLAN from a network
* `GetNetworkApplianceVlan` - Return a VLAN
* `GetNetworkApplianceVlans` - List the VLANs for an MX network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `UpdateNetworkApplianceVlan` - Update a VLAN
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network

### vpn

* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationApplianceVpnThirdPartyVpnPeers` - Return the third party VPN peers for an organization
* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID
* `UpdateOrganizationApplianceVpnThirdPartyVpnPeers` - Update the third party VPN peers for an organization
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### vpnFirewallRules

* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### vppAccounts

* `GetOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `GetOrganizationSmVppAccounts` - List the VPP accounts in the organization

### warmSpare

* `GetDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `GetNetworkApplianceWarmSpare` - Return MX warm spare settings
* `SwapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `UpdateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `UpdateNetworkApplianceWarmSpare` - Update MX warm spare settings

### webhookTests

* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network

### webhooks

* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server

### wireless

* `CreateNetworkWirelessRfProfile` - Creates new RF profile for this network
* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `DeleteNetworkWirelessRfProfile` - Delete a RF Profile
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `GetDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `GetDeviceWirelessStatus` - Return the SSID statuses of an access point
* `GetNetworkWirelessAirMarshal` - List Air Marshal scan results from a network
* `GetNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `GetNetworkWirelessBilling` - Return the billing settings of this network
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `GetNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `GetNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client
* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `GetNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range
* `GetNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client
* `GetNetworkWirelessLatencyStats` - Aggregated latency info for this network
* `GetNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters
* `GetNetworkWirelessRfProfile` - Return a RF profile
* `GetNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `GetNetworkWirelessSettings` - Return the wireless settings for a network
* `GetNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client
* `GetNetworkWirelessSsid` - Return a single MR SSID
* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetNetworkWirelessSsids` - List the MR SSIDs in a network
* `GetNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `UpdateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP
* `UpdateNetworkWirelessBilling` - Update the billing settings
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `UpdateNetworkWirelessRfProfile` - Updates specified RF profile for this network
* `UpdateNetworkWirelessSettings` - Update the wireless settings for a network
* `UpdateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID

### wirelessProfiles

* `CreateNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `DeleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `GetDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `GetNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `GetNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `UpdateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `UpdateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.

### wlanLists

* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device

### zones

* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
