# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        meraki_api_key=shared.SchemeMerakiAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetNetworkSwitchAccessControlListsRequest(
    path_params=operations.GetNetworkSwitchAccessControlListsPathParams(
        network_id="rerum",
    ),
)
    
res = s.access_control_lists.get_network_switch_access_control_lists(req)

if res.get_network_switch_access_control_lists_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessControlLists

* `get_network_switch_access_control_lists` - Return the access control lists for a MS network
* `update_network_switch_access_control_lists` - Update the access control lists for a MS network

### accessPolicies

* `create_network_switch_access_policy` - Create an access policy for a switch network
* `delete_network_switch_access_policy` - Delete an access policy for a switch network
* `get_network_switch_access_policies` - List the access policies for a switch network
* `get_network_switch_access_policy` - Return a specific access policy for a switch network
* `update_network_switch_access_policy` - Update an access policy for a switch network

### acls

* `create_organization_adaptive_policy_acl` - Creates new adaptive policy ACL
* `delete_organization_adaptive_policy_acl` - Deletes the specified adaptive policy ACL
* `get_organization_adaptive_policy_acl` - Returns the adaptive policy ACL information
* `get_organization_adaptive_policy_acls` - List adaptive policy ACLs in a organization
* `update_organization_adaptive_policy_acl` - Updates an adaptive policy ACL

### actionBatches

* `create_organization_action_batch` - Create an action batch
* `delete_organization_action_batch` - Delete an action batch
* `get_organization_action_batch` - Return an action batch
* `get_organization_action_batches` - Return the list of action batches in the organization
* `update_organization_action_batch` - Update an action batch

### adaptivePolicy

* `create_organization_adaptive_policy_acl` - Creates new adaptive policy ACL
* `delete_organization_adaptive_policy_acl` - Deletes the specified adaptive policy ACL
* `get_organization_adaptive_policy_acl` - Returns the adaptive policy ACL information
* `get_organization_adaptive_policy_acls` - List adaptive policy ACLs in a organization
* `get_organization_adaptive_policy_settings` - Returns global adaptive policy settings in an organization
* `update_organization_adaptive_policy_acl` - Updates an adaptive policy ACL
* `update_organization_adaptive_policy_settings` - Update global adaptive policy settings

### admins

* `create_organization_admin` - Create a new dashboard administrator
* `delete_organization_admin` - Revoke all access for a dashboard administrator within this organization
* `get_organization_admins` - List the dashboard administrators in this organization
* `update_organization_admin` - Update an administrator

### airMarshal

* `get_network_wireless_air_marshal` - List Air Marshal scan results from a network

### alertTypes

* `get_organization_webhooks_alert_types` - Return a list of alert types to be used with managing webhook alerts

### alerts

* `get_network_alerts_settings` - Return the alert configuration for this network
* `update_network_alerts_settings` - Update the alert configuration for this network

### alternateManagementInterface

* `get_network_switch_alternate_management_interface` - Return the switch alternate management interface for the network
* `get_network_wireless_alternate_management_interface` - Return alternate management interface and devices with IP assigned
* `update_network_switch_alternate_management_interface` - Update the switch alternate management interface for the network
* `update_network_wireless_alternate_management_interface` - Update alternate management interface and device static IP

### analytics

* `get_device_camera_analytics_live` - Returns live state from camera of analytics zones
* `get_device_camera_analytics_overview` - Returns an overview of aggregate analytics data for a timespan
* `get_device_camera_analytics_recent` - Returns most recent record for analytics zones
* `get_device_camera_analytics_zone_history` - Return historical records for analytic zones
* `get_device_camera_analytics_zones` - Returns all configured analytic zones for this camera

### apiRequests

* `get_organization_api_requests` - List the API requests made by an organization
* `get_organization_api_requests_overview` - Return an aggregated overview of API requests data

### apnsCert

* `get_organization_sm_apns_cert` - Get the organization's APNS certificate

### appliance

* `create_network_appliance_static_route` - Add a static route for an MX or teleworker network
* `create_network_appliance_traffic_shaping_custom_performance_class` - Add a custom performance class for an MX network
* `create_network_appliance_vlan` - Add a VLAN
* `delete_network_appliance_static_route` - Delete a static route from an MX or teleworker network
* `delete_network_appliance_traffic_shaping_custom_performance_class` - Delete a custom performance class from an MX network
* `delete_network_appliance_vlan` - Delete a VLAN from a network
* `get_device_appliance_dhcp_subnets` - Return the DHCP subnet information for an appliance
* `get_device_appliance_performance` - Return the performance score for a single MX
* `get_network_appliance_client_security_events` - List the security events for a client
* `get_network_appliance_connectivity_monitoring_destinations` - Return the connectivity testing destinations for an MX network
* `get_network_appliance_content_filtering` - Return the content filtering settings for an MX network
* `get_network_appliance_content_filtering_categories` - List all available content filtering categories for an MX network
* `get_network_appliance_firewall_cellular_firewall_rules` - Return the cellular firewall rules for an MX network
* `get_network_appliance_firewall_firewalled_service` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `get_network_appliance_firewall_firewalled_services` - List the appliance services and their accessibility rules
* `get_network_appliance_firewall_inbound_firewall_rules` - Return the inbound firewall rules for an MX network
* `get_network_appliance_firewall_l3_firewall_rules` - Return the L3 firewall rules for an MX network
* `get_network_appliance_firewall_l7_firewall_rules` - List the MX L7 firewall rules for an MX network
* `get_network_appliance_firewall_l7_firewall_rules_application_categories` - Return the L7 firewall application categories and their associated applications for an MX network
* `get_network_appliance_firewall_one_to_many_nat_rules` - Return the 1:Many NAT mapping rules for an MX network
* `get_network_appliance_firewall_one_to_one_nat_rules` - Return the 1:1 NAT mapping rules for an MX network
* `get_network_appliance_firewall_port_forwarding_rules` - Return the port forwarding rules for an MX network
* `get_network_appliance_port` - Return per-port VLAN settings for a single MX port.
* `get_network_appliance_ports` - List per-port VLAN settings for all ports of a MX.
* `get_network_appliance_security_events` - List the security events for a network
* `get_network_appliance_security_intrusion` - Returns all supported intrusion settings for an MX network
* `get_network_appliance_security_malware` - Returns all supported malware settings for an MX network
* `get_network_appliance_settings` - Return the appliance settings for a network
* `get_network_appliance_single_lan` - Return single LAN configuration
* `get_network_appliance_static_route` - Return a static route for an MX or teleworker network
* `get_network_appliance_static_routes` - List the static routes for an MX or teleworker network
* `get_network_appliance_traffic_shaping` - Display the traffic shaping settings for an MX network
* `get_network_appliance_traffic_shaping_custom_performance_class` - Return a custom performance class for an MX network
* `get_network_appliance_traffic_shaping_custom_performance_classes` - List all custom performance classes for an MX network
* `get_network_appliance_traffic_shaping_rules` - Display the traffic shaping settings rules for an MX network
* `get_network_appliance_traffic_shaping_uplink_bandwidth` - Returns the uplink bandwidth settings for your MX network.
* `get_network_appliance_traffic_shaping_uplink_selection` - Show uplink selection settings for an MX network
* `get_network_appliance_uplinks_usage_history` - Get the sent and received bytes for each uplink of a network.
* `get_network_appliance_vlan` - Return a VLAN
* `get_network_appliance_vlans` - List the VLANs for an MX network
* `get_network_appliance_vlans_settings` - Returns the enabled status of VLANs for the network
* `get_network_appliance_vpn_bgp` - Return a Hub BGP Configuration
* `get_network_appliance_vpn_site_to_site_vpn` - Return the site-to-site VPN settings of a network
* `get_network_appliance_warm_spare` - Return MX warm spare settings
* `get_organization_appliance_security_events` - List the security events for an organization
* `get_organization_appliance_security_intrusion` - Returns all supported intrusion settings for an organization
* `get_organization_appliance_uplink_statuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `get_organization_appliance_vpn_stats` - Show VPN history stat for networks in an organization
* `get_organization_appliance_vpn_statuses` - Show VPN status for networks in an organization
* `get_organization_appliance_vpn_third_party_vpn_peers` - Return the third party VPN peers for an organization
* `get_organization_appliance_vpn_vpn_firewall_rules` - Return the firewall rules for an organization's site-to-site VPN
* `swap_network_appliance_warm_spare` - Swap MX primary and warm spare appliances
* `update_network_appliance_connectivity_monitoring_destinations` - Update the connectivity testing destinations for an MX network
* `update_network_appliance_content_filtering` - Update the content filtering settings for an MX network
* `update_network_appliance_firewall_cellular_firewall_rules` - Update the cellular firewall rules of an MX network
* `update_network_appliance_firewall_firewalled_service` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `update_network_appliance_firewall_inbound_firewall_rules` - Update the inbound firewall rules of an MX network
* `update_network_appliance_firewall_l3_firewall_rules` - Update the L3 firewall rules of an MX network
* `update_network_appliance_firewall_l7_firewall_rules` - Update the MX L7 firewall rules for an MX network
* `update_network_appliance_firewall_one_to_many_nat_rules` - Set the 1:Many NAT mapping rules for an MX network
* `update_network_appliance_firewall_one_to_one_nat_rules` - Set the 1:1 NAT mapping rules for an MX network
* `update_network_appliance_firewall_port_forwarding_rules` - Update the port forwarding rules for an MX network
* `update_network_appliance_port` - Update the per-port VLAN settings for a single MX port.
* `update_network_appliance_security_intrusion` - Set the supported intrusion settings for an MX network
* `update_network_appliance_security_malware` - Set the supported malware settings for an MX network
* `update_network_appliance_single_lan` - Update single LAN configuration
* `update_network_appliance_static_route` - Update a static route for an MX or teleworker network
* `update_network_appliance_traffic_shaping` - Update the traffic shaping settings for an MX network
* `update_network_appliance_traffic_shaping_custom_performance_class` - Update a custom performance class for an MX network
* `update_network_appliance_traffic_shaping_rules` - Update the traffic shaping settings rules for an MX network
* `update_network_appliance_traffic_shaping_uplink_bandwidth` - Updates the uplink bandwidth settings for your MX network.
* `update_network_appliance_traffic_shaping_uplink_selection` - Update uplink selection settings for an MX network
* `update_network_appliance_vlan` - Update a VLAN
* `update_network_appliance_vlans_settings` - Enable/Disable VLANs for the given network
* `update_network_appliance_vpn_bgp` - Update a Hub BGP Configuration
* `update_network_appliance_vpn_site_to_site_vpn` - Update the site-to-site VPN settings of a network
* `update_network_appliance_warm_spare` - Update MX warm spare settings
* `update_organization_appliance_security_intrusion` - Sets supported intrusion settings for an organization
* `update_organization_appliance_vpn_third_party_vpn_peers` - Update the third party VPN peers for an organization
* `update_organization_appliance_vpn_vpn_firewall_rules` - Update the firewall rules of an organization's site-to-site VPN

### applicationCategories

* `get_network_appliance_firewall_l7_firewall_rules_application_categories` - Return the L7 firewall application categories and their associated applications for an MX network
* `get_network_traffic_shaping_application_categories` - Returns the application categories for traffic shaping rules.

### applicationUsage

* `get_network_clients_application_usage` - Return the application usage data for clients

### applications

* `get_network_insight_application_health_by_time` - Get application health by time
* `get_organization_insight_applications` - List all Insight tracked applications

### bgp

* `get_network_appliance_vpn_bgp` - Return a Hub BGP Configuration
* `update_network_appliance_vpn_bgp` - Update a Hub BGP Configuration

### billing

* `get_network_wireless_billing` - Return the billing settings of this network
* `update_network_wireless_billing` - Update the billing settings

### bluetooth

* `get_device_wireless_bluetooth_settings` - Return the bluetooth settings for a wireless device
* `get_network_wireless_bluetooth_settings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `update_device_wireless_bluetooth_settings` - Update the bluetooth settings for a wireless device
* `update_network_wireless_bluetooth_settings` - Update the Bluetooth settings for a network

### bluetoothClients

* `get_network_bluetooth_client` - Return a Bluetooth client
* `get_network_bluetooth_clients` - List the Bluetooth clients seen by APs in this network

### bonjourForwarding

* `get_network_wireless_ssid_bonjour_forwarding` - List the Bonjour forwarding setting and rules for the SSID
* `update_network_wireless_ssid_bonjour_forwarding` - Update the bonjour forwarding setting and rules for the SSID

### brandingPolicies

* `create_organization_branding_policy` - Add a new branding policy to an organization
* `delete_organization_branding_policy` - Delete a branding policy
* `get_organization_branding_policies` - List the branding policies of an organization
* `get_organization_branding_policies_priorities` - Return the branding policy IDs of an organization in priority order
* `get_organization_branding_policy` - Return a branding policy
* `update_organization_branding_policies_priorities` - Update the priority ordering of an organization's branding policies.
* `update_organization_branding_policy` - Update a branding policy

### bypassActivationLockAttempts

* `create_network_sm_bypass_activation_lock_attempt` - Bypass activation lock attempt
* `get_network_sm_bypass_activation_lock_attempt` - Bypass activation lock attempt status

### camera

* `create_network_camera_quality_retention_profile` - Creates new quality retention profile for this network.
* `create_network_camera_wireless_profile` - Creates a new camera wireless profile for this network.
* `delete_network_camera_quality_retention_profile` - Delete an existing quality retention profile for this network.
* `delete_network_camera_wireless_profile` - Delete an existing camera wireless profile for this network.
* `generate_device_camera_snapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `get_device_camera_analytics_live` - Returns live state from camera of analytics zones
* `get_device_camera_analytics_overview` - Returns an overview of aggregate analytics data for a timespan
* `get_device_camera_analytics_recent` - Returns most recent record for analytics zones
* `get_device_camera_analytics_zone_history` - Return historical records for analytic zones
* `get_device_camera_analytics_zones` - Returns all configured analytic zones for this camera
* `get_device_camera_quality_and_retention` - Returns quality and retention settings for the given camera
* `get_device_camera_sense` - Returns sense settings for a given camera
* `get_device_camera_sense_object_detection_models` - Returns the MV Sense object detection model list for the given camera
* `get_device_camera_video_link` - Returns video link to the specified camera
* `get_device_camera_video_settings` - Returns video settings for the given camera
* `get_device_camera_wireless_profiles` - Returns wireless profile assigned to the given camera
* `get_network_camera_quality_retention_profile` - Retrieve a single quality retention profile
* `get_network_camera_quality_retention_profiles` - List the quality retention profiles for this network
* `get_network_camera_schedules` - Returns a list of all camera recording schedules.
* `get_network_camera_wireless_profile` - Retrieve a single camera wireless profile.
* `get_network_camera_wireless_profiles` - List the camera wireless profiles for this network.
* `get_organization_camera_onboarding_statuses` - Fetch onboarding status of cameras
* `update_device_camera_quality_and_retention` - Update quality and retention settings for the given camera
* `update_device_camera_sense` - Update sense settings for the given camera
* `update_device_camera_video_settings` - Update video settings for the given camera
* `update_device_camera_wireless_profiles` - Assign wireless profiles to the given camera
* `update_network_camera_quality_retention_profile` - Update an existing quality retention profile for this network.
* `update_network_camera_wireless_profile` - Update an existing camera wireless profile in this network.
* `update_organization_camera_onboarding_statuses` - Notify that credential handoff to camera has completed

### categories

* `get_network_appliance_content_filtering_categories` - List all available content filtering categories for an MX network

### cellularFirewallRules

* `get_network_appliance_firewall_cellular_firewall_rules` - Return the cellular firewall rules for an MX network
* `update_network_appliance_firewall_cellular_firewall_rules` - Update the cellular firewall rules of an MX network

### cellularGateway

* `get_device_cellular_gateway_lan` - Show the LAN Settings of a MG
* `get_device_cellular_gateway_port_forwarding_rules` - Returns the port forwarding rules for a single MG.
* `get_network_cellular_gateway_connectivity_monitoring_destinations` - Return the connectivity testing destinations for an MG network
* `get_network_cellular_gateway_dhcp` - List common DHCP settings of MGs
* `get_network_cellular_gateway_subnet_pool` - Return the subnet pool and mask configured for MGs in the network.
* `get_network_cellular_gateway_uplink` - Returns the uplink settings for your MG network.
* `get_organization_cellular_gateway_uplink_statuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `update_device_cellular_gateway_lan` - Update the LAN Settings for a single MG.
* `update_device_cellular_gateway_port_forwarding_rules` - Updates the port forwarding rules for a single MG.
* `update_network_cellular_gateway_connectivity_monitoring_destinations` - Update the connectivity testing destinations for an MG network
* `update_network_cellular_gateway_dhcp` - Update common DHCP settings of MGs
* `update_network_cellular_gateway_subnet_pool` - Update the subnet pool and mask configuration for MGs in the network.
* `update_network_cellular_gateway_uplink` - Updates the uplink settings for your MG network.

### cellularUsageHistory

* `get_network_sm_device_cellular_usage_history` - Return the client's daily cellular data usage history

### certs

* `get_network_sm_device_certs` - List the certs on a device

### channelUtilization

* `get_network_network_health_channel_utilization` - Get the channel utilization over each radio for all APs in a network.

### channelUtilizationHistory

* `get_network_wireless_channel_utilization_history` - Return AP channel utilization over time for a device or network client

### clientCountHistory

* `get_network_wireless_client_count_history` - Return wireless client counts over time for a network, device, or network client

### clients

* `get_device_clients` - List the clients of a device, up to a maximum of a month ago
* `get_network_appliance_client_security_events` - List the security events for a client
* `get_network_client` - Return the client associated with the given identifier
* `get_network_client_policy` - Return the policy assigned to a client on the network
* `get_network_client_splash_authorization_status` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `get_network_client_traffic_history` - Return the client's network traffic data over time
* `get_network_client_usage_history` - Return the client's daily usage history
* `get_network_clients` - List the clients that have used this network in the timespan
* `get_network_clients_application_usage` - Return the application usage data for clients
* `get_network_clients_overview` - Return overview statistics for network clients
* `get_network_clients_usage_histories` - Return the usage histories for clients
* `get_network_wireless_client_connection_stats` - Aggregated connectivity info for a given client on this network
* `get_network_wireless_client_connectivity_events` - List the wireless connectivity events for a client within a network in the timespan.
* `get_network_wireless_client_latency_history` - Return the latency history for a client
* `get_network_wireless_client_latency_stats` - Aggregated latency info for a given client on this network
* `get_network_wireless_clients_connection_stats` - Aggregated connectivity info for this network, grouped by clients
* `get_network_wireless_clients_latency_stats` - Aggregated latency info for this network, grouped by clients
* `provision_network_clients` - Provisions a client with a name and policy
* `update_network_client_policy` - Update the policy assigned to a client on the network
* `update_network_client_splash_authorization_status` - Update a client's splash authorization

### configTemplates

* `create_organization_config_template` - Create a new configuration template
* `delete_organization_config_template` - Remove a configuration template
* `get_organization_config_template` - Return a single configuration template
* `get_organization_config_template_switch_profile_port` - Return a switch profile port
* `get_organization_config_template_switch_profile_ports` - Return all the ports of a switch profile
* `get_organization_config_template_switch_profiles` - List the switch profiles for your switch template configuration
* `get_organization_config_templates` - List the configuration templates for this organization
* `update_organization_config_template` - Update a configuration template
* `update_organization_config_template_switch_profile_port` - Update a switch profile port

### configurationChanges

* `get_organization_configuration_changes` - View the Change Log for your organization

### configure

* `add_network_switch_stack` - Add a switch to a stack
* `assign_organization_licenses_seats` - Assign SM seats to a network
* `bind_network` - Bind a network to a template.
* `checkin_network_sm_devices` - Force check-in a set of devices
* `claim_into_organization` - Claim a list of devices, licenses, and/or orders into an organization
* `claim_network_devices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `clone_organization` - Create a new organization by cloning the addressed organization
* `clone_organization_switch_devices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `combine_organization_networks` - Combine multiple networks into a single network
* `create_device_switch_routing_interface` - Create a layer 3 interface for a switch
* `create_device_switch_routing_static_route` - Create a layer 3 static route for a switch
* `create_network_appliance_static_route` - Add a static route for an MX or teleworker network
* `create_network_appliance_traffic_shaping_custom_performance_class` - Add a custom performance class for an MX network
* `create_network_appliance_vlan` - Add a VLAN
* `create_network_camera_quality_retention_profile` - Creates new quality retention profile for this network.
* `create_network_camera_wireless_profile` - Creates a new camera wireless profile for this network.
* `create_network_firmware_upgrades_rollback` - Rollback a Firmware Upgrade For A Network
* `create_network_floor_plan` - Upload a floor plan
* `create_network_group_policy` - Create a group policy
* `create_network_meraki_auth_user` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `create_network_mqtt_broker` - Add an MQTT broker
* `create_network_pii_request` - Submit a new delete or restrict processing PII request
* `create_network_sm_bypass_activation_lock_attempt` - Bypass activation lock attempt
* `create_network_sm_target_group` - Add a target group
* `create_network_switch_access_policy` - Create an access policy for a switch network
* `create_network_switch_link_aggregation` - Create a link aggregation group
* `create_network_switch_port_schedule` - Add a switch port schedule
* `create_network_switch_qos_rule` - Add a quality of service rule
* `create_network_switch_routing_multicast_rendezvous_point` - Create a multicast rendezvous point
* `create_network_switch_stack` - Create a stack
* `create_network_switch_stack_routing_interface` - Create a layer 3 interface for a switch stack
* `create_network_switch_stack_routing_static_route` - Create a layer 3 static route for a switch stack
* `create_network_webhooks_http_server` - Add an HTTP server to a network
* `create_network_webhooks_webhook_test` - Send a test webhook for a network
* `create_network_wireless_rf_profile` - Creates new RF profile for this network
* `create_network_wireless_ssid_identity_psk` - Create an Identity PSK
* `create_organization` - Create a new organization
* `create_organization_action_batch` - Create an action batch
* `create_organization_adaptive_policy_acl` - Creates new adaptive policy ACL
* `create_organization_admin` - Create a new dashboard administrator
* `create_organization_branding_policy` - Add a new branding policy to an organization
* `create_organization_config_template` - Create a new configuration template
* `create_organization_insight_monitored_media_server` - Add a media server to be monitored for this organization
* `create_organization_network` - Create a network
* `create_organization_saml_idp` - Create a SAML IdP for your organization.
* `create_organization_saml_role` - Create a SAML role
* `delete_device_switch_routing_interface` - Delete a layer 3 interface from the switch
* `delete_device_switch_routing_static_route` - Delete a layer 3 static route for a switch
* `delete_network` - Delete a network
* `delete_network_appliance_static_route` - Delete a static route from an MX or teleworker network
* `delete_network_appliance_traffic_shaping_custom_performance_class` - Delete a custom performance class from an MX network
* `delete_network_appliance_vlan` - Delete a VLAN from a network
* `delete_network_camera_quality_retention_profile` - Delete an existing quality retention profile for this network.
* `delete_network_camera_wireless_profile` - Delete an existing camera wireless profile for this network.
* `delete_network_floor_plan` - Destroy a floor plan
* `delete_network_group_policy` - Delete a group policy
* `delete_network_meraki_auth_user` - Deauthorize a user
* `delete_network_mqtt_broker` - Delete an MQTT broker
* `delete_network_pii_request` - Delete a restrict processing PII request
* `delete_network_sm_target_group` - Delete a target group from a network
* `delete_network_sm_user_access_device` - Delete a User Access Device
* `delete_network_switch_access_policy` - Delete an access policy for a switch network
* `delete_network_switch_link_aggregation` - Split a link aggregation group into separate ports
* `delete_network_switch_port_schedule` - Delete a switch port schedule
* `delete_network_switch_qos_rule` - Delete a quality of service rule
* `delete_network_switch_routing_multicast_rendezvous_point` - Delete a multicast rendezvous point
* `delete_network_switch_stack` - Delete a stack
* `delete_network_switch_stack_routing_interface` - Delete a layer 3 interface from a switch stack
* `delete_network_switch_stack_routing_static_route` - Delete a layer 3 static route for a switch stack
* `delete_network_webhooks_http_server` - Delete an HTTP server from a network
* `delete_network_wireless_rf_profile` - Delete a RF Profile
* `delete_network_wireless_ssid_identity_psk` - Delete an Identity PSK
* `delete_organization` - Delete an organization
* `delete_organization_action_batch` - Delete an action batch
* `delete_organization_adaptive_policy_acl` - Deletes the specified adaptive policy ACL
* `delete_organization_admin` - Revoke all access for a dashboard administrator within this organization
* `delete_organization_branding_policy` - Delete a branding policy
* `delete_organization_config_template` - Remove a configuration template
* `delete_organization_insight_monitored_media_server` - Delete a monitored media server from this organization
* `delete_organization_saml_idp` - Remove a SAML IdP in your organization.
* `delete_organization_saml_role` - Remove a SAML role
* `get_device` - Return a single device
* `get_device_camera_quality_and_retention` - Returns quality and retention settings for the given camera
* `get_device_camera_sense` - Returns sense settings for a given camera
* `get_device_camera_sense_object_detection_models` - Returns the MV Sense object detection model list for the given camera
* `get_device_camera_video_link` - Returns video link to the specified camera
* `get_device_camera_video_settings` - Returns video settings for the given camera
* `get_device_camera_wireless_profiles` - Returns wireless profile assigned to the given camera
* `get_device_cellular_gateway_lan` - Show the LAN Settings of a MG
* `get_device_cellular_gateway_port_forwarding_rules` - Returns the port forwarding rules for a single MG.
* `get_device_management_interface` - Return the management interface settings for a device
* `get_device_switch_port` - Return a switch port
* `get_device_switch_ports` - List the switch ports for a switch
* `get_device_switch_routing_interface` - Return a layer 3 interface for a switch
* `get_device_switch_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch
* `get_device_switch_routing_interfaces` - List layer 3 interfaces for a switch
* `get_device_switch_routing_static_route` - Return a layer 3 static route for a switch
* `get_device_switch_routing_static_routes` - List layer 3 static routes for a switch
* `get_device_switch_warm_spare` - Return warm spare configuration for a switch
* `get_device_wireless_bluetooth_settings` - Return the bluetooth settings for a wireless device
* `get_device_wireless_radio_settings` - Return the radio settings of a device
* `get_network` - Return a network
* `get_network_alerts_settings` - Return the alert configuration for this network
* `get_network_appliance_connectivity_monitoring_destinations` - Return the connectivity testing destinations for an MX network
* `get_network_appliance_content_filtering` - Return the content filtering settings for an MX network
* `get_network_appliance_content_filtering_categories` - List all available content filtering categories for an MX network
* `get_network_appliance_firewall_cellular_firewall_rules` - Return the cellular firewall rules for an MX network
* `get_network_appliance_firewall_firewalled_service` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `get_network_appliance_firewall_firewalled_services` - List the appliance services and their accessibility rules
* `get_network_appliance_firewall_inbound_firewall_rules` - Return the inbound firewall rules for an MX network
* `get_network_appliance_firewall_l3_firewall_rules` - Return the L3 firewall rules for an MX network
* `get_network_appliance_firewall_l7_firewall_rules` - List the MX L7 firewall rules for an MX network
* `get_network_appliance_firewall_l7_firewall_rules_application_categories` - Return the L7 firewall application categories and their associated applications for an MX network
* `get_network_appliance_firewall_one_to_many_nat_rules` - Return the 1:Many NAT mapping rules for an MX network
* `get_network_appliance_firewall_one_to_one_nat_rules` - Return the 1:1 NAT mapping rules for an MX network
* `get_network_appliance_firewall_port_forwarding_rules` - Return the port forwarding rules for an MX network
* `get_network_appliance_port` - Return per-port VLAN settings for a single MX port.
* `get_network_appliance_ports` - List per-port VLAN settings for all ports of a MX.
* `get_network_appliance_security_intrusion` - Returns all supported intrusion settings for an MX network
* `get_network_appliance_security_malware` - Returns all supported malware settings for an MX network
* `get_network_appliance_settings` - Return the appliance settings for a network
* `get_network_appliance_single_lan` - Return single LAN configuration
* `get_network_appliance_static_route` - Return a static route for an MX or teleworker network
* `get_network_appliance_static_routes` - List the static routes for an MX or teleworker network
* `get_network_appliance_traffic_shaping` - Display the traffic shaping settings for an MX network
* `get_network_appliance_traffic_shaping_custom_performance_class` - Return a custom performance class for an MX network
* `get_network_appliance_traffic_shaping_custom_performance_classes` - List all custom performance classes for an MX network
* `get_network_appliance_traffic_shaping_rules` - Display the traffic shaping settings rules for an MX network
* `get_network_appliance_traffic_shaping_uplink_bandwidth` - Returns the uplink bandwidth settings for your MX network.
* `get_network_appliance_traffic_shaping_uplink_selection` - Show uplink selection settings for an MX network
* `get_network_appliance_vlan` - Return a VLAN
* `get_network_appliance_vlans` - List the VLANs for an MX network
* `get_network_appliance_vlans_settings` - Returns the enabled status of VLANs for the network
* `get_network_appliance_vpn_bgp` - Return a Hub BGP Configuration
* `get_network_appliance_vpn_site_to_site_vpn` - Return the site-to-site VPN settings of a network
* `get_network_appliance_warm_spare` - Return MX warm spare settings
* `get_network_camera_quality_retention_profile` - Retrieve a single quality retention profile
* `get_network_camera_quality_retention_profiles` - List the quality retention profiles for this network
* `get_network_camera_schedules` - Returns a list of all camera recording schedules.
* `get_network_camera_wireless_profile` - Retrieve a single camera wireless profile.
* `get_network_camera_wireless_profiles` - List the camera wireless profiles for this network.
* `get_network_cellular_gateway_connectivity_monitoring_destinations` - Return the connectivity testing destinations for an MG network
* `get_network_cellular_gateway_dhcp` - List common DHCP settings of MGs
* `get_network_cellular_gateway_subnet_pool` - Return the subnet pool and mask configured for MGs in the network.
* `get_network_cellular_gateway_uplink` - Returns the uplink settings for your MG network.
* `get_network_client_policy` - Return the policy assigned to a client on the network
* `get_network_client_splash_authorization_status` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `get_network_devices` - List the devices in a network
* `get_network_firmware_upgrades` - Get firmware upgrade information for a network
* `get_network_floor_plan` - Find a floor plan by ID
* `get_network_floor_plans` - List the floor plans that belong to your network
* `get_network_group_policies` - List the group policies in a network
* `get_network_group_policy` - Display a group policy
* `get_network_meraki_auth_user` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `get_network_meraki_auth_users` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `get_network_mqtt_broker` - Return an MQTT broker
* `get_network_mqtt_brokers` - List the MQTT brokers for this network
* `get_network_netflow` - Return the NetFlow traffic reporting settings for a network
* `get_network_pii_pii_keys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `get_network_pii_request` - Return a PII request
* `get_network_pii_requests` - List the PII requests for this network or organization
* `get_network_pii_sm_devices_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `get_network_pii_sm_owners_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `get_network_settings` - Return the settings for a network
* `get_network_sm_bypass_activation_lock_attempt` - Bypass activation lock attempt status
* `get_network_sm_device_certs` - List the certs on a device
* `get_network_sm_device_device_profiles` - Get the profiles associated with a device
* `get_network_sm_device_network_adapters` - List the network adapters of a device
* `get_network_sm_device_restrictions` - List the restrictions on a device
* `get_network_sm_device_security_centers` - List the security centers on a device
* `get_network_sm_device_softwares` - Get a list of softwares associated with a device
* `get_network_sm_device_wlan_lists` - List the saved SSID names on a device
* `get_network_sm_devices` - List the devices enrolled in an SM network with various specified fields and filters
* `get_network_sm_profiles` - List all profiles in a network
* `get_network_sm_target_group` - Return a target group
* `get_network_sm_target_groups` - List the target groups in this network
* `get_network_sm_user_access_devices` - List User Access Devices and its Trusted Access Connections
* `get_network_sm_user_device_profiles` - Get the profiles associated with a user
* `get_network_sm_user_softwares` - Get a list of softwares associated with a user
* `get_network_sm_users` - List the owners in an SM network with various specified fields and filters
* `get_network_snmp` - Return the SNMP settings for a network
* `get_network_switch_access_control_lists` - Return the access control lists for a MS network
* `get_network_switch_access_policies` - List the access policies for a switch network
* `get_network_switch_access_policy` - Return a specific access policy for a switch network
* `get_network_switch_alternate_management_interface` - Return the switch alternate management interface for the network
* `get_network_switch_dhcp_server_policy` - Return the DHCP server policy
* `get_network_switch_dscp_to_cos_mappings` - Return the DSCP to CoS mappings
* `get_network_switch_link_aggregations` - List link aggregation groups
* `get_network_switch_mtu` - Return the MTU configuration
* `get_network_switch_port_schedules` - List switch port schedules
* `get_network_switch_qos_rule` - Return a quality of service rule
* `get_network_switch_qos_rules` - List quality of service rules
* `get_network_switch_qos_rules_order` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `get_network_switch_routing_multicast` - Return multicast settings for a network
* `get_network_switch_routing_multicast_rendezvous_point` - Return a multicast rendezvous point
* `get_network_switch_routing_multicast_rendezvous_points` - List multicast rendezvous points
* `get_network_switch_routing_ospf` - Return layer 3 OSPF routing configuration
* `get_network_switch_settings` - Returns the switch network settings
* `get_network_switch_stack` - Show a switch stack
* `get_network_switch_stack_routing_interface` - Return a layer 3 interface from a switch stack
* `get_network_switch_stack_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `get_network_switch_stack_routing_interfaces` - List layer 3 interfaces for a switch stack
* `get_network_switch_stack_routing_static_route` - Return a layer 3 static route for a switch stack
* `get_network_switch_stack_routing_static_routes` - List layer 3 static routes for a switch stack
* `get_network_switch_stacks` - List the switch stacks in a network
* `get_network_switch_storm_control` - Return the storm control configuration for a switch network
* `get_network_switch_stp` - Returns STP settings
* `get_network_syslog_servers` - List the syslog servers for a network
* `get_network_traffic_analysis` - Return the traffic analysis settings for a network
* `get_network_traffic_shaping_application_categories` - Returns the application categories for traffic shaping rules.
* `get_network_traffic_shaping_dscp_tagging_options` - Returns the available DSCP tagging options for your traffic shaping rules.
* `get_network_webhooks_http_server` - Return an HTTP server for a network
* `get_network_webhooks_http_servers` - List the HTTP servers for a network
* `get_network_webhooks_webhook_test` - Return the status of a webhook test for a network
* `get_network_wireless_alternate_management_interface` - Return alternate management interface and devices with IP assigned
* `get_network_wireless_billing` - Return the billing settings of this network
* `get_network_wireless_bluetooth_settings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `get_network_wireless_rf_profile` - Return a RF profile
* `get_network_wireless_rf_profiles` - List the non-basic RF profiles for this network
* `get_network_wireless_settings` - Return the wireless settings for a network
* `get_network_wireless_ssid` - Return a single MR SSID
* `get_network_wireless_ssid_bonjour_forwarding` - List the Bonjour forwarding setting and rules for the SSID
* `get_network_wireless_ssid_device_type_group_policies` - List the device type group policies for the SSID
* `get_network_wireless_ssid_eap_override` - Return the EAP overridden parameters for an SSID
* `get_network_wireless_ssid_firewall_l3_firewall_rules` - Return the L3 firewall rules for an SSID on an MR network
* `get_network_wireless_ssid_firewall_l7_firewall_rules` - Return the L7 firewall rules for an SSID on an MR network
* `get_network_wireless_ssid_hotspot20` - Return the Hotspot 2.0 settings for an SSID
* `get_network_wireless_ssid_identity_psk` - Return an Identity PSK
* `get_network_wireless_ssid_identity_psks` - List all Identity PSKs in a wireless network
* `get_network_wireless_ssid_schedules` - List the outage schedule for the SSID
* `get_network_wireless_ssid_splash_settings` - Display the splash page settings for the given SSID
* `get_network_wireless_ssid_traffic_shaping_rules` - Display the traffic shaping settings for a SSID on an MR network
* `get_network_wireless_ssid_vpn` - List the VPN settings for the SSID.
* `get_network_wireless_ssids` - List the MR SSIDs in a network
* `get_organization` - Return an organization
* `get_organization_action_batch` - Return an action batch
* `get_organization_action_batches` - Return the list of action batches in the organization
* `get_organization_adaptive_policy_acl` - Returns the adaptive policy ACL information
* `get_organization_adaptive_policy_acls` - List adaptive policy ACLs in a organization
* `get_organization_adaptive_policy_settings` - Returns global adaptive policy settings in an organization
* `get_organization_admins` - List the dashboard administrators in this organization
* `get_organization_appliance_security_intrusion` - Returns all supported intrusion settings for an organization
* `get_organization_appliance_vpn_third_party_vpn_peers` - Return the third party VPN peers for an organization
* `get_organization_appliance_vpn_vpn_firewall_rules` - Return the firewall rules for an organization's site-to-site VPN
* `get_organization_branding_policies` - List the branding policies of an organization
* `get_organization_branding_policies_priorities` - Return the branding policy IDs of an organization in priority order
* `get_organization_branding_policy` - Return a branding policy
* `get_organization_camera_onboarding_statuses` - Fetch onboarding status of cameras
* `get_organization_config_template` - Return a single configuration template
* `get_organization_config_template_switch_profile_port` - Return a switch profile port
* `get_organization_config_template_switch_profile_ports` - Return all the ports of a switch profile
* `get_organization_config_template_switch_profiles` - List the switch profiles for your switch template configuration
* `get_organization_config_templates` - List the configuration templates for this organization
* `get_organization_devices` - List the devices in an organization
* `get_organization_insight_applications` - List all Insight tracked applications
* `get_organization_insight_monitored_media_server` - Return a monitored media server for this organization
* `get_organization_insight_monitored_media_servers` - List the monitored media servers for this organization
* `get_organization_inventory_device` - Return a single device from the inventory of an organization
* `get_organization_inventory_devices` - Return the device inventory for an organization
* `get_organization_license` - Display a license
* `get_organization_licenses` - List the licenses for an organization
* `get_organization_login_security` - Returns the login security settings for an organization.
* `get_organization_networks` - List the networks that the user has privileges on in an organization
* `get_organization_saml` - Returns the SAML SSO enabled settings for an organization.
* `get_organization_saml_idp` - Get a SAML IdP from your organization.
* `get_organization_saml_idps` - List the SAML IdPs in your organization.
* `get_organization_saml_role` - Return a SAML role
* `get_organization_saml_roles` - List the SAML roles for this organization
* `get_organization_sm_apns_cert` - Get the organization's APNS certificate
* `get_organization_sm_vpp_account` - Get a hash containing the unparsed token of the VPP account with the given ID
* `get_organization_sm_vpp_accounts` - List the VPP accounts in the organization
* `get_organization_snmp` - Return the SNMP settings for an organization
* `get_organizations` - List the organizations that the user has privileges on
* `lock_network_sm_devices` - Lock a set of devices
* `modify_network_sm_devices_tags` - Add, delete, or update the tags of a set of devices
* `move_network_sm_devices` - Move a set of devices to a new network
* `move_organization_licenses` - Move licenses to another organization
* `move_organization_licenses_seats` - Move SM seats to another organization
* `provision_network_clients` - Provisions a client with a name and policy
* `refresh_network_sm_device_details` - Refresh the details of a device
* `remove_network_devices` - Remove a single device
* `remove_network_switch_stack` - Remove a switch from a stack
* `renew_organization_licenses_seats` - Renew SM seats of a license
* `split_network` - Split a combined network into individual networks for each type of device
* `swap_network_appliance_warm_spare` - Swap MX primary and warm spare appliances
* `unbind_network` - Unbind a network from a template.
* `unenroll_network_sm_device` - Unenroll a device
* `update_device` - Update the attributes of a device
* `update_device_camera_quality_and_retention` - Update quality and retention settings for the given camera
* `update_device_camera_sense` - Update sense settings for the given camera
* `update_device_camera_video_settings` - Update video settings for the given camera
* `update_device_camera_wireless_profiles` - Assign wireless profiles to the given camera
* `update_device_cellular_gateway_lan` - Update the LAN Settings for a single MG.
* `update_device_cellular_gateway_port_forwarding_rules` - Updates the port forwarding rules for a single MG.
* `update_device_management_interface` - Update the management interface settings for a device
* `update_device_switch_port` - Update a switch port
* `update_device_switch_routing_interface` - Update a layer 3 interface for a switch
* `update_device_switch_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch
* `update_device_switch_routing_static_route` - Update a layer 3 static route for a switch
* `update_device_switch_warm_spare` - Update warm spare configuration for a switch
* `update_device_wireless_bluetooth_settings` - Update the bluetooth settings for a wireless device
* `update_device_wireless_radio_settings` - Update the radio settings of a device
* `update_network` - Update a network
* `update_network_alerts_settings` - Update the alert configuration for this network
* `update_network_appliance_connectivity_monitoring_destinations` - Update the connectivity testing destinations for an MX network
* `update_network_appliance_content_filtering` - Update the content filtering settings for an MX network
* `update_network_appliance_firewall_cellular_firewall_rules` - Update the cellular firewall rules of an MX network
* `update_network_appliance_firewall_firewalled_service` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `update_network_appliance_firewall_inbound_firewall_rules` - Update the inbound firewall rules of an MX network
* `update_network_appliance_firewall_l3_firewall_rules` - Update the L3 firewall rules of an MX network
* `update_network_appliance_firewall_l7_firewall_rules` - Update the MX L7 firewall rules for an MX network
* `update_network_appliance_firewall_one_to_many_nat_rules` - Set the 1:Many NAT mapping rules for an MX network
* `update_network_appliance_firewall_one_to_one_nat_rules` - Set the 1:1 NAT mapping rules for an MX network
* `update_network_appliance_firewall_port_forwarding_rules` - Update the port forwarding rules for an MX network
* `update_network_appliance_port` - Update the per-port VLAN settings for a single MX port.
* `update_network_appliance_security_intrusion` - Set the supported intrusion settings for an MX network
* `update_network_appliance_security_malware` - Set the supported malware settings for an MX network
* `update_network_appliance_single_lan` - Update single LAN configuration
* `update_network_appliance_static_route` - Update a static route for an MX or teleworker network
* `update_network_appliance_traffic_shaping` - Update the traffic shaping settings for an MX network
* `update_network_appliance_traffic_shaping_custom_performance_class` - Update a custom performance class for an MX network
* `update_network_appliance_traffic_shaping_rules` - Update the traffic shaping settings rules for an MX network
* `update_network_appliance_traffic_shaping_uplink_bandwidth` - Updates the uplink bandwidth settings for your MX network.
* `update_network_appliance_traffic_shaping_uplink_selection` - Update uplink selection settings for an MX network
* `update_network_appliance_vlan` - Update a VLAN
* `update_network_appliance_vlans_settings` - Enable/Disable VLANs for the given network
* `update_network_appliance_vpn_bgp` - Update a Hub BGP Configuration
* `update_network_appliance_vpn_site_to_site_vpn` - Update the site-to-site VPN settings of a network
* `update_network_appliance_warm_spare` - Update MX warm spare settings
* `update_network_camera_quality_retention_profile` - Update an existing quality retention profile for this network.
* `update_network_camera_wireless_profile` - Update an existing camera wireless profile in this network.
* `update_network_cellular_gateway_connectivity_monitoring_destinations` - Update the connectivity testing destinations for an MG network
* `update_network_cellular_gateway_dhcp` - Update common DHCP settings of MGs
* `update_network_cellular_gateway_subnet_pool` - Update the subnet pool and mask configuration for MGs in the network.
* `update_network_cellular_gateway_uplink` - Updates the uplink settings for your MG network.
* `update_network_client_policy` - Update the policy assigned to a client on the network
* `update_network_client_splash_authorization_status` - Update a client's splash authorization
* `update_network_firmware_upgrades` - Update firmware upgrade information for a network
* `update_network_floor_plan` - Update a floor plan's geolocation and other meta data
* `update_network_group_policy` - Update a group policy
* `update_network_meraki_auth_user` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `update_network_mqtt_broker` - Update an MQTT broker
* `update_network_netflow` - Update the NetFlow traffic reporting settings for a network
* `update_network_settings` - Update the settings for a network
* `update_network_sm_devices_fields` - Modify the fields of a device
* `update_network_sm_target_group` - Update a target group
* `update_network_snmp` - Update the SNMP settings for a network
* `update_network_switch_access_control_lists` - Update the access control lists for a MS network
* `update_network_switch_access_policy` - Update an access policy for a switch network
* `update_network_switch_alternate_management_interface` - Update the switch alternate management interface for the network
* `update_network_switch_dhcp_server_policy` - Update the DHCP server policy
* `update_network_switch_dscp_to_cos_mappings` - Update the DSCP to CoS mappings
* `update_network_switch_link_aggregation` - Update a link aggregation group
* `update_network_switch_mtu` - Update the MTU configuration
* `update_network_switch_port_schedule` - Update a switch port schedule
* `update_network_switch_qos_rule` - Update a quality of service rule
* `update_network_switch_qos_rules_order` - Update the order in which the rules should be processed by the switch
* `update_network_switch_routing_multicast` - Update multicast settings for a network
* `update_network_switch_routing_multicast_rendezvous_point` - Update a multicast rendezvous point
* `update_network_switch_routing_ospf` - Update layer 3 OSPF routing configuration
* `update_network_switch_settings` - Update switch network settings
* `update_network_switch_stack_routing_interface` - Update a layer 3 interface for a switch stack
* `update_network_switch_stack_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `update_network_switch_stack_routing_static_route` - Update a layer 3 static route for a switch stack
* `update_network_switch_storm_control` - Update the storm control configuration for a switch network
* `update_network_switch_stp` - Updates STP settings
* `update_network_syslog_servers` - Update the syslog servers for a network
* `update_network_traffic_analysis` - Update the traffic analysis settings for a network
* `update_network_webhooks_http_server` - Update an HTTP server
* `update_network_wireless_alternate_management_interface` - Update alternate management interface and device static IP
* `update_network_wireless_billing` - Update the billing settings
* `update_network_wireless_bluetooth_settings` - Update the Bluetooth settings for a network
* `update_network_wireless_rf_profile` - Updates specified RF profile for this network
* `update_network_wireless_settings` - Update the wireless settings for a network
* `update_network_wireless_ssid` - Update the attributes of an MR SSID
* `update_network_wireless_ssid_bonjour_forwarding` - Update the bonjour forwarding setting and rules for the SSID
* `update_network_wireless_ssid_device_type_group_policies` - Update the device type group policies for the SSID
* `update_network_wireless_ssid_eap_override` - Update the EAP overridden parameters for an SSID.
* `update_network_wireless_ssid_firewall_l3_firewall_rules` - Update the L3 firewall rules of an SSID on an MR network
* `update_network_wireless_ssid_firewall_l7_firewall_rules` - Update the L7 firewall rules of an SSID on an MR network
* `update_network_wireless_ssid_hotspot20` - Update the Hotspot 2.0 settings of an SSID
* `update_network_wireless_ssid_identity_psk` - Update an Identity PSK
* `update_network_wireless_ssid_schedules` - Update the outage schedule for the SSID
* `update_network_wireless_ssid_splash_settings` - Modify the splash page settings for the given SSID
* `update_network_wireless_ssid_traffic_shaping_rules` - Update the traffic shaping settings for an SSID on an MR network
* `update_network_wireless_ssid_vpn` - Update the VPN settings for the SSID
* `update_organization` - Update an organization
* `update_organization_action_batch` - Update an action batch
* `update_organization_adaptive_policy_acl` - Updates an adaptive policy ACL
* `update_organization_adaptive_policy_settings` - Update global adaptive policy settings
* `update_organization_admin` - Update an administrator
* `update_organization_appliance_security_intrusion` - Sets supported intrusion settings for an organization
* `update_organization_appliance_vpn_third_party_vpn_peers` - Update the third party VPN peers for an organization
* `update_organization_appliance_vpn_vpn_firewall_rules` - Update the firewall rules of an organization's site-to-site VPN
* `update_organization_branding_policies_priorities` - Update the priority ordering of an organization's branding policies.
* `update_organization_branding_policy` - Update a branding policy
* `update_organization_camera_onboarding_statuses` - Notify that credential handoff to camera has completed
* `update_organization_config_template` - Update a configuration template
* `update_organization_config_template_switch_profile_port` - Update a switch profile port
* `update_organization_insight_monitored_media_server` - Update a monitored media server for this organization
* `update_organization_license` - Update a license
* `update_organization_login_security` - Update the login security settings for an organization
* `update_organization_saml` - Updates the SAML SSO enabled settings for an organization.
* `update_organization_saml_idp` - Update a SAML IdP in your organization
* `update_organization_saml_role` - Update a SAML role
* `update_organization_snmp` - Update the SNMP settings for an organization
* `wipe_network_sm_devices` - Wipe a device

### connectionStats

* `get_device_wireless_connection_stats` - Aggregated connectivity info for a given AP on this network
* `get_network_wireless_client_connection_stats` - Aggregated connectivity info for a given client on this network
* `get_network_wireless_clients_connection_stats` - Aggregated connectivity info for this network, grouped by clients
* `get_network_wireless_connection_stats` - Aggregated connectivity info for this network
* `get_network_wireless_devices_connection_stats` - Aggregated connectivity info for this network, grouped by node

### connectivity

* `get_network_sm_device_connectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### connectivityEvents

* `get_network_wireless_client_connectivity_events` - List the wireless connectivity events for a client within a network in the timespan.

### connectivityMonitoringDestinations

* `get_network_appliance_connectivity_monitoring_destinations` - Return the connectivity testing destinations for an MX network
* `get_network_cellular_gateway_connectivity_monitoring_destinations` - Return the connectivity testing destinations for an MG network
* `update_network_appliance_connectivity_monitoring_destinations` - Update the connectivity testing destinations for an MX network
* `update_network_cellular_gateway_connectivity_monitoring_destinations` - Update the connectivity testing destinations for an MG network

### contentFiltering

* `get_network_appliance_content_filtering` - Return the content filtering settings for an MX network
* `get_network_appliance_content_filtering_categories` - List all available content filtering categories for an MX network
* `update_network_appliance_content_filtering` - Update the content filtering settings for an MX network

### customPerformanceClasses

* `create_network_appliance_traffic_shaping_custom_performance_class` - Add a custom performance class for an MX network
* `delete_network_appliance_traffic_shaping_custom_performance_class` - Delete a custom performance class from an MX network
* `get_network_appliance_traffic_shaping_custom_performance_class` - Return a custom performance class for an MX network
* `get_network_appliance_traffic_shaping_custom_performance_classes` - List all custom performance classes for an MX network
* `update_network_appliance_traffic_shaping_custom_performance_class` - Update a custom performance class for an MX network

### dataRateHistory

* `get_network_wireless_data_rate_history` - Return PHY data rates over time for a network, device, or network client

### desktopLogs

* `get_network_sm_device_desktop_logs` - Return historical records of various Systems Manager network connection details for desktop devices.

### deviceCommandLogs

* `get_network_sm_device_device_command_logs` - Return historical records of commands sent to Systems Manager devices

### deviceProfiles

* `get_network_sm_device_device_profiles` - Get the profiles associated with a device
* `get_network_sm_user_device_profiles` - Get the profiles associated with a user

### deviceTypeGroupPolicies

* `get_network_wireless_ssid_device_type_group_policies` - List the device type group policies for the SSID
* `update_network_wireless_ssid_device_type_group_policies` - Update the device type group policies for the SSID

### devices

* `blink_device_leds` - Blink the LEDs on a device
* `checkin_network_sm_devices` - Force check-in a set of devices
* `claim_network_devices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `clone_organization_switch_devices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `get_device` - Return a single device
* `get_device_clients` - List the clients of a device, up to a maximum of a month ago
* `get_device_lldp_cdp` - List LLDP and CDP information for a device
* `get_device_loss_and_latency_history` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `get_device_management_interface` - Return the management interface settings for a device
* `get_network_devices` - List the devices in a network
* `get_network_sm_device_cellular_usage_history` - Return the client's daily cellular data usage history
* `get_network_sm_device_certs` - List the certs on a device
* `get_network_sm_device_connectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `get_network_sm_device_desktop_logs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `get_network_sm_device_device_command_logs` - Return historical records of commands sent to Systems Manager devices
* `get_network_sm_device_device_profiles` - Get the profiles associated with a device
* `get_network_sm_device_network_adapters` - List the network adapters of a device
* `get_network_sm_device_performance_history` - Return historical records of various Systems Manager client metrics for desktop devices.
* `get_network_sm_device_restrictions` - List the restrictions on a device
* `get_network_sm_device_security_centers` - List the security centers on a device
* `get_network_sm_device_softwares` - Get a list of softwares associated with a device
* `get_network_sm_device_wlan_lists` - List the saved SSID names on a device
* `get_network_sm_devices` - List the devices enrolled in an SM network with various specified fields and filters
* `get_network_wireless_devices_connection_stats` - Aggregated connectivity info for this network, grouped by node
* `get_network_wireless_devices_latency_stats` - Aggregated latency info for this network, grouped by node
* `get_organization_devices` - List the devices in an organization
* `get_organization_devices_statuses` - List the status of every Meraki device in the organization
* `get_organization_devices_uplinks_loss_and_latency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `lock_network_sm_devices` - Lock a set of devices
* `modify_network_sm_devices_tags` - Add, delete, or update the tags of a set of devices
* `move_network_sm_devices` - Move a set of devices to a new network
* `reboot_device` - Reboot a device
* `refresh_network_sm_device_details` - Refresh the details of a device
* `remove_network_devices` - Remove a single device
* `unenroll_network_sm_device` - Unenroll a device
* `update_device` - Update the attributes of a device
* `update_device_management_interface` - Update the management interface settings for a device
* `update_network_sm_devices_fields` - Modify the fields of a device
* `wipe_network_sm_devices` - Wipe a device

### dhcp

* `get_device_appliance_dhcp_subnets` - Return the DHCP subnet information for an appliance
* `get_device_switch_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch
* `get_network_cellular_gateway_dhcp` - List common DHCP settings of MGs
* `get_network_switch_stack_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `update_device_switch_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch
* `update_network_cellular_gateway_dhcp` - Update common DHCP settings of MGs
* `update_network_switch_stack_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### dhcpServerPolicy

* `get_network_switch_dhcp_server_policy` - Return the DHCP server policy
* `update_network_switch_dhcp_server_policy` - Update the DHCP server policy

### dscpTaggingOptions

* `get_network_traffic_shaping_dscp_tagging_options` - Returns the available DSCP tagging options for your traffic shaping rules.

### dscpToCosMappings

* `get_network_switch_dscp_to_cos_mappings` - Return the DSCP to CoS mappings
* `update_network_switch_dscp_to_cos_mappings` - Update the DSCP to CoS mappings

### eapOverride

* `get_network_wireless_ssid_eap_override` - Return the EAP overridden parameters for an SSID
* `update_network_wireless_ssid_eap_override` - Update the EAP overridden parameters for an SSID.

### eventTypes

* `get_network_events_event_types` - List the event type to human-readable description

### events

* `get_network_appliance_client_security_events` - List the security events for a client
* `get_network_appliance_security_events` - List the security events for a network
* `get_network_events` - List the events for the network
* `get_network_events_event_types` - List the event type to human-readable description
* `get_organization_appliance_security_events` - List the security events for an organization

### failedConnections

* `get_network_wireless_failed_connections` - List of all failed client connection events on this network in a given time range

### fields

* `update_network_sm_devices_fields` - Modify the fields of a device

### firewall

* `get_network_appliance_firewall_cellular_firewall_rules` - Return the cellular firewall rules for an MX network
* `get_network_appliance_firewall_firewalled_service` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `get_network_appliance_firewall_firewalled_services` - List the appliance services and their accessibility rules
* `get_network_appliance_firewall_inbound_firewall_rules` - Return the inbound firewall rules for an MX network
* `get_network_appliance_firewall_l3_firewall_rules` - Return the L3 firewall rules for an MX network
* `get_network_appliance_firewall_l7_firewall_rules` - List the MX L7 firewall rules for an MX network
* `get_network_appliance_firewall_l7_firewall_rules_application_categories` - Return the L7 firewall application categories and their associated applications for an MX network
* `get_network_appliance_firewall_one_to_many_nat_rules` - Return the 1:Many NAT mapping rules for an MX network
* `get_network_appliance_firewall_one_to_one_nat_rules` - Return the 1:1 NAT mapping rules for an MX network
* `get_network_appliance_firewall_port_forwarding_rules` - Return the port forwarding rules for an MX network
* `get_network_wireless_ssid_firewall_l3_firewall_rules` - Return the L3 firewall rules for an SSID on an MR network
* `get_network_wireless_ssid_firewall_l7_firewall_rules` - Return the L7 firewall rules for an SSID on an MR network
* `update_network_appliance_firewall_cellular_firewall_rules` - Update the cellular firewall rules of an MX network
* `update_network_appliance_firewall_firewalled_service` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `update_network_appliance_firewall_inbound_firewall_rules` - Update the inbound firewall rules of an MX network
* `update_network_appliance_firewall_l3_firewall_rules` - Update the L3 firewall rules of an MX network
* `update_network_appliance_firewall_l7_firewall_rules` - Update the MX L7 firewall rules for an MX network
* `update_network_appliance_firewall_one_to_many_nat_rules` - Set the 1:Many NAT mapping rules for an MX network
* `update_network_appliance_firewall_one_to_one_nat_rules` - Set the 1:1 NAT mapping rules for an MX network
* `update_network_appliance_firewall_port_forwarding_rules` - Update the port forwarding rules for an MX network
* `update_network_wireless_ssid_firewall_l3_firewall_rules` - Update the L3 firewall rules of an SSID on an MR network
* `update_network_wireless_ssid_firewall_l7_firewall_rules` - Update the L7 firewall rules of an SSID on an MR network

### firewalledServices

* `get_network_appliance_firewall_firewalled_service` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `get_network_appliance_firewall_firewalled_services` - List the appliance services and their accessibility rules
* `update_network_appliance_firewall_firewalled_service` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### firmwareUpgrades

* `create_network_firmware_upgrades_rollback` - Rollback a Firmware Upgrade For A Network
* `get_network_firmware_upgrades` - Get firmware upgrade information for a network
* `update_network_firmware_upgrades` - Update firmware upgrade information for a network

### floorPlans

* `create_network_floor_plan` - Upload a floor plan
* `delete_network_floor_plan` - Destroy a floor plan
* `get_network_floor_plan` - Find a floor plan by ID
* `get_network_floor_plans` - List the floor plans that belong to your network
* `update_network_floor_plan` - Update a floor plan's geolocation and other meta data

### groupPolicies

* `create_network_group_policy` - Create a group policy
* `delete_network_group_policy` - Delete a group policy
* `get_network_group_policies` - List the group policies in a network
* `get_network_group_policy` - Display a group policy
* `update_network_group_policy` - Update a group policy

### healthByTime

* `get_network_insight_application_health_by_time` - Get application health by time

### history

* `get_device_camera_analytics_zone_history` - Return historical records for analytic zones

### hotspot20

* `get_network_wireless_ssid_hotspot20` - Return the Hotspot 2.0 settings for an SSID
* `update_network_wireless_ssid_hotspot20` - Update the Hotspot 2.0 settings of an SSID

### httpServers

* `create_network_webhooks_http_server` - Add an HTTP server to a network
* `delete_network_webhooks_http_server` - Delete an HTTP server from a network
* `get_network_webhooks_http_server` - Return an HTTP server for a network
* `get_network_webhooks_http_servers` - List the HTTP servers for a network
* `update_network_webhooks_http_server` - Update an HTTP server

### identityPsks

* `create_network_wireless_ssid_identity_psk` - Create an Identity PSK
* `delete_network_wireless_ssid_identity_psk` - Delete an Identity PSK
* `get_network_wireless_ssid_identity_psk` - Return an Identity PSK
* `get_network_wireless_ssid_identity_psks` - List all Identity PSKs in a wireless network
* `update_network_wireless_ssid_identity_psk` - Update an Identity PSK

### idps

* `create_organization_saml_idp` - Create a SAML IdP for your organization.
* `delete_organization_saml_idp` - Remove a SAML IdP in your organization.
* `get_organization_saml_idp` - Get a SAML IdP from your organization.
* `get_organization_saml_idps` - List the SAML IdPs in your organization.
* `update_organization_saml_idp` - Update a SAML IdP in your organization

### inboundFirewallRules

* `get_network_appliance_firewall_inbound_firewall_rules` - Return the inbound firewall rules for an MX network
* `update_network_appliance_firewall_inbound_firewall_rules` - Update the inbound firewall rules of an MX network

### insight

* `create_organization_insight_monitored_media_server` - Add a media server to be monitored for this organization
* `delete_organization_insight_monitored_media_server` - Delete a monitored media server from this organization
* `get_network_insight_application_health_by_time` - Get application health by time
* `get_organization_insight_applications` - List all Insight tracked applications
* `get_organization_insight_monitored_media_server` - Return a monitored media server for this organization
* `get_organization_insight_monitored_media_servers` - List the monitored media servers for this organization
* `update_organization_insight_monitored_media_server` - Update a monitored media server for this organization

### interfaces

* `create_device_switch_routing_interface` - Create a layer 3 interface for a switch
* `create_network_switch_stack_routing_interface` - Create a layer 3 interface for a switch stack
* `delete_device_switch_routing_interface` - Delete a layer 3 interface from the switch
* `delete_network_switch_stack_routing_interface` - Delete a layer 3 interface from a switch stack
* `get_device_switch_routing_interface` - Return a layer 3 interface for a switch
* `get_device_switch_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch
* `get_device_switch_routing_interfaces` - List layer 3 interfaces for a switch
* `get_network_switch_stack_routing_interface` - Return a layer 3 interface from a switch stack
* `get_network_switch_stack_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `get_network_switch_stack_routing_interfaces` - List layer 3 interfaces for a switch stack
* `update_device_switch_routing_interface` - Update a layer 3 interface for a switch
* `update_device_switch_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch
* `update_network_switch_stack_routing_interface` - Update a layer 3 interface for a switch stack
* `update_network_switch_stack_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### intrusion

* `get_network_appliance_security_intrusion` - Returns all supported intrusion settings for an MX network
* `get_organization_appliance_security_intrusion` - Returns all supported intrusion settings for an organization
* `update_network_appliance_security_intrusion` - Set the supported intrusion settings for an MX network
* `update_organization_appliance_security_intrusion` - Sets supported intrusion settings for an organization

### inventoryDevices

* `get_organization_inventory_device` - Return a single device from the inventory of an organization
* `get_organization_inventory_devices` - Return the device inventory for an organization

### l3FirewallRules

* `get_network_appliance_firewall_l3_firewall_rules` - Return the L3 firewall rules for an MX network
* `get_network_wireless_ssid_firewall_l3_firewall_rules` - Return the L3 firewall rules for an SSID on an MR network
* `update_network_appliance_firewall_l3_firewall_rules` - Update the L3 firewall rules of an MX network
* `update_network_wireless_ssid_firewall_l3_firewall_rules` - Update the L3 firewall rules of an SSID on an MR network

### l7FirewallRules

* `get_network_appliance_firewall_l7_firewall_rules` - List the MX L7 firewall rules for an MX network
* `get_network_appliance_firewall_l7_firewall_rules_application_categories` - Return the L7 firewall application categories and their associated applications for an MX network
* `get_network_wireless_ssid_firewall_l7_firewall_rules` - Return the L7 firewall rules for an SSID on an MR network
* `update_network_appliance_firewall_l7_firewall_rules` - Update the MX L7 firewall rules for an MX network
* `update_network_wireless_ssid_firewall_l7_firewall_rules` - Update the L7 firewall rules of an SSID on an MR network

### lan

* `get_device_cellular_gateway_lan` - Show the LAN Settings of a MG
* `update_device_cellular_gateway_lan` - Update the LAN Settings for a single MG.

### latencyHistory

* `get_network_wireless_client_latency_history` - Return the latency history for a client
* `get_network_wireless_latency_history` - Return average wireless latency over time for a network, device, or network client

### latencyStats

* `get_device_wireless_latency_stats` - Aggregated latency info for a given AP on this network
* `get_network_wireless_client_latency_stats` - Aggregated latency info for a given client on this network
* `get_network_wireless_clients_latency_stats` - Aggregated latency info for this network, grouped by clients
* `get_network_wireless_devices_latency_stats` - Aggregated latency info for this network, grouped by node
* `get_network_wireless_latency_stats` - Aggregated latency info for this network

### licenses

* `assign_organization_licenses_seats` - Assign SM seats to a network
* `get_organization_license` - Display a license
* `get_organization_licenses` - List the licenses for an organization
* `get_organization_licenses_overview` - Return an overview of the license state for an organization
* `move_organization_licenses` - Move licenses to another organization
* `move_organization_licenses_seats` - Move SM seats to another organization
* `renew_organization_licenses_seats` - Renew SM seats of a license
* `update_organization_license` - Update a license

### linkAggregations

* `create_network_switch_link_aggregation` - Create a link aggregation group
* `delete_network_switch_link_aggregation` - Split a link aggregation group into separate ports
* `get_network_switch_link_aggregations` - List link aggregation groups
* `update_network_switch_link_aggregation` - Update a link aggregation group

### live

* `get_device_camera_analytics_live` - Returns live state from camera of analytics zones

### liveTools

* `blink_device_leds` - Blink the LEDs on a device
* `cycle_device_switch_ports` - Cycle a set of switch ports
* `reboot_device` - Reboot a device

### lldpCdp

* `get_device_lldp_cdp` - List LLDP and CDP information for a device

### loginSecurity

* `get_organization_login_security` - Returns the login security settings for an organization.
* `update_organization_login_security` - Update the login security settings for an organization

### logs

* `get_organization_webhooks_logs` - Return the log of webhook POSTs sent

### lossAndLatencyHistory

* `get_device_loss_and_latency_history` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### malware

* `get_network_appliance_security_malware` - Returns all supported malware settings for an MX network
* `update_network_appliance_security_malware` - Set the supported malware settings for an MX network

### managementInterface

* `get_device_management_interface` - Return the management interface settings for a device
* `update_device_management_interface` - Update the management interface settings for a device

### merakiAuthUsers

* `create_network_meraki_auth_user` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `delete_network_meraki_auth_user` - Deauthorize a user
* `get_network_meraki_auth_user` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `get_network_meraki_auth_users` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `update_network_meraki_auth_user` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### meshStatuses

* `get_network_wireless_mesh_statuses` - List wireless mesh statuses for repeaters

### monitor

* `generate_device_camera_snapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `get_device_appliance_dhcp_subnets` - Return the DHCP subnet information for an appliance
* `get_device_appliance_performance` - Return the performance score for a single MX
* `get_device_camera_analytics_live` - Returns live state from camera of analytics zones
* `get_device_camera_analytics_overview` - Returns an overview of aggregate analytics data for a timespan
* `get_device_camera_analytics_recent` - Returns most recent record for analytics zones
* `get_device_camera_analytics_zone_history` - Return historical records for analytic zones
* `get_device_camera_analytics_zones` - Returns all configured analytic zones for this camera
* `get_device_clients` - List the clients of a device, up to a maximum of a month ago
* `get_device_lldp_cdp` - List LLDP and CDP information for a device
* `get_device_loss_and_latency_history` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `get_device_switch_ports_statuses` - Return the status for all the ports of a switch
* `get_device_switch_ports_statuses_packets` - Return the packet counters for all the ports of a switch
* `get_device_wireless_connection_stats` - Aggregated connectivity info for a given AP on this network
* `get_device_wireless_latency_stats` - Aggregated latency info for a given AP on this network
* `get_device_wireless_status` - Return the SSID statuses of an access point
* `get_network_appliance_client_security_events` - List the security events for a client
* `get_network_appliance_security_events` - List the security events for a network
* `get_network_appliance_uplinks_usage_history` - Get the sent and received bytes for each uplink of a network.
* `get_network_bluetooth_client` - Return a Bluetooth client
* `get_network_bluetooth_clients` - List the Bluetooth clients seen by APs in this network
* `get_network_client` - Return the client associated with the given identifier
* `get_network_client_traffic_history` - Return the client's network traffic data over time
* `get_network_client_usage_history` - Return the client's daily usage history
* `get_network_clients` - List the clients that have used this network in the timespan
* `get_network_clients_application_usage` - Return the application usage data for clients
* `get_network_clients_overview` - Return overview statistics for network clients
* `get_network_clients_usage_histories` - Return the usage histories for clients
* `get_network_events` - List the events for the network
* `get_network_events_event_types` - List the event type to human-readable description
* `get_network_insight_application_health_by_time` - Get application health by time
* `get_network_network_health_channel_utilization` - Get the channel utilization over each radio for all APs in a network.
* `get_network_sm_device_cellular_usage_history` - Return the client's daily cellular data usage history
* `get_network_sm_device_connectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `get_network_sm_device_desktop_logs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `get_network_sm_device_device_command_logs` - Return historical records of commands sent to Systems Manager devices
* `get_network_sm_device_performance_history` - Return historical records of various Systems Manager client metrics for desktop devices.
* `get_network_splash_login_attempts` - List the splash login attempts for a network
* `get_network_traffic` - Return the traffic analysis data for this network
* `get_network_wireless_air_marshal` - List Air Marshal scan results from a network
* `get_network_wireless_channel_utilization_history` - Return AP channel utilization over time for a device or network client
* `get_network_wireless_client_connection_stats` - Aggregated connectivity info for a given client on this network
* `get_network_wireless_client_connectivity_events` - List the wireless connectivity events for a client within a network in the timespan.
* `get_network_wireless_client_count_history` - Return wireless client counts over time for a network, device, or network client
* `get_network_wireless_client_latency_history` - Return the latency history for a client
* `get_network_wireless_client_latency_stats` - Aggregated latency info for a given client on this network
* `get_network_wireless_clients_connection_stats` - Aggregated connectivity info for this network, grouped by clients
* `get_network_wireless_clients_latency_stats` - Aggregated latency info for this network, grouped by clients
* `get_network_wireless_connection_stats` - Aggregated connectivity info for this network
* `get_network_wireless_data_rate_history` - Return PHY data rates over time for a network, device, or network client
* `get_network_wireless_devices_connection_stats` - Aggregated connectivity info for this network, grouped by node
* `get_network_wireless_devices_latency_stats` - Aggregated latency info for this network, grouped by node
* `get_network_wireless_failed_connections` - List of all failed client connection events on this network in a given time range
* `get_network_wireless_latency_history` - Return average wireless latency over time for a network, device, or network client
* `get_network_wireless_latency_stats` - Aggregated latency info for this network
* `get_network_wireless_mesh_statuses` - List wireless mesh statuses for repeaters
* `get_network_wireless_signal_quality_history` - Return signal quality (SNR/RSSI) over time for a device or network client
* `get_network_wireless_usage_history` - Return AP usage over time for a device or network client
* `get_organization_api_requests` - List the API requests made by an organization
* `get_organization_api_requests_overview` - Return an aggregated overview of API requests data
* `get_organization_appliance_security_events` - List the security events for an organization
* `get_organization_appliance_uplink_statuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `get_organization_appliance_vpn_stats` - Show VPN history stat for networks in an organization
* `get_organization_appliance_vpn_statuses` - Show VPN status for networks in an organization
* `get_organization_cellular_gateway_uplink_statuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `get_organization_configuration_changes` - View the Change Log for your organization
* `get_organization_devices_statuses` - List the status of every Meraki device in the organization
* `get_organization_devices_uplinks_loss_and_latency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `get_organization_licenses_overview` - Return an overview of the license state for an organization
* `get_organization_openapi_spec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `get_organization_uplinks_statuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `get_organization_webhooks_alert_types` - Return a list of alert types to be used with managing webhook alerts
* `get_organization_webhooks_logs` - Return the log of webhook POSTs sent

### monitoredMediaServers

* `create_organization_insight_monitored_media_server` - Add a media server to be monitored for this organization
* `delete_organization_insight_monitored_media_server` - Delete a monitored media server from this organization
* `get_organization_insight_monitored_media_server` - Return a monitored media server for this organization
* `get_organization_insight_monitored_media_servers` - List the monitored media servers for this organization
* `update_organization_insight_monitored_media_server` - Update a monitored media server for this organization

### mqttBrokers

* `create_network_mqtt_broker` - Add an MQTT broker
* `delete_network_mqtt_broker` - Delete an MQTT broker
* `get_network_mqtt_broker` - Return an MQTT broker
* `get_network_mqtt_brokers` - List the MQTT brokers for this network
* `update_network_mqtt_broker` - Update an MQTT broker

### mtu

* `get_network_switch_mtu` - Return the MTU configuration
* `update_network_switch_mtu` - Update the MTU configuration

### multicast

* `create_network_switch_routing_multicast_rendezvous_point` - Create a multicast rendezvous point
* `delete_network_switch_routing_multicast_rendezvous_point` - Delete a multicast rendezvous point
* `get_network_switch_routing_multicast` - Return multicast settings for a network
* `get_network_switch_routing_multicast_rendezvous_point` - Return a multicast rendezvous point
* `get_network_switch_routing_multicast_rendezvous_points` - List multicast rendezvous points
* `update_network_switch_routing_multicast` - Update multicast settings for a network
* `update_network_switch_routing_multicast_rendezvous_point` - Update a multicast rendezvous point

### netflow

* `get_network_netflow` - Return the NetFlow traffic reporting settings for a network
* `update_network_netflow` - Update the NetFlow traffic reporting settings for a network

### networkAdapters

* `get_network_sm_device_network_adapters` - List the network adapters of a device

### networkHealth

* `get_network_network_health_channel_utilization` - Get the channel utilization over each radio for all APs in a network.

### networks

* `bind_network` - Bind a network to a template.
* `claim_network_devices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `combine_organization_networks` - Combine multiple networks into a single network
* `create_network_firmware_upgrades_rollback` - Rollback a Firmware Upgrade For A Network
* `create_network_floor_plan` - Upload a floor plan
* `create_network_group_policy` - Create a group policy
* `create_network_meraki_auth_user` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `create_network_mqtt_broker` - Add an MQTT broker
* `create_network_pii_request` - Submit a new delete or restrict processing PII request
* `create_network_webhooks_http_server` - Add an HTTP server to a network
* `create_network_webhooks_webhook_test` - Send a test webhook for a network
* `create_organization_network` - Create a network
* `delete_network` - Delete a network
* `delete_network_floor_plan` - Destroy a floor plan
* `delete_network_group_policy` - Delete a group policy
* `delete_network_meraki_auth_user` - Deauthorize a user
* `delete_network_mqtt_broker` - Delete an MQTT broker
* `delete_network_pii_request` - Delete a restrict processing PII request
* `delete_network_webhooks_http_server` - Delete an HTTP server from a network
* `get_network` - Return a network
* `get_network_alerts_settings` - Return the alert configuration for this network
* `get_network_bluetooth_client` - Return a Bluetooth client
* `get_network_bluetooth_clients` - List the Bluetooth clients seen by APs in this network
* `get_network_client` - Return the client associated with the given identifier
* `get_network_client_policy` - Return the policy assigned to a client on the network
* `get_network_client_splash_authorization_status` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `get_network_client_traffic_history` - Return the client's network traffic data over time
* `get_network_client_usage_history` - Return the client's daily usage history
* `get_network_clients` - List the clients that have used this network in the timespan
* `get_network_clients_application_usage` - Return the application usage data for clients
* `get_network_clients_overview` - Return overview statistics for network clients
* `get_network_clients_usage_histories` - Return the usage histories for clients
* `get_network_devices` - List the devices in a network
* `get_network_events` - List the events for the network
* `get_network_events_event_types` - List the event type to human-readable description
* `get_network_firmware_upgrades` - Get firmware upgrade information for a network
* `get_network_floor_plan` - Find a floor plan by ID
* `get_network_floor_plans` - List the floor plans that belong to your network
* `get_network_group_policies` - List the group policies in a network
* `get_network_group_policy` - Display a group policy
* `get_network_meraki_auth_user` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `get_network_meraki_auth_users` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `get_network_mqtt_broker` - Return an MQTT broker
* `get_network_mqtt_brokers` - List the MQTT brokers for this network
* `get_network_netflow` - Return the NetFlow traffic reporting settings for a network
* `get_network_network_health_channel_utilization` - Get the channel utilization over each radio for all APs in a network.
* `get_network_pii_pii_keys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `get_network_pii_request` - Return a PII request
* `get_network_pii_requests` - List the PII requests for this network or organization
* `get_network_pii_sm_devices_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `get_network_pii_sm_owners_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `get_network_settings` - Return the settings for a network
* `get_network_snmp` - Return the SNMP settings for a network
* `get_network_splash_login_attempts` - List the splash login attempts for a network
* `get_network_syslog_servers` - List the syslog servers for a network
* `get_network_traffic` - Return the traffic analysis data for this network
* `get_network_traffic_analysis` - Return the traffic analysis settings for a network
* `get_network_traffic_shaping_application_categories` - Returns the application categories for traffic shaping rules.
* `get_network_traffic_shaping_dscp_tagging_options` - Returns the available DSCP tagging options for your traffic shaping rules.
* `get_network_webhooks_http_server` - Return an HTTP server for a network
* `get_network_webhooks_http_servers` - List the HTTP servers for a network
* `get_network_webhooks_webhook_test` - Return the status of a webhook test for a network
* `get_organization_networks` - List the networks that the user has privileges on in an organization
* `provision_network_clients` - Provisions a client with a name and policy
* `remove_network_devices` - Remove a single device
* `split_network` - Split a combined network into individual networks for each type of device
* `unbind_network` - Unbind a network from a template.
* `update_network` - Update a network
* `update_network_alerts_settings` - Update the alert configuration for this network
* `update_network_client_policy` - Update the policy assigned to a client on the network
* `update_network_client_splash_authorization_status` - Update a client's splash authorization
* `update_network_firmware_upgrades` - Update firmware upgrade information for a network
* `update_network_floor_plan` - Update a floor plan's geolocation and other meta data
* `update_network_group_policy` - Update a group policy
* `update_network_meraki_auth_user` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `update_network_mqtt_broker` - Update an MQTT broker
* `update_network_netflow` - Update the NetFlow traffic reporting settings for a network
* `update_network_settings` - Update the settings for a network
* `update_network_snmp` - Update the SNMP settings for a network
* `update_network_syslog_servers` - Update the syslog servers for a network
* `update_network_traffic_analysis` - Update the traffic analysis settings for a network
* `update_network_webhooks_http_server` - Update an HTTP server

### objectDetectionModels

* `get_device_camera_sense_object_detection_models` - Returns the MV Sense object detection model list for the given camera

### onboarding

* `get_organization_camera_onboarding_statuses` - Fetch onboarding status of cameras
* `update_organization_camera_onboarding_statuses` - Notify that credential handoff to camera has completed

### oneToManyNatRules

* `get_network_appliance_firewall_one_to_many_nat_rules` - Return the 1:Many NAT mapping rules for an MX network
* `update_network_appliance_firewall_one_to_many_nat_rules` - Set the 1:Many NAT mapping rules for an MX network

### oneToOneNatRules

* `get_network_appliance_firewall_one_to_one_nat_rules` - Return the 1:1 NAT mapping rules for an MX network
* `update_network_appliance_firewall_one_to_one_nat_rules` - Set the 1:1 NAT mapping rules for an MX network

### openapiSpec

* `get_organization_openapi_spec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### order

* `get_network_switch_qos_rules_order` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `update_network_switch_qos_rules_order` - Update the order in which the rules should be processed by the switch

### organizations

* `assign_organization_licenses_seats` - Assign SM seats to a network
* `claim_into_organization` - Claim a list of devices, licenses, and/or orders into an organization
* `clone_organization` - Create a new organization by cloning the addressed organization
* `combine_organization_networks` - Combine multiple networks into a single network
* `create_organization` - Create a new organization
* `create_organization_action_batch` - Create an action batch
* `create_organization_adaptive_policy_acl` - Creates new adaptive policy ACL
* `create_organization_admin` - Create a new dashboard administrator
* `create_organization_branding_policy` - Add a new branding policy to an organization
* `create_organization_config_template` - Create a new configuration template
* `create_organization_network` - Create a network
* `create_organization_saml_idp` - Create a SAML IdP for your organization.
* `create_organization_saml_role` - Create a SAML role
* `delete_organization` - Delete an organization
* `delete_organization_action_batch` - Delete an action batch
* `delete_organization_adaptive_policy_acl` - Deletes the specified adaptive policy ACL
* `delete_organization_admin` - Revoke all access for a dashboard administrator within this organization
* `delete_organization_branding_policy` - Delete a branding policy
* `delete_organization_config_template` - Remove a configuration template
* `delete_organization_saml_idp` - Remove a SAML IdP in your organization.
* `delete_organization_saml_role` - Remove a SAML role
* `get_organization` - Return an organization
* `get_organization_action_batch` - Return an action batch
* `get_organization_action_batches` - Return the list of action batches in the organization
* `get_organization_adaptive_policy_acl` - Returns the adaptive policy ACL information
* `get_organization_adaptive_policy_acls` - List adaptive policy ACLs in a organization
* `get_organization_adaptive_policy_settings` - Returns global adaptive policy settings in an organization
* `get_organization_admins` - List the dashboard administrators in this organization
* `get_organization_api_requests` - List the API requests made by an organization
* `get_organization_api_requests_overview` - Return an aggregated overview of API requests data
* `get_organization_branding_policies` - List the branding policies of an organization
* `get_organization_branding_policies_priorities` - Return the branding policy IDs of an organization in priority order
* `get_organization_branding_policy` - Return a branding policy
* `get_organization_config_template` - Return a single configuration template
* `get_organization_config_templates` - List the configuration templates for this organization
* `get_organization_configuration_changes` - View the Change Log for your organization
* `get_organization_devices` - List the devices in an organization
* `get_organization_devices_statuses` - List the status of every Meraki device in the organization
* `get_organization_devices_uplinks_loss_and_latency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `get_organization_inventory_device` - Return a single device from the inventory of an organization
* `get_organization_inventory_devices` - Return the device inventory for an organization
* `get_organization_license` - Display a license
* `get_organization_licenses` - List the licenses for an organization
* `get_organization_licenses_overview` - Return an overview of the license state for an organization
* `get_organization_login_security` - Returns the login security settings for an organization.
* `get_organization_networks` - List the networks that the user has privileges on in an organization
* `get_organization_openapi_spec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `get_organization_saml` - Returns the SAML SSO enabled settings for an organization.
* `get_organization_saml_idp` - Get a SAML IdP from your organization.
* `get_organization_saml_idps` - List the SAML IdPs in your organization.
* `get_organization_saml_role` - Return a SAML role
* `get_organization_saml_roles` - List the SAML roles for this organization
* `get_organization_snmp` - Return the SNMP settings for an organization
* `get_organization_uplinks_statuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `get_organization_webhooks_alert_types` - Return a list of alert types to be used with managing webhook alerts
* `get_organization_webhooks_logs` - Return the log of webhook POSTs sent
* `get_organizations` - List the organizations that the user has privileges on
* `move_organization_licenses` - Move licenses to another organization
* `move_organization_licenses_seats` - Move SM seats to another organization
* `renew_organization_licenses_seats` - Renew SM seats of a license
* `update_organization` - Update an organization
* `update_organization_action_batch` - Update an action batch
* `update_organization_adaptive_policy_acl` - Updates an adaptive policy ACL
* `update_organization_adaptive_policy_settings` - Update global adaptive policy settings
* `update_organization_admin` - Update an administrator
* `update_organization_branding_policies_priorities` - Update the priority ordering of an organization's branding policies.
* `update_organization_branding_policy` - Update a branding policy
* `update_organization_config_template` - Update a configuration template
* `update_organization_license` - Update a license
* `update_organization_login_security` - Update the login security settings for an organization
* `update_organization_saml` - Updates the SAML SSO enabled settings for an organization.
* `update_organization_saml_idp` - Update a SAML IdP in your organization
* `update_organization_saml_role` - Update a SAML role
* `update_organization_snmp` - Update the SNMP settings for an organization

### ospf

* `get_network_switch_routing_ospf` - Return layer 3 OSPF routing configuration
* `update_network_switch_routing_ospf` - Update layer 3 OSPF routing configuration

### overview

* `get_device_camera_analytics_overview` - Returns an overview of aggregate analytics data for a timespan
* `get_network_clients_overview` - Return overview statistics for network clients
* `get_organization_api_requests_overview` - Return an aggregated overview of API requests data
* `get_organization_licenses_overview` - Return an overview of the license state for an organization

### packets

* `get_device_switch_ports_statuses_packets` - Return the packet counters for all the ports of a switch

### performance

* `get_device_appliance_performance` - Return the performance score for a single MX

### performanceHistory

* `get_network_sm_device_performance_history` - Return historical records of various Systems Manager client metrics for desktop devices.

### pii

* `create_network_pii_request` - Submit a new delete or restrict processing PII request
* `delete_network_pii_request` - Delete a restrict processing PII request
* `get_network_pii_pii_keys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `get_network_pii_request` - Return a PII request
* `get_network_pii_requests` - List the PII requests for this network or organization
* `get_network_pii_sm_devices_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `get_network_pii_sm_owners_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### piiKeys

* `get_network_pii_pii_keys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier

### policy

* `get_network_client_policy` - Return the policy assigned to a client on the network
* `update_network_client_policy` - Update the policy assigned to a client on the network

### portForwardingRules

* `get_device_cellular_gateway_port_forwarding_rules` - Returns the port forwarding rules for a single MG.
* `get_network_appliance_firewall_port_forwarding_rules` - Return the port forwarding rules for an MX network
* `update_device_cellular_gateway_port_forwarding_rules` - Updates the port forwarding rules for a single MG.
* `update_network_appliance_firewall_port_forwarding_rules` - Update the port forwarding rules for an MX network

### portSchedules

* `create_network_switch_port_schedule` - Add a switch port schedule
* `delete_network_switch_port_schedule` - Delete a switch port schedule
* `get_network_switch_port_schedules` - List switch port schedules
* `update_network_switch_port_schedule` - Update a switch port schedule

### ports

* `cycle_device_switch_ports` - Cycle a set of switch ports
* `get_device_switch_port` - Return a switch port
* `get_device_switch_ports` - List the switch ports for a switch
* `get_device_switch_ports_statuses` - Return the status for all the ports of a switch
* `get_device_switch_ports_statuses_packets` - Return the packet counters for all the ports of a switch
* `get_network_appliance_port` - Return per-port VLAN settings for a single MX port.
* `get_network_appliance_ports` - List per-port VLAN settings for all ports of a MX.
* `get_organization_config_template_switch_profile_port` - Return a switch profile port
* `get_organization_config_template_switch_profile_ports` - Return all the ports of a switch profile
* `update_device_switch_port` - Update a switch port
* `update_network_appliance_port` - Update the per-port VLAN settings for a single MX port.
* `update_organization_config_template_switch_profile_port` - Update a switch profile port

### priorities

* `get_organization_branding_policies_priorities` - Return the branding policy IDs of an organization in priority order
* `update_organization_branding_policies_priorities` - Update the priority ordering of an organization's branding policies.

### profiles

* `get_network_sm_profiles` - List all profiles in a network
* `get_organization_config_template_switch_profile_port` - Return a switch profile port
* `get_organization_config_template_switch_profile_ports` - Return all the ports of a switch profile
* `get_organization_config_template_switch_profiles` - List the switch profiles for your switch template configuration
* `update_organization_config_template_switch_profile_port` - Update a switch profile port

### qosRules

* `create_network_switch_qos_rule` - Add a quality of service rule
* `delete_network_switch_qos_rule` - Delete a quality of service rule
* `get_network_switch_qos_rule` - Return a quality of service rule
* `get_network_switch_qos_rules` - List quality of service rules
* `get_network_switch_qos_rules_order` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `update_network_switch_qos_rule` - Update a quality of service rule
* `update_network_switch_qos_rules_order` - Update the order in which the rules should be processed by the switch

### qualityAndRetention

* `get_device_camera_quality_and_retention` - Returns quality and retention settings for the given camera
* `update_device_camera_quality_and_retention` - Update quality and retention settings for the given camera

### qualityRetentionProfiles

* `create_network_camera_quality_retention_profile` - Creates new quality retention profile for this network.
* `delete_network_camera_quality_retention_profile` - Delete an existing quality retention profile for this network.
* `get_network_camera_quality_retention_profile` - Retrieve a single quality retention profile
* `get_network_camera_quality_retention_profiles` - List the quality retention profiles for this network
* `update_network_camera_quality_retention_profile` - Update an existing quality retention profile for this network.

### radio

* `get_device_wireless_radio_settings` - Return the radio settings of a device
* `update_device_wireless_radio_settings` - Update the radio settings of a device

### recent

* `get_device_camera_analytics_recent` - Returns most recent record for analytics zones

### rendezvousPoints

* `create_network_switch_routing_multicast_rendezvous_point` - Create a multicast rendezvous point
* `delete_network_switch_routing_multicast_rendezvous_point` - Delete a multicast rendezvous point
* `get_network_switch_routing_multicast_rendezvous_point` - Return a multicast rendezvous point
* `get_network_switch_routing_multicast_rendezvous_points` - List multicast rendezvous points
* `update_network_switch_routing_multicast_rendezvous_point` - Update a multicast rendezvous point

### requests

* `create_network_pii_request` - Submit a new delete or restrict processing PII request
* `delete_network_pii_request` - Delete a restrict processing PII request
* `get_network_pii_request` - Return a PII request
* `get_network_pii_requests` - List the PII requests for this network or organization

### restrictions

* `get_network_sm_device_restrictions` - List the restrictions on a device

### rfProfiles

* `create_network_wireless_rf_profile` - Creates new RF profile for this network
* `delete_network_wireless_rf_profile` - Delete a RF Profile
* `get_network_wireless_rf_profile` - Return a RF profile
* `get_network_wireless_rf_profiles` - List the non-basic RF profiles for this network
* `update_network_wireless_rf_profile` - Updates specified RF profile for this network

### rollbacks

* `create_network_firmware_upgrades_rollback` - Rollback a Firmware Upgrade For A Network

### routing

* `create_device_switch_routing_interface` - Create a layer 3 interface for a switch
* `create_device_switch_routing_static_route` - Create a layer 3 static route for a switch
* `create_network_switch_routing_multicast_rendezvous_point` - Create a multicast rendezvous point
* `create_network_switch_stack_routing_interface` - Create a layer 3 interface for a switch stack
* `create_network_switch_stack_routing_static_route` - Create a layer 3 static route for a switch stack
* `delete_device_switch_routing_interface` - Delete a layer 3 interface from the switch
* `delete_device_switch_routing_static_route` - Delete a layer 3 static route for a switch
* `delete_network_switch_routing_multicast_rendezvous_point` - Delete a multicast rendezvous point
* `delete_network_switch_stack_routing_interface` - Delete a layer 3 interface from a switch stack
* `delete_network_switch_stack_routing_static_route` - Delete a layer 3 static route for a switch stack
* `get_device_switch_routing_interface` - Return a layer 3 interface for a switch
* `get_device_switch_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch
* `get_device_switch_routing_interfaces` - List layer 3 interfaces for a switch
* `get_device_switch_routing_static_route` - Return a layer 3 static route for a switch
* `get_device_switch_routing_static_routes` - List layer 3 static routes for a switch
* `get_network_switch_routing_multicast` - Return multicast settings for a network
* `get_network_switch_routing_multicast_rendezvous_point` - Return a multicast rendezvous point
* `get_network_switch_routing_multicast_rendezvous_points` - List multicast rendezvous points
* `get_network_switch_routing_ospf` - Return layer 3 OSPF routing configuration
* `get_network_switch_stack_routing_interface` - Return a layer 3 interface from a switch stack
* `get_network_switch_stack_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `get_network_switch_stack_routing_interfaces` - List layer 3 interfaces for a switch stack
* `get_network_switch_stack_routing_static_route` - Return a layer 3 static route for a switch stack
* `get_network_switch_stack_routing_static_routes` - List layer 3 static routes for a switch stack
* `update_device_switch_routing_interface` - Update a layer 3 interface for a switch
* `update_device_switch_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch
* `update_device_switch_routing_static_route` - Update a layer 3 static route for a switch
* `update_network_switch_routing_multicast` - Update multicast settings for a network
* `update_network_switch_routing_multicast_rendezvous_point` - Update a multicast rendezvous point
* `update_network_switch_routing_ospf` - Update layer 3 OSPF routing configuration
* `update_network_switch_stack_routing_interface` - Update a layer 3 interface for a switch stack
* `update_network_switch_stack_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `update_network_switch_stack_routing_static_route` - Update a layer 3 static route for a switch stack

### rules

* `get_network_appliance_traffic_shaping_rules` - Display the traffic shaping settings rules for an MX network
* `get_network_wireless_ssid_traffic_shaping_rules` - Display the traffic shaping settings for a SSID on an MR network
* `update_network_appliance_traffic_shaping_rules` - Update the traffic shaping settings rules for an MX network
* `update_network_wireless_ssid_traffic_shaping_rules` - Update the traffic shaping settings for an SSID on an MR network

### saml

* `create_organization_saml_idp` - Create a SAML IdP for your organization.
* `delete_organization_saml_idp` - Remove a SAML IdP in your organization.
* `get_organization_saml` - Returns the SAML SSO enabled settings for an organization.
* `get_organization_saml_idp` - Get a SAML IdP from your organization.
* `get_organization_saml_idps` - List the SAML IdPs in your organization.
* `update_organization_saml` - Updates the SAML SSO enabled settings for an organization.
* `update_organization_saml_idp` - Update a SAML IdP in your organization

### samlRoles

* `create_organization_saml_role` - Create a SAML role
* `delete_organization_saml_role` - Remove a SAML role
* `get_organization_saml_role` - Return a SAML role
* `get_organization_saml_roles` - List the SAML roles for this organization
* `update_organization_saml_role` - Update a SAML role

### schedules

* `get_network_camera_schedules` - Returns a list of all camera recording schedules.
* `get_network_wireless_ssid_schedules` - List the outage schedule for the SSID
* `update_network_wireless_ssid_schedules` - Update the outage schedule for the SSID

### security

* `get_network_appliance_client_security_events` - List the security events for a client
* `get_network_appliance_security_events` - List the security events for a network
* `get_network_appliance_security_intrusion` - Returns all supported intrusion settings for an MX network
* `get_network_appliance_security_malware` - Returns all supported malware settings for an MX network
* `get_organization_appliance_security_events` - List the security events for an organization
* `get_organization_appliance_security_intrusion` - Returns all supported intrusion settings for an organization
* `update_network_appliance_security_intrusion` - Set the supported intrusion settings for an MX network
* `update_network_appliance_security_malware` - Set the supported malware settings for an MX network
* `update_organization_appliance_security_intrusion` - Sets supported intrusion settings for an organization

### securityCenters

* `get_network_sm_device_security_centers` - List the security centers on a device

### sense

* `get_device_camera_sense` - Returns sense settings for a given camera
* `get_device_camera_sense_object_detection_models` - Returns the MV Sense object detection model list for the given camera
* `update_device_camera_sense` - Update sense settings for the given camera

### settings

* `get_device_camera_video_settings` - Returns video settings for the given camera
* `get_device_wireless_bluetooth_settings` - Return the bluetooth settings for a wireless device
* `get_device_wireless_radio_settings` - Return the radio settings of a device
* `get_network_alerts_settings` - Return the alert configuration for this network
* `get_network_appliance_settings` - Return the appliance settings for a network
* `get_network_appliance_vlans_settings` - Returns the enabled status of VLANs for the network
* `get_network_settings` - Return the settings for a network
* `get_network_switch_settings` - Returns the switch network settings
* `get_network_wireless_bluetooth_settings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `get_network_wireless_settings` - Return the wireless settings for a network
* `get_network_wireless_ssid_splash_settings` - Display the splash page settings for the given SSID
* `get_organization_adaptive_policy_settings` - Returns global adaptive policy settings in an organization
* `update_device_camera_video_settings` - Update video settings for the given camera
* `update_device_wireless_bluetooth_settings` - Update the bluetooth settings for a wireless device
* `update_device_wireless_radio_settings` - Update the radio settings of a device
* `update_network_alerts_settings` - Update the alert configuration for this network
* `update_network_appliance_vlans_settings` - Enable/Disable VLANs for the given network
* `update_network_settings` - Update the settings for a network
* `update_network_switch_settings` - Update switch network settings
* `update_network_wireless_bluetooth_settings` - Update the Bluetooth settings for a network
* `update_network_wireless_settings` - Update the wireless settings for a network
* `update_network_wireless_ssid_splash_settings` - Modify the splash page settings for the given SSID
* `update_organization_adaptive_policy_settings` - Update global adaptive policy settings

### signalQualityHistory

* `get_network_wireless_signal_quality_history` - Return signal quality (SNR/RSSI) over time for a device or network client

### singleLan

* `get_network_appliance_single_lan` - Return single LAN configuration
* `update_network_appliance_single_lan` - Update single LAN configuration

### siteToSiteVpn

* `get_network_appliance_vpn_site_to_site_vpn` - Return the site-to-site VPN settings of a network
* `update_network_appliance_vpn_site_to_site_vpn` - Update the site-to-site VPN settings of a network

### sm

* `checkin_network_sm_devices` - Force check-in a set of devices
* `create_network_sm_bypass_activation_lock_attempt` - Bypass activation lock attempt
* `create_network_sm_target_group` - Add a target group
* `delete_network_sm_target_group` - Delete a target group from a network
* `delete_network_sm_user_access_device` - Delete a User Access Device
* `get_network_sm_bypass_activation_lock_attempt` - Bypass activation lock attempt status
* `get_network_sm_device_cellular_usage_history` - Return the client's daily cellular data usage history
* `get_network_sm_device_certs` - List the certs on a device
* `get_network_sm_device_connectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `get_network_sm_device_desktop_logs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `get_network_sm_device_device_command_logs` - Return historical records of commands sent to Systems Manager devices
* `get_network_sm_device_device_profiles` - Get the profiles associated with a device
* `get_network_sm_device_network_adapters` - List the network adapters of a device
* `get_network_sm_device_performance_history` - Return historical records of various Systems Manager client metrics for desktop devices.
* `get_network_sm_device_restrictions` - List the restrictions on a device
* `get_network_sm_device_security_centers` - List the security centers on a device
* `get_network_sm_device_softwares` - Get a list of softwares associated with a device
* `get_network_sm_device_wlan_lists` - List the saved SSID names on a device
* `get_network_sm_devices` - List the devices enrolled in an SM network with various specified fields and filters
* `get_network_sm_profiles` - List all profiles in a network
* `get_network_sm_target_group` - Return a target group
* `get_network_sm_target_groups` - List the target groups in this network
* `get_network_sm_user_access_devices` - List User Access Devices and its Trusted Access Connections
* `get_network_sm_user_device_profiles` - Get the profiles associated with a user
* `get_network_sm_user_softwares` - Get a list of softwares associated with a user
* `get_network_sm_users` - List the owners in an SM network with various specified fields and filters
* `get_organization_sm_apns_cert` - Get the organization's APNS certificate
* `get_organization_sm_vpp_account` - Get a hash containing the unparsed token of the VPP account with the given ID
* `get_organization_sm_vpp_accounts` - List the VPP accounts in the organization
* `lock_network_sm_devices` - Lock a set of devices
* `modify_network_sm_devices_tags` - Add, delete, or update the tags of a set of devices
* `move_network_sm_devices` - Move a set of devices to a new network
* `refresh_network_sm_device_details` - Refresh the details of a device
* `unenroll_network_sm_device` - Unenroll a device
* `update_network_sm_devices_fields` - Modify the fields of a device
* `update_network_sm_target_group` - Update a target group
* `wipe_network_sm_devices` - Wipe a device

### smDevicesForKey

* `get_network_pii_sm_devices_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

### smOwnersForKey

* `get_network_pii_sm_owners_for_key` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### snmp

* `get_network_snmp` - Return the SNMP settings for a network
* `get_organization_snmp` - Return the SNMP settings for an organization
* `update_network_snmp` - Update the SNMP settings for a network
* `update_organization_snmp` - Update the SNMP settings for an organization

### softwares

* `get_network_sm_device_softwares` - Get a list of softwares associated with a device
* `get_network_sm_user_softwares` - Get a list of softwares associated with a user

### splash

* `get_network_wireless_ssid_splash_settings` - Display the splash page settings for the given SSID
* `update_network_wireless_ssid_splash_settings` - Modify the splash page settings for the given SSID

### splashAuthorizationStatus

* `get_network_client_splash_authorization_status` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `update_network_client_splash_authorization_status` - Update a client's splash authorization

### splashLoginAttempts

* `get_network_splash_login_attempts` - List the splash login attempts for a network

### ssids

* `create_network_wireless_ssid_identity_psk` - Create an Identity PSK
* `delete_network_wireless_ssid_identity_psk` - Delete an Identity PSK
* `get_network_wireless_ssid` - Return a single MR SSID
* `get_network_wireless_ssid_bonjour_forwarding` - List the Bonjour forwarding setting and rules for the SSID
* `get_network_wireless_ssid_device_type_group_policies` - List the device type group policies for the SSID
* `get_network_wireless_ssid_eap_override` - Return the EAP overridden parameters for an SSID
* `get_network_wireless_ssid_firewall_l3_firewall_rules` - Return the L3 firewall rules for an SSID on an MR network
* `get_network_wireless_ssid_firewall_l7_firewall_rules` - Return the L7 firewall rules for an SSID on an MR network
* `get_network_wireless_ssid_hotspot20` - Return the Hotspot 2.0 settings for an SSID
* `get_network_wireless_ssid_identity_psk` - Return an Identity PSK
* `get_network_wireless_ssid_identity_psks` - List all Identity PSKs in a wireless network
* `get_network_wireless_ssid_schedules` - List the outage schedule for the SSID
* `get_network_wireless_ssid_splash_settings` - Display the splash page settings for the given SSID
* `get_network_wireless_ssid_traffic_shaping_rules` - Display the traffic shaping settings for a SSID on an MR network
* `get_network_wireless_ssid_vpn` - List the VPN settings for the SSID.
* `get_network_wireless_ssids` - List the MR SSIDs in a network
* `update_network_wireless_ssid` - Update the attributes of an MR SSID
* `update_network_wireless_ssid_bonjour_forwarding` - Update the bonjour forwarding setting and rules for the SSID
* `update_network_wireless_ssid_device_type_group_policies` - Update the device type group policies for the SSID
* `update_network_wireless_ssid_eap_override` - Update the EAP overridden parameters for an SSID.
* `update_network_wireless_ssid_firewall_l3_firewall_rules` - Update the L3 firewall rules of an SSID on an MR network
* `update_network_wireless_ssid_firewall_l7_firewall_rules` - Update the L7 firewall rules of an SSID on an MR network
* `update_network_wireless_ssid_hotspot20` - Update the Hotspot 2.0 settings of an SSID
* `update_network_wireless_ssid_identity_psk` - Update an Identity PSK
* `update_network_wireless_ssid_schedules` - Update the outage schedule for the SSID
* `update_network_wireless_ssid_splash_settings` - Modify the splash page settings for the given SSID
* `update_network_wireless_ssid_traffic_shaping_rules` - Update the traffic shaping settings for an SSID on an MR network
* `update_network_wireless_ssid_vpn` - Update the VPN settings for the SSID

### stacks

* `add_network_switch_stack` - Add a switch to a stack
* `create_network_switch_stack` - Create a stack
* `create_network_switch_stack_routing_interface` - Create a layer 3 interface for a switch stack
* `create_network_switch_stack_routing_static_route` - Create a layer 3 static route for a switch stack
* `delete_network_switch_stack` - Delete a stack
* `delete_network_switch_stack_routing_interface` - Delete a layer 3 interface from a switch stack
* `delete_network_switch_stack_routing_static_route` - Delete a layer 3 static route for a switch stack
* `get_network_switch_stack` - Show a switch stack
* `get_network_switch_stack_routing_interface` - Return a layer 3 interface from a switch stack
* `get_network_switch_stack_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `get_network_switch_stack_routing_interfaces` - List layer 3 interfaces for a switch stack
* `get_network_switch_stack_routing_static_route` - Return a layer 3 static route for a switch stack
* `get_network_switch_stack_routing_static_routes` - List layer 3 static routes for a switch stack
* `get_network_switch_stacks` - List the switch stacks in a network
* `remove_network_switch_stack` - Remove a switch from a stack
* `update_network_switch_stack_routing_interface` - Update a layer 3 interface for a switch stack
* `update_network_switch_stack_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `update_network_switch_stack_routing_static_route` - Update a layer 3 static route for a switch stack

### staticRoutes

* `create_device_switch_routing_static_route` - Create a layer 3 static route for a switch
* `create_network_appliance_static_route` - Add a static route for an MX or teleworker network
* `create_network_switch_stack_routing_static_route` - Create a layer 3 static route for a switch stack
* `delete_device_switch_routing_static_route` - Delete a layer 3 static route for a switch
* `delete_network_appliance_static_route` - Delete a static route from an MX or teleworker network
* `delete_network_switch_stack_routing_static_route` - Delete a layer 3 static route for a switch stack
* `get_device_switch_routing_static_route` - Return a layer 3 static route for a switch
* `get_device_switch_routing_static_routes` - List layer 3 static routes for a switch
* `get_network_appliance_static_route` - Return a static route for an MX or teleworker network
* `get_network_appliance_static_routes` - List the static routes for an MX or teleworker network
* `get_network_switch_stack_routing_static_route` - Return a layer 3 static route for a switch stack
* `get_network_switch_stack_routing_static_routes` - List layer 3 static routes for a switch stack
* `update_device_switch_routing_static_route` - Update a layer 3 static route for a switch
* `update_network_appliance_static_route` - Update a static route for an MX or teleworker network
* `update_network_switch_stack_routing_static_route` - Update a layer 3 static route for a switch stack

### stats

* `get_organization_appliance_vpn_stats` - Show VPN history stat for networks in an organization

### status

* `get_device_wireless_status` - Return the SSID statuses of an access point

### statuses

* `get_device_switch_ports_statuses` - Return the status for all the ports of a switch
* `get_device_switch_ports_statuses_packets` - Return the packet counters for all the ports of a switch
* `get_organization_appliance_uplink_statuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `get_organization_appliance_vpn_statuses` - Show VPN status for networks in an organization
* `get_organization_camera_onboarding_statuses` - Fetch onboarding status of cameras
* `get_organization_cellular_gateway_uplink_statuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `get_organization_devices_statuses` - List the status of every Meraki device in the organization
* `get_organization_uplinks_statuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `update_organization_camera_onboarding_statuses` - Notify that credential handoff to camera has completed

### stormControl

* `get_network_switch_storm_control` - Return the storm control configuration for a switch network
* `update_network_switch_storm_control` - Update the storm control configuration for a switch network

### stp

* `get_network_switch_stp` - Returns STP settings
* `update_network_switch_stp` - Updates STP settings

### subnetPool

* `get_network_cellular_gateway_subnet_pool` - Return the subnet pool and mask configured for MGs in the network.
* `update_network_cellular_gateway_subnet_pool` - Update the subnet pool and mask configuration for MGs in the network.

### subnets

* `get_device_appliance_dhcp_subnets` - Return the DHCP subnet information for an appliance

### switch

* `add_network_switch_stack` - Add a switch to a stack
* `clone_organization_switch_devices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `create_device_switch_routing_interface` - Create a layer 3 interface for a switch
* `create_device_switch_routing_static_route` - Create a layer 3 static route for a switch
* `create_network_switch_access_policy` - Create an access policy for a switch network
* `create_network_switch_link_aggregation` - Create a link aggregation group
* `create_network_switch_port_schedule` - Add a switch port schedule
* `create_network_switch_qos_rule` - Add a quality of service rule
* `create_network_switch_routing_multicast_rendezvous_point` - Create a multicast rendezvous point
* `create_network_switch_stack` - Create a stack
* `create_network_switch_stack_routing_interface` - Create a layer 3 interface for a switch stack
* `create_network_switch_stack_routing_static_route` - Create a layer 3 static route for a switch stack
* `cycle_device_switch_ports` - Cycle a set of switch ports
* `delete_device_switch_routing_interface` - Delete a layer 3 interface from the switch
* `delete_device_switch_routing_static_route` - Delete a layer 3 static route for a switch
* `delete_network_switch_access_policy` - Delete an access policy for a switch network
* `delete_network_switch_link_aggregation` - Split a link aggregation group into separate ports
* `delete_network_switch_port_schedule` - Delete a switch port schedule
* `delete_network_switch_qos_rule` - Delete a quality of service rule
* `delete_network_switch_routing_multicast_rendezvous_point` - Delete a multicast rendezvous point
* `delete_network_switch_stack` - Delete a stack
* `delete_network_switch_stack_routing_interface` - Delete a layer 3 interface from a switch stack
* `delete_network_switch_stack_routing_static_route` - Delete a layer 3 static route for a switch stack
* `get_device_switch_port` - Return a switch port
* `get_device_switch_ports` - List the switch ports for a switch
* `get_device_switch_ports_statuses` - Return the status for all the ports of a switch
* `get_device_switch_ports_statuses_packets` - Return the packet counters for all the ports of a switch
* `get_device_switch_routing_interface` - Return a layer 3 interface for a switch
* `get_device_switch_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch
* `get_device_switch_routing_interfaces` - List layer 3 interfaces for a switch
* `get_device_switch_routing_static_route` - Return a layer 3 static route for a switch
* `get_device_switch_routing_static_routes` - List layer 3 static routes for a switch
* `get_device_switch_warm_spare` - Return warm spare configuration for a switch
* `get_network_switch_access_control_lists` - Return the access control lists for a MS network
* `get_network_switch_access_policies` - List the access policies for a switch network
* `get_network_switch_access_policy` - Return a specific access policy for a switch network
* `get_network_switch_alternate_management_interface` - Return the switch alternate management interface for the network
* `get_network_switch_dhcp_server_policy` - Return the DHCP server policy
* `get_network_switch_dscp_to_cos_mappings` - Return the DSCP to CoS mappings
* `get_network_switch_link_aggregations` - List link aggregation groups
* `get_network_switch_mtu` - Return the MTU configuration
* `get_network_switch_port_schedules` - List switch port schedules
* `get_network_switch_qos_rule` - Return a quality of service rule
* `get_network_switch_qos_rules` - List quality of service rules
* `get_network_switch_qos_rules_order` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `get_network_switch_routing_multicast` - Return multicast settings for a network
* `get_network_switch_routing_multicast_rendezvous_point` - Return a multicast rendezvous point
* `get_network_switch_routing_multicast_rendezvous_points` - List multicast rendezvous points
* `get_network_switch_routing_ospf` - Return layer 3 OSPF routing configuration
* `get_network_switch_settings` - Returns the switch network settings
* `get_network_switch_stack` - Show a switch stack
* `get_network_switch_stack_routing_interface` - Return a layer 3 interface from a switch stack
* `get_network_switch_stack_routing_interface_dhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `get_network_switch_stack_routing_interfaces` - List layer 3 interfaces for a switch stack
* `get_network_switch_stack_routing_static_route` - Return a layer 3 static route for a switch stack
* `get_network_switch_stack_routing_static_routes` - List layer 3 static routes for a switch stack
* `get_network_switch_stacks` - List the switch stacks in a network
* `get_network_switch_storm_control` - Return the storm control configuration for a switch network
* `get_network_switch_stp` - Returns STP settings
* `get_organization_config_template_switch_profile_port` - Return a switch profile port
* `get_organization_config_template_switch_profile_ports` - Return all the ports of a switch profile
* `get_organization_config_template_switch_profiles` - List the switch profiles for your switch template configuration
* `remove_network_switch_stack` - Remove a switch from a stack
* `update_device_switch_port` - Update a switch port
* `update_device_switch_routing_interface` - Update a layer 3 interface for a switch
* `update_device_switch_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch
* `update_device_switch_routing_static_route` - Update a layer 3 static route for a switch
* `update_device_switch_warm_spare` - Update warm spare configuration for a switch
* `update_network_switch_access_control_lists` - Update the access control lists for a MS network
* `update_network_switch_access_policy` - Update an access policy for a switch network
* `update_network_switch_alternate_management_interface` - Update the switch alternate management interface for the network
* `update_network_switch_dhcp_server_policy` - Update the DHCP server policy
* `update_network_switch_dscp_to_cos_mappings` - Update the DSCP to CoS mappings
* `update_network_switch_link_aggregation` - Update a link aggregation group
* `update_network_switch_mtu` - Update the MTU configuration
* `update_network_switch_port_schedule` - Update a switch port schedule
* `update_network_switch_qos_rule` - Update a quality of service rule
* `update_network_switch_qos_rules_order` - Update the order in which the rules should be processed by the switch
* `update_network_switch_routing_multicast` - Update multicast settings for a network
* `update_network_switch_routing_multicast_rendezvous_point` - Update a multicast rendezvous point
* `update_network_switch_routing_ospf` - Update layer 3 OSPF routing configuration
* `update_network_switch_settings` - Update switch network settings
* `update_network_switch_stack_routing_interface` - Update a layer 3 interface for a switch stack
* `update_network_switch_stack_routing_interface_dhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `update_network_switch_stack_routing_static_route` - Update a layer 3 static route for a switch stack
* `update_network_switch_storm_control` - Update the storm control configuration for a switch network
* `update_network_switch_stp` - Updates STP settings
* `update_organization_config_template_switch_profile_port` - Update a switch profile port

### syslogServers

* `get_network_syslog_servers` - List the syslog servers for a network
* `update_network_syslog_servers` - Update the syslog servers for a network

### targetGroups

* `create_network_sm_target_group` - Add a target group
* `delete_network_sm_target_group` - Delete a target group from a network
* `get_network_sm_target_group` - Return a target group
* `get_network_sm_target_groups` - List the target groups in this network
* `update_network_sm_target_group` - Update a target group

### thirdPartyVPNPeers

* `get_organization_appliance_vpn_third_party_vpn_peers` - Return the third party VPN peers for an organization
* `update_organization_appliance_vpn_third_party_vpn_peers` - Update the third party VPN peers for an organization

### traffic

* `get_network_traffic` - Return the traffic analysis data for this network

### trafficAnalysis

* `get_network_traffic_analysis` - Return the traffic analysis settings for a network
* `update_network_traffic_analysis` - Update the traffic analysis settings for a network

### trafficHistory

* `get_network_client_traffic_history` - Return the client's network traffic data over time

### trafficShaping

* `create_network_appliance_traffic_shaping_custom_performance_class` - Add a custom performance class for an MX network
* `delete_network_appliance_traffic_shaping_custom_performance_class` - Delete a custom performance class from an MX network
* `get_network_appliance_traffic_shaping` - Display the traffic shaping settings for an MX network
* `get_network_appliance_traffic_shaping_custom_performance_class` - Return a custom performance class for an MX network
* `get_network_appliance_traffic_shaping_custom_performance_classes` - List all custom performance classes for an MX network
* `get_network_appliance_traffic_shaping_rules` - Display the traffic shaping settings rules for an MX network
* `get_network_appliance_traffic_shaping_uplink_bandwidth` - Returns the uplink bandwidth settings for your MX network.
* `get_network_appliance_traffic_shaping_uplink_selection` - Show uplink selection settings for an MX network
* `get_network_traffic_shaping_application_categories` - Returns the application categories for traffic shaping rules.
* `get_network_traffic_shaping_dscp_tagging_options` - Returns the available DSCP tagging options for your traffic shaping rules.
* `get_network_wireless_ssid_traffic_shaping_rules` - Display the traffic shaping settings for a SSID on an MR network
* `update_network_appliance_traffic_shaping` - Update the traffic shaping settings for an MX network
* `update_network_appliance_traffic_shaping_custom_performance_class` - Update a custom performance class for an MX network
* `update_network_appliance_traffic_shaping_rules` - Update the traffic shaping settings rules for an MX network
* `update_network_appliance_traffic_shaping_uplink_bandwidth` - Updates the uplink bandwidth settings for your MX network.
* `update_network_appliance_traffic_shaping_uplink_selection` - Update uplink selection settings for an MX network
* `update_network_wireless_ssid_traffic_shaping_rules` - Update the traffic shaping settings for an SSID on an MR network

### uplink

* `get_network_cellular_gateway_uplink` - Returns the uplink settings for your MG network.
* `get_organization_appliance_uplink_statuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `get_organization_cellular_gateway_uplink_statuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `update_network_cellular_gateway_uplink` - Updates the uplink settings for your MG network.

### uplinkBandwidth

* `get_network_appliance_traffic_shaping_uplink_bandwidth` - Returns the uplink bandwidth settings for your MX network.
* `update_network_appliance_traffic_shaping_uplink_bandwidth` - Updates the uplink bandwidth settings for your MX network.

### uplinkSelection

* `get_network_appliance_traffic_shaping_uplink_selection` - Show uplink selection settings for an MX network
* `update_network_appliance_traffic_shaping_uplink_selection` - Update uplink selection settings for an MX network

### uplinks

* `get_network_appliance_uplinks_usage_history` - Get the sent and received bytes for each uplink of a network.
* `get_organization_uplinks_statuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization

### uplinksLossAndLatency

* `get_organization_devices_uplinks_loss_and_latency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### usageHistories

* `get_network_clients_usage_histories` - Return the usage histories for clients

### usageHistory

* `get_network_appliance_uplinks_usage_history` - Get the sent and received bytes for each uplink of a network.
* `get_network_client_usage_history` - Return the client's daily usage history
* `get_network_wireless_usage_history` - Return AP usage over time for a device or network client

### userAccessDevices

* `delete_network_sm_user_access_device` - Delete a User Access Device
* `get_network_sm_user_access_devices` - List User Access Devices and its Trusted Access Connections

### users

* `get_network_sm_user_device_profiles` - Get the profiles associated with a user
* `get_network_sm_user_softwares` - Get a list of softwares associated with a user
* `get_network_sm_users` - List the owners in an SM network with various specified fields and filters

### video

* `get_device_camera_video_settings` - Returns video settings for the given camera
* `update_device_camera_video_settings` - Update video settings for the given camera

### videoLink

* `get_device_camera_video_link` - Returns video link to the specified camera

### vlans

* `create_network_appliance_vlan` - Add a VLAN
* `delete_network_appliance_vlan` - Delete a VLAN from a network
* `get_network_appliance_vlan` - Return a VLAN
* `get_network_appliance_vlans` - List the VLANs for an MX network
* `get_network_appliance_vlans_settings` - Returns the enabled status of VLANs for the network
* `update_network_appliance_vlan` - Update a VLAN
* `update_network_appliance_vlans_settings` - Enable/Disable VLANs for the given network

### vpn

* `get_network_appliance_vpn_bgp` - Return a Hub BGP Configuration
* `get_network_appliance_vpn_site_to_site_vpn` - Return the site-to-site VPN settings of a network
* `get_network_wireless_ssid_vpn` - List the VPN settings for the SSID.
* `get_organization_appliance_vpn_stats` - Show VPN history stat for networks in an organization
* `get_organization_appliance_vpn_statuses` - Show VPN status for networks in an organization
* `get_organization_appliance_vpn_third_party_vpn_peers` - Return the third party VPN peers for an organization
* `get_organization_appliance_vpn_vpn_firewall_rules` - Return the firewall rules for an organization's site-to-site VPN
* `update_network_appliance_vpn_bgp` - Update a Hub BGP Configuration
* `update_network_appliance_vpn_site_to_site_vpn` - Update the site-to-site VPN settings of a network
* `update_network_wireless_ssid_vpn` - Update the VPN settings for the SSID
* `update_organization_appliance_vpn_third_party_vpn_peers` - Update the third party VPN peers for an organization
* `update_organization_appliance_vpn_vpn_firewall_rules` - Update the firewall rules of an organization's site-to-site VPN

### vpnFirewallRules

* `get_organization_appliance_vpn_vpn_firewall_rules` - Return the firewall rules for an organization's site-to-site VPN
* `update_organization_appliance_vpn_vpn_firewall_rules` - Update the firewall rules of an organization's site-to-site VPN

### vppAccounts

* `get_organization_sm_vpp_account` - Get a hash containing the unparsed token of the VPP account with the given ID
* `get_organization_sm_vpp_accounts` - List the VPP accounts in the organization

### warmSpare

* `get_device_switch_warm_spare` - Return warm spare configuration for a switch
* `get_network_appliance_warm_spare` - Return MX warm spare settings
* `swap_network_appliance_warm_spare` - Swap MX primary and warm spare appliances
* `update_device_switch_warm_spare` - Update warm spare configuration for a switch
* `update_network_appliance_warm_spare` - Update MX warm spare settings

### webhookTests

* `create_network_webhooks_webhook_test` - Send a test webhook for a network
* `get_network_webhooks_webhook_test` - Return the status of a webhook test for a network

### webhooks

* `create_network_webhooks_http_server` - Add an HTTP server to a network
* `create_network_webhooks_webhook_test` - Send a test webhook for a network
* `delete_network_webhooks_http_server` - Delete an HTTP server from a network
* `get_network_webhooks_http_server` - Return an HTTP server for a network
* `get_network_webhooks_http_servers` - List the HTTP servers for a network
* `get_network_webhooks_webhook_test` - Return the status of a webhook test for a network
* `get_organization_webhooks_alert_types` - Return a list of alert types to be used with managing webhook alerts
* `get_organization_webhooks_logs` - Return the log of webhook POSTs sent
* `update_network_webhooks_http_server` - Update an HTTP server

### wireless

* `create_network_wireless_rf_profile` - Creates new RF profile for this network
* `create_network_wireless_ssid_identity_psk` - Create an Identity PSK
* `delete_network_wireless_rf_profile` - Delete a RF Profile
* `delete_network_wireless_ssid_identity_psk` - Delete an Identity PSK
* `get_device_wireless_bluetooth_settings` - Return the bluetooth settings for a wireless device
* `get_device_wireless_connection_stats` - Aggregated connectivity info for a given AP on this network
* `get_device_wireless_latency_stats` - Aggregated latency info for a given AP on this network
* `get_device_wireless_radio_settings` - Return the radio settings of a device
* `get_device_wireless_status` - Return the SSID statuses of an access point
* `get_network_wireless_air_marshal` - List Air Marshal scan results from a network
* `get_network_wireless_alternate_management_interface` - Return alternate management interface and devices with IP assigned
* `get_network_wireless_billing` - Return the billing settings of this network
* `get_network_wireless_bluetooth_settings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `get_network_wireless_channel_utilization_history` - Return AP channel utilization over time for a device or network client
* `get_network_wireless_client_connection_stats` - Aggregated connectivity info for a given client on this network
* `get_network_wireless_client_connectivity_events` - List the wireless connectivity events for a client within a network in the timespan.
* `get_network_wireless_client_count_history` - Return wireless client counts over time for a network, device, or network client
* `get_network_wireless_client_latency_history` - Return the latency history for a client
* `get_network_wireless_client_latency_stats` - Aggregated latency info for a given client on this network
* `get_network_wireless_clients_connection_stats` - Aggregated connectivity info for this network, grouped by clients
* `get_network_wireless_clients_latency_stats` - Aggregated latency info for this network, grouped by clients
* `get_network_wireless_connection_stats` - Aggregated connectivity info for this network
* `get_network_wireless_data_rate_history` - Return PHY data rates over time for a network, device, or network client
* `get_network_wireless_devices_connection_stats` - Aggregated connectivity info for this network, grouped by node
* `get_network_wireless_devices_latency_stats` - Aggregated latency info for this network, grouped by node
* `get_network_wireless_failed_connections` - List of all failed client connection events on this network in a given time range
* `get_network_wireless_latency_history` - Return average wireless latency over time for a network, device, or network client
* `get_network_wireless_latency_stats` - Aggregated latency info for this network
* `get_network_wireless_mesh_statuses` - List wireless mesh statuses for repeaters
* `get_network_wireless_rf_profile` - Return a RF profile
* `get_network_wireless_rf_profiles` - List the non-basic RF profiles for this network
* `get_network_wireless_settings` - Return the wireless settings for a network
* `get_network_wireless_signal_quality_history` - Return signal quality (SNR/RSSI) over time for a device or network client
* `get_network_wireless_ssid` - Return a single MR SSID
* `get_network_wireless_ssid_bonjour_forwarding` - List the Bonjour forwarding setting and rules for the SSID
* `get_network_wireless_ssid_device_type_group_policies` - List the device type group policies for the SSID
* `get_network_wireless_ssid_eap_override` - Return the EAP overridden parameters for an SSID
* `get_network_wireless_ssid_firewall_l3_firewall_rules` - Return the L3 firewall rules for an SSID on an MR network
* `get_network_wireless_ssid_firewall_l7_firewall_rules` - Return the L7 firewall rules for an SSID on an MR network
* `get_network_wireless_ssid_hotspot20` - Return the Hotspot 2.0 settings for an SSID
* `get_network_wireless_ssid_identity_psk` - Return an Identity PSK
* `get_network_wireless_ssid_identity_psks` - List all Identity PSKs in a wireless network
* `get_network_wireless_ssid_schedules` - List the outage schedule for the SSID
* `get_network_wireless_ssid_splash_settings` - Display the splash page settings for the given SSID
* `get_network_wireless_ssid_traffic_shaping_rules` - Display the traffic shaping settings for a SSID on an MR network
* `get_network_wireless_ssid_vpn` - List the VPN settings for the SSID.
* `get_network_wireless_ssids` - List the MR SSIDs in a network
* `get_network_wireless_usage_history` - Return AP usage over time for a device or network client
* `update_device_wireless_bluetooth_settings` - Update the bluetooth settings for a wireless device
* `update_device_wireless_radio_settings` - Update the radio settings of a device
* `update_network_wireless_alternate_management_interface` - Update alternate management interface and device static IP
* `update_network_wireless_billing` - Update the billing settings
* `update_network_wireless_bluetooth_settings` - Update the Bluetooth settings for a network
* `update_network_wireless_rf_profile` - Updates specified RF profile for this network
* `update_network_wireless_settings` - Update the wireless settings for a network
* `update_network_wireless_ssid` - Update the attributes of an MR SSID
* `update_network_wireless_ssid_bonjour_forwarding` - Update the bonjour forwarding setting and rules for the SSID
* `update_network_wireless_ssid_device_type_group_policies` - Update the device type group policies for the SSID
* `update_network_wireless_ssid_eap_override` - Update the EAP overridden parameters for an SSID.
* `update_network_wireless_ssid_firewall_l3_firewall_rules` - Update the L3 firewall rules of an SSID on an MR network
* `update_network_wireless_ssid_firewall_l7_firewall_rules` - Update the L7 firewall rules of an SSID on an MR network
* `update_network_wireless_ssid_hotspot20` - Update the Hotspot 2.0 settings of an SSID
* `update_network_wireless_ssid_identity_psk` - Update an Identity PSK
* `update_network_wireless_ssid_schedules` - Update the outage schedule for the SSID
* `update_network_wireless_ssid_splash_settings` - Modify the splash page settings for the given SSID
* `update_network_wireless_ssid_traffic_shaping_rules` - Update the traffic shaping settings for an SSID on an MR network
* `update_network_wireless_ssid_vpn` - Update the VPN settings for the SSID

### wirelessProfiles

* `create_network_camera_wireless_profile` - Creates a new camera wireless profile for this network.
* `delete_network_camera_wireless_profile` - Delete an existing camera wireless profile for this network.
* `get_device_camera_wireless_profiles` - Returns wireless profile assigned to the given camera
* `get_network_camera_wireless_profile` - Retrieve a single camera wireless profile.
* `get_network_camera_wireless_profiles` - List the camera wireless profiles for this network.
* `update_device_camera_wireless_profiles` - Assign wireless profiles to the given camera
* `update_network_camera_wireless_profile` - Update an existing camera wireless profile in this network.

### wlanLists

* `get_network_sm_device_wlan_lists` - List the saved SSID names on a device

### zones

* `get_device_camera_analytics_zone_history` - Return historical records for analytic zones
* `get_device_camera_analytics_zones` - Returns all configured analytic zones for this camera

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
