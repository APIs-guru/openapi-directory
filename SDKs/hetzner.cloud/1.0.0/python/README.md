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
    
req = operations.GetActionsRequest(
    query_params=operations.GetActionsQueryParams(
        id=3204866814910134817,
        sort="finished",
        status="running",
    ),
)
    
res = s.actions.get_actions(req)

if res.actions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Actions

* `get_actions` - Get all Actions
* `get_actions_id_` - Get an Action

### Certificate Actions

* `get_certificates_id_actions` - Get all Actions for a Certificate
* `get_certificates_id_actions_action_id_` - Get an Action for a Certificate
* `post_certificates_id_actions_retry` - Retry Issuance or Renewal

### Certificates

* `delete_certificates_id_` - Delete a Certificate
* `get_certificates` - Get all Certificates
* `get_certificates_id_` - Get a Certificate
* `post_certificates` - Create a Certificate
* `put_certificates_id_` - Update a Certificate

### Datacenters

* `get_datacenters` - Get all Datacenters
* `get_datacenters_id_` - Get a Datacenter

### Firewall Actions

* `get_firewalls_id_actions` - Get all Actions for a Firewall
* `get_firewalls_id_actions_action_id_` - Get an Action for a Firewall
* `post_firewalls_id_actions_apply_to_resources` - Apply to Resources
* `post_firewalls_id_actions_remove_from_resources` - Remove from Resources
* `post_firewalls_id_actions_set_rules` - Set Rules

### Firewalls

* `delete_firewalls_id_` - Delete a Firewall
* `get_firewalls` - Get all Firewalls
* `get_firewalls_id_` - Get a Firewall
* `post_firewalls` - Create a Firewall
* `put_firewalls_id_` - Update a Firewall

### Floating IP Actions

* `get_floating_ips_id_actions` - Get all Actions for a Floating IP
* `get_floating_ips_id_actions_action_id_` - Get an Action for a Floating IP
* `post_floating_ips_id_actions_assign` - Assign a Floating IP to a Server
* `post_floating_ips_id_actions_change_dns_ptr` - Change reverse DNS entry for a Floating IP
* `post_floating_ips_id_actions_change_protection` - Change Floating IP Protection
* `post_floating_ips_id_actions_unassign` - Unassign a Floating IP

### Floating IPs

* `delete_floating_ips_id_` - Delete a Floating IP
* `get_floating_ips` - Get all Floating IPs
* `get_floating_ips_id_` - Get a Floating IP
* `post_floating_ips` - Create a Floating IP
* `put_floating_ips_id_` - Update a Floating IP

### ISOs

* `get_isos` - Get all ISOs
* `get_isos_id_` - Get an ISO

### Image Actions

* `get_images_id_actions` - Get all Actions for an Image
* `get_images_id_actions_action_id_` - Get an Action for an Image
* `post_images_id_actions_change_protection` - Change Image Protection

### Images

* `delete_images_id_` - Delete an Image
* `get_images` - Get all Images
* `get_images_id_` - Get an Image
* `put_images_id_` - Update an Image

### Load Balancer Actions

* `get_load_balancers_id_actions` - Get all Actions for a Load Balancer
* `get_load_balancers_id_actions_action_id_` - Get an Action for a Load Balancer
* `post_load_balancers_id_actions_add_service` - Add Service
* `post_load_balancers_id_actions_add_target` - Add Target
* `post_load_balancers_id_actions_attach_to_network` - Attach a Load Balancer to a Network
* `post_load_balancers_id_actions_change_algorithm` - Change Algorithm
* `post_load_balancers_id_actions_change_dns_ptr` - Change reverse DNS entry for this Load Balancer
* `post_load_balancers_id_actions_change_protection` - Change Load Balancer Protection
* `post_load_balancers_id_actions_change_type` - Change the Type of a Load Balancer
* `post_load_balancers_id_actions_delete_service` - Delete Service
* `post_load_balancers_id_actions_detach_from_network` - Detach a Load Balancer from a Network
* `post_load_balancers_id_actions_disable_public_interface` - Disable the public interface of a Load Balancer
* `post_load_balancers_id_actions_enable_public_interface` - Enable the public interface of a Load Balancer
* `post_load_balancers_id_actions_remove_target` - Remove Target
* `post_load_balancers_id_actions_update_service` - Update Service

### Load Balancer Types

* `get_load_balancer_types` - Get all Load Balancer Types
* `get_load_balancer_types_id_` - Get a Load Balancer Type

### Load Balancers

* `delete_load_balancers_id_` - Delete a Load Balancer
* `get_load_balancers` - Get all Load Balancers
* `get_load_balancers_id_` - Get a Load Balancer
* `get_load_balancers_id_metrics` - Get Metrics for a LoadBalancer
* `post_load_balancers` - Create a Load Balancer
* `put_load_balancers_id_` - Update a Load Balancer

### Locations

* `get_locations` - Get all Locations
* `get_locations_id_` - Get a Location

### Network Actions

* `get_networks_id_actions` - Get all Actions for a Network
* `get_networks_id_actions_action_id_` - Get an Action for a Network
* `post_networks_id_actions_add_route` - Add a route to a Network
* `post_networks_id_actions_add_subnet` - Add a subnet to a Network
* `post_networks_id_actions_change_ip_range` - Change IP range of a Network
* `post_networks_id_actions_change_protection` - Change Network Protection
* `post_networks_id_actions_delete_route` - Delete a route from a Network
* `post_networks_id_actions_delete_subnet` - Delete a subnet from a Network

### Networks

* `delete_networks_id_` - Delete a Network
* `get_networks` - Get all Networks
* `get_networks_id_` - Get a Network
* `post_networks` - Create a Network
* `put_networks_id_` - Update a Network

### Placement Groups

* `delete_placement_groups_id_` - Delete a PlacementGroup
* `get_placement_groups` - Get all PlacementGroups
* `get_placement_groups_id_` - Get a PlacementGroup
* `post_placement_groups` - Create a PlacementGroup
* `put_placement_groups_id_` - Update a PlacementGroup

### Pricing

* `get_pricing` - Get all prices

### SSH Keys

* `delete_ssh_keys_id_` - Delete an SSH key
* `get_ssh_keys` - Get all SSH keys
* `get_ssh_keys_id_` - Get a SSH key
* `post_ssh_keys` - Create an SSH key
* `put_ssh_keys_id_` - Update an SSH key

### Server Actions

* `get_servers_id_actions` - Get all Actions for a Server
* `get_servers_id_actions_action_id_` - Get an Action for a Server
* `post_servers_id_actions_add_to_placement_group` - Add a Server to a Placement Group
* `post_servers_id_actions_attach_iso` - Attach an ISO to a Server
* `post_servers_id_actions_attach_to_network` - Attach a Server to a Network
* `post_servers_id_actions_change_alias_ips` - Change alias IPs of a Network
* `post_servers_id_actions_change_dns_ptr` - Change reverse DNS entry for this Server
* `post_servers_id_actions_change_protection` - Change Server Protection
* `post_servers_id_actions_change_type` - Change the Type of a Server
* `post_servers_id_actions_create_image` - Create Image from a Server
* `post_servers_id_actions_detach_from_network` - Detach a Server from a Network
* `post_servers_id_actions_detach_iso` - Detach an ISO from a Server
* `post_servers_id_actions_disable_backup` - Disable Backups for a Server
* `post_servers_id_actions_disable_rescue` - Disable Rescue Mode for a Server
* `post_servers_id_actions_enable_backup` - Enable and Configure Backups for a Server
* `post_servers_id_actions_enable_rescue` - Enable Rescue Mode for a Server
* `post_servers_id_actions_poweroff` - Power off a Server
* `post_servers_id_actions_poweron` - Power on a Server
* `post_servers_id_actions_reboot` - Soft-reboot a Server
* `post_servers_id_actions_rebuild` - Rebuild a Server from an Image
* `post_servers_id_actions_remove_from_placement_group` - Remove from Placement Group
* `post_servers_id_actions_request_console` - Request Console for a Server
* `post_servers_id_actions_reset` - Reset a Server
* `post_servers_id_actions_reset_password` - Reset root Password of a Server
* `post_servers_id_actions_shutdown` - Shutdown a Server

### Server Types

* `get_server_types` - Get all Server Types
* `get_server_types_id_` - Get a Server Type

### Servers

* `delete_servers_id_` - Delete a Server
* `get_servers` - Get all Servers
* `get_servers_id_` - Get a Server
* `get_servers_id_metrics` - Get Metrics for a Server
* `post_servers` - Create a Server
* `put_servers_id_` - Update a Server

### Volume Actions

* `get_volumes_id_actions` - Get all Actions for a Volume
* `get_volumes_id_actions_action_id_` - Get an Action for a Volume
* `post_volumes_id_actions_attach` - Attach Volume to a Server
* `post_volumes_id_actions_change_protection` - Change Volume Protection
* `post_volumes_id_actions_detach` - Detach Volume
* `post_volumes_id_actions_resize` - Resize Volume

### Volumes

* `delete_volumes_id_` - Delete a Volume
* `get_volumes` - Get all Volumes
* `get_volumes_id_` - Get a Volume
* `post_volumes` - Create a Volume
* `put_volumes_id_` - Update a Volume

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
