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
        bearer=shared.SchemeBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
res = s.sdk.circuits_choices_list()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `circuits_choices_list`
* `circuits_choices_read`
* `circuits_circuit_terminations_create`
* `circuits_circuit_terminations_delete`
* `circuits_circuit_terminations_list`
* `circuits_circuit_terminations_partial_update`
* `circuits_circuit_terminations_read`
* `circuits_circuit_terminations_update`
* `circuits_circuit_types_create`
* `circuits_circuit_types_delete`
* `circuits_circuit_types_list`
* `circuits_circuit_types_partial_update`
* `circuits_circuit_types_read`
* `circuits_circuit_types_update`
* `circuits_circuits_create`
* `circuits_circuits_delete`
* `circuits_circuits_list`
* `circuits_circuits_partial_update`
* `circuits_circuits_read`
* `circuits_circuits_update`
* `circuits_providers_create`
* `circuits_providers_delete`
* `circuits_providers_graphs` - A convenience method for rendering graphs for a particular provider.
* `circuits_providers_list`
* `circuits_providers_partial_update`
* `circuits_providers_read`
* `circuits_providers_update`
* `dcim_choices_list`
* `dcim_choices_read`
* `dcim_connected_device_list` - This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
via a protocol such as LLDP. Two query parameters must be included in the request:

* `peer_device`: The name of the peer device
* `peer_interface`: The name of the peer interface
* `dcim_console_connections_list`
* `dcim_console_port_templates_create`
* `dcim_console_port_templates_delete`
* `dcim_console_port_templates_list`
* `dcim_console_port_templates_partial_update`
* `dcim_console_port_templates_read`
* `dcim_console_port_templates_update`
* `dcim_console_ports_create`
* `dcim_console_ports_delete`
* `dcim_console_ports_list`
* `dcim_console_ports_partial_update`
* `dcim_console_ports_read`
* `dcim_console_ports_update`
* `dcim_console_server_port_templates_create`
* `dcim_console_server_port_templates_delete`
* `dcim_console_server_port_templates_list`
* `dcim_console_server_port_templates_partial_update`
* `dcim_console_server_port_templates_read`
* `dcim_console_server_port_templates_update`
* `dcim_console_server_ports_create`
* `dcim_console_server_ports_delete`
* `dcim_console_server_ports_list`
* `dcim_console_server_ports_partial_update`
* `dcim_console_server_ports_read`
* `dcim_console_server_ports_update`
* `dcim_device_bay_templates_create`
* `dcim_device_bay_templates_delete`
* `dcim_device_bay_templates_list`
* `dcim_device_bay_templates_partial_update`
* `dcim_device_bay_templates_read`
* `dcim_device_bay_templates_update`
* `dcim_device_bays_create`
* `dcim_device_bays_delete`
* `dcim_device_bays_list`
* `dcim_device_bays_partial_update`
* `dcim_device_bays_read`
* `dcim_device_bays_update`
* `dcim_device_roles_create`
* `dcim_device_roles_delete`
* `dcim_device_roles_list`
* `dcim_device_roles_partial_update`
* `dcim_device_roles_read`
* `dcim_device_roles_update`
* `dcim_device_types_create`
* `dcim_device_types_delete`
* `dcim_device_types_list`
* `dcim_device_types_partial_update`
* `dcim_device_types_read`
* `dcim_device_types_update`
* `dcim_devices_create`
* `dcim_devices_delete`
* `dcim_devices_list`
* `dcim_devices_napalm` - Execute a NAPALM method on a Device
* `dcim_devices_partial_update`
* `dcim_devices_read`
* `dcim_devices_update`
* `dcim_interface_connections_create`
* `dcim_interface_connections_delete`
* `dcim_interface_connections_list`
* `dcim_interface_connections_partial_update`
* `dcim_interface_connections_read`
* `dcim_interface_connections_update`
* `dcim_interface_templates_create`
* `dcim_interface_templates_delete`
* `dcim_interface_templates_list`
* `dcim_interface_templates_partial_update`
* `dcim_interface_templates_read`
* `dcim_interface_templates_update`
* `dcim_interfaces_create`
* `dcim_interfaces_delete`
* `dcim_interfaces_graphs` - A convenience method for rendering graphs for a particular interface.
* `dcim_interfaces_list`
* `dcim_interfaces_partial_update`
* `dcim_interfaces_read`
* `dcim_interfaces_update`
* `dcim_inventory_items_create`
* `dcim_inventory_items_delete`
* `dcim_inventory_items_list`
* `dcim_inventory_items_partial_update`
* `dcim_inventory_items_read`
* `dcim_inventory_items_update`
* `dcim_manufacturers_create`
* `dcim_manufacturers_delete`
* `dcim_manufacturers_list`
* `dcim_manufacturers_partial_update`
* `dcim_manufacturers_read`
* `dcim_manufacturers_update`
* `dcim_platforms_create`
* `dcim_platforms_delete`
* `dcim_platforms_list`
* `dcim_platforms_partial_update`
* `dcim_platforms_read`
* `dcim_platforms_update`
* `dcim_power_connections_list`
* `dcim_power_outlet_templates_create`
* `dcim_power_outlet_templates_delete`
* `dcim_power_outlet_templates_list`
* `dcim_power_outlet_templates_partial_update`
* `dcim_power_outlet_templates_read`
* `dcim_power_outlet_templates_update`
* `dcim_power_outlets_create`
* `dcim_power_outlets_delete`
* `dcim_power_outlets_list`
* `dcim_power_outlets_partial_update`
* `dcim_power_outlets_read`
* `dcim_power_outlets_update`
* `dcim_power_port_templates_create`
* `dcim_power_port_templates_delete`
* `dcim_power_port_templates_list`
* `dcim_power_port_templates_partial_update`
* `dcim_power_port_templates_read`
* `dcim_power_port_templates_update`
* `dcim_power_ports_create`
* `dcim_power_ports_delete`
* `dcim_power_ports_list`
* `dcim_power_ports_partial_update`
* `dcim_power_ports_read`
* `dcim_power_ports_update`
* `dcim_rack_groups_create`
* `dcim_rack_groups_delete`
* `dcim_rack_groups_list`
* `dcim_rack_groups_partial_update`
* `dcim_rack_groups_read`
* `dcim_rack_groups_update`
* `dcim_rack_reservations_create`
* `dcim_rack_reservations_delete`
* `dcim_rack_reservations_list`
* `dcim_rack_reservations_partial_update`
* `dcim_rack_reservations_read`
* `dcim_rack_reservations_update`
* `dcim_rack_roles_create`
* `dcim_rack_roles_delete`
* `dcim_rack_roles_list`
* `dcim_rack_roles_partial_update`
* `dcim_rack_roles_read`
* `dcim_rack_roles_update`
* `dcim_racks_create`
* `dcim_racks_delete`
* `dcim_racks_list`
* `dcim_racks_partial_update`
* `dcim_racks_read`
* `dcim_racks_units` - List rack units (by rack)
* `dcim_racks_update`
* `dcim_regions_create`
* `dcim_regions_delete`
* `dcim_regions_list`
* `dcim_regions_partial_update`
* `dcim_regions_read`
* `dcim_regions_update`
* `dcim_sites_create`
* `dcim_sites_delete`
* `dcim_sites_graphs` - A convenience method for rendering graphs for a particular site.
* `dcim_sites_list`
* `dcim_sites_partial_update`
* `dcim_sites_read`
* `dcim_sites_update`
* `dcim_virtual_chassis_create`
* `dcim_virtual_chassis_delete`
* `dcim_virtual_chassis_list`
* `dcim_virtual_chassis_partial_update`
* `dcim_virtual_chassis_read`
* `dcim_virtual_chassis_update`
* `extras_choices_list`
* `extras_choices_read`
* `extras_config_contexts_create`
* `extras_config_contexts_delete`
* `extras_config_contexts_list`
* `extras_config_contexts_partial_update`
* `extras_config_contexts_read`
* `extras_config_contexts_update`
* `extras_export_templates_create`
* `extras_export_templates_delete`
* `extras_export_templates_list`
* `extras_export_templates_partial_update`
* `extras_export_templates_read`
* `extras_export_templates_update`
* `extras_graphs_create`
* `extras_graphs_delete`
* `extras_graphs_list`
* `extras_graphs_partial_update`
* `extras_graphs_read`
* `extras_graphs_update`
* `extras_image_attachments_create`
* `extras_image_attachments_delete`
* `extras_image_attachments_list`
* `extras_image_attachments_partial_update`
* `extras_image_attachments_read`
* `extras_image_attachments_update`
* `extras_object_changes_list` - Retrieve a list of recent changes.
* `extras_object_changes_read` - Retrieve a list of recent changes.
* `extras_recent_activity_list`
* `extras_recent_activity_read`
* `extras_tags_create`
* `extras_tags_delete`
* `extras_tags_list`
* `extras_tags_partial_update`
* `extras_tags_read`
* `extras_tags_update`
* `extras_topology_maps_create`
* `extras_topology_maps_delete`
* `extras_topology_maps_list`
* `extras_topology_maps_partial_update`
* `extras_topology_maps_read`
* `extras_topology_maps_render`
* `extras_topology_maps_update`
* `ipam_choices_list`
* `ipam_choices_read`
* `ipam_aggregates_create`
* `ipam_aggregates_delete`
* `ipam_aggregates_list`
* `ipam_aggregates_partial_update`
* `ipam_aggregates_read`
* `ipam_aggregates_update`
* `ipam_ip_addresses_create`
* `ipam_ip_addresses_delete`
* `ipam_ip_addresses_list`
* `ipam_ip_addresses_partial_update`
* `ipam_ip_addresses_read`
* `ipam_ip_addresses_update`
* `ipam_prefixes_available_ips_create` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.
* `ipam_prefixes_available_ips_read` - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
however results will not be paginated.
* `ipam_prefixes_available_prefixes_create` - A convenience method for returning available child prefixes within a parent.
* `ipam_prefixes_available_prefixes_read` - A convenience method for returning available child prefixes within a parent.
* `ipam_prefixes_create`
* `ipam_prefixes_delete`
* `ipam_prefixes_list`
* `ipam_prefixes_partial_update`
* `ipam_prefixes_read`
* `ipam_prefixes_update`
* `ipam_rirs_create`
* `ipam_rirs_delete`
* `ipam_rirs_list`
* `ipam_rirs_partial_update`
* `ipam_rirs_read`
* `ipam_rirs_update`
* `ipam_roles_create`
* `ipam_roles_delete`
* `ipam_roles_list`
* `ipam_roles_partial_update`
* `ipam_roles_read`
* `ipam_roles_update`
* `ipam_services_create`
* `ipam_services_delete`
* `ipam_services_list`
* `ipam_services_partial_update`
* `ipam_services_read`
* `ipam_services_update`
* `ipam_vlan_groups_create`
* `ipam_vlan_groups_delete`
* `ipam_vlan_groups_list`
* `ipam_vlan_groups_partial_update`
* `ipam_vlan_groups_read`
* `ipam_vlan_groups_update`
* `ipam_vlans_create`
* `ipam_vlans_delete`
* `ipam_vlans_list`
* `ipam_vlans_partial_update`
* `ipam_vlans_read`
* `ipam_vlans_update`
* `ipam_vrfs_create`
* `ipam_vrfs_delete`
* `ipam_vrfs_list`
* `ipam_vrfs_partial_update`
* `ipam_vrfs_read`
* `ipam_vrfs_update`
* `secrets_choices_list`
* `secrets_choices_read`
* `secrets_generate_rsa_key_pair_list` - This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.

    {
        "public_key": "<public key>",
        "private_key": "<private key>"
    }
* `secrets_get_session_key_create` - Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
key is POSTed with the name `private_key`. An example:

    curl -v -X POST -H "Authorization: Token <token>" -H "Accept: application/json; indent=4" \
    --data-urlencode "private_key@<filename>" https://netbox/api/secrets/get-session-key/

This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:

    {
        "session_key": "+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf="
    }

This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
key will be returned instead of a new one.
* `secrets_secret_roles_create`
* `secrets_secret_roles_delete`
* `secrets_secret_roles_list`
* `secrets_secret_roles_partial_update`
* `secrets_secret_roles_read`
* `secrets_secret_roles_update`
* `secrets_secrets_create`
* `secrets_secrets_delete`
* `secrets_secrets_list`
* `secrets_secrets_partial_update`
* `secrets_secrets_read`
* `secrets_secrets_update`
* `tenancy_choices_list`
* `tenancy_choices_read`
* `tenancy_tenant_groups_create`
* `tenancy_tenant_groups_delete`
* `tenancy_tenant_groups_list`
* `tenancy_tenant_groups_partial_update`
* `tenancy_tenant_groups_read`
* `tenancy_tenant_groups_update`
* `tenancy_tenants_create`
* `tenancy_tenants_delete`
* `tenancy_tenants_list`
* `tenancy_tenants_partial_update`
* `tenancy_tenants_read`
* `tenancy_tenants_update`
* `virtualization_choices_list`
* `virtualization_choices_read`
* `virtualization_cluster_groups_create`
* `virtualization_cluster_groups_delete`
* `virtualization_cluster_groups_list`
* `virtualization_cluster_groups_partial_update`
* `virtualization_cluster_groups_read`
* `virtualization_cluster_groups_update`
* `virtualization_cluster_types_create`
* `virtualization_cluster_types_delete`
* `virtualization_cluster_types_list`
* `virtualization_cluster_types_partial_update`
* `virtualization_cluster_types_read`
* `virtualization_cluster_types_update`
* `virtualization_clusters_create`
* `virtualization_clusters_delete`
* `virtualization_clusters_list`
* `virtualization_clusters_partial_update`
* `virtualization_clusters_read`
* `virtualization_clusters_update`
* `virtualization_interfaces_create`
* `virtualization_interfaces_delete`
* `virtualization_interfaces_list`
* `virtualization_interfaces_partial_update`
* `virtualization_interfaces_read`
* `virtualization_interfaces_update`
* `virtualization_virtual_machines_create`
* `virtualization_virtual_machines_delete`
* `virtualization_virtual_machines_list`
* `virtualization_virtual_machines_partial_update`
* `virtualization_virtual_machines_read`
* `virtualization_virtual_machines_update`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
