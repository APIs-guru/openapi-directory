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
    
req = operations.ContainerProjectsAggregatedUsableSubnetworksListRequest(
    security=operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ContainerProjectsAggregatedUsableSubnetworksListPathParams(
        parent="omnis",
    ),
    query_params=operations.ContainerProjectsAggregatedUsableSubnetworksListQueryParams(
        dollar_xgafv="2",
        access_token="hic",
        alt="json",
        callback="velit",
        fields="temporibus",
        filter="necessitatibus",
        key="dignissimos",
        oauth_token="inventore",
        page_size=152382936208986167,
        page_token="qui",
        pretty_print=False,
        quota_user="aut",
        upload_type="quis",
        upload_protocol="corrupti",
    ),
)
    
res = s.projects.container_projects_aggregated_usable_subnetworks_list(req)

if res.list_usable_subnetworks_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `container_projects_aggregated_usable_subnetworks_list` - Lists subnetworks that are usable for creating clusters in a project.
* `container_projects_locations_clusters_complete_ip_rotation` - Completes master IP rotation.
* `container_projects_locations_clusters_create` - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* `container_projects_locations_clusters_get_jwks` - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* `container_projects_locations_clusters_list` - Lists all clusters owned by a project in either the specified zone or all zones.
* `container_projects_locations_clusters_node_pools_complete_upgrade` - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* `container_projects_locations_clusters_node_pools_create` - Creates a node pool for a cluster.
* `container_projects_locations_clusters_node_pools_delete` - Deletes a node pool from a cluster.
* `container_projects_locations_clusters_node_pools_list` - Lists the node pools for a cluster.
* `container_projects_locations_clusters_node_pools_rollback` - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* `container_projects_locations_clusters_node_pools_set_autoscaling` - Sets the autoscaling settings for the specified node pool.
* `container_projects_locations_clusters_node_pools_set_management` - Sets the NodeManagement options for a node pool.
* `container_projects_locations_clusters_node_pools_set_size` - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* `container_projects_locations_clusters_node_pools_update` - Updates the version and/or image type for the specified node pool.
* `container_projects_locations_clusters_set_addons` - Sets the addons for a specific cluster.
* `container_projects_locations_clusters_set_legacy_abac` - Enables or disables the ABAC authorization mechanism on a cluster.
* `container_projects_locations_clusters_set_locations` - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
* `container_projects_locations_clusters_set_logging` - Sets the logging service for a specific cluster.
* `container_projects_locations_clusters_set_maintenance_policy` - Sets the maintenance policy for a cluster.
* `container_projects_locations_clusters_set_master_auth` - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* `container_projects_locations_clusters_set_monitoring` - Sets the monitoring service for a specific cluster.
* `container_projects_locations_clusters_set_network_policy` - Enables or disables Network Policy for a cluster.
* `container_projects_locations_clusters_set_resource_labels` - Sets labels on a cluster.
* `container_projects_locations_clusters_start_ip_rotation` - Starts master IP rotation.
* `container_projects_locations_clusters_update_master` - Updates the master for a specific cluster.
* `container_projects_locations_clusters_well_known_get_openid_configuration` - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
* `container_projects_locations_get_server_config` - Returns configuration info about the Google Kubernetes Engine service.
* `container_projects_locations_operations_cancel` - Cancels the specified operation.
* `container_projects_locations_operations_get` - Gets the specified operation.
* `container_projects_locations_operations_list` - Lists all operations in a project in a specific zone or all zones.
* `container_projects_zones_clusters_addons` - Sets the addons for a specific cluster.
* `container_projects_zones_clusters_complete_ip_rotation` - Completes master IP rotation.
* `container_projects_zones_clusters_create` - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* `container_projects_zones_clusters_delete` - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* `container_projects_zones_clusters_get` - Gets the details of a specific cluster.
* `container_projects_zones_clusters_legacy_abac` - Enables or disables the ABAC authorization mechanism on a cluster.
* `container_projects_zones_clusters_list` - Lists all clusters owned by a project in either the specified zone or all zones.
* `container_projects_zones_clusters_locations` - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
* `container_projects_zones_clusters_logging` - Sets the logging service for a specific cluster.
* `container_projects_zones_clusters_master` - Updates the master for a specific cluster.
* `container_projects_zones_clusters_monitoring` - Sets the monitoring service for a specific cluster.
* `container_projects_zones_clusters_node_pools_autoscaling` - Sets the autoscaling settings for the specified node pool.
* `container_projects_zones_clusters_node_pools_create` - Creates a node pool for a cluster.
* `container_projects_zones_clusters_node_pools_delete` - Deletes a node pool from a cluster.
* `container_projects_zones_clusters_node_pools_get` - Retrieves the requested node pool.
* `container_projects_zones_clusters_node_pools_list` - Lists the node pools for a cluster.
* `container_projects_zones_clusters_node_pools_rollback` - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* `container_projects_zones_clusters_node_pools_set_management` - Sets the NodeManagement options for a node pool.
* `container_projects_zones_clusters_node_pools_set_size` - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* `container_projects_zones_clusters_node_pools_update` - Updates the version and/or image type for the specified node pool.
* `container_projects_zones_clusters_resource_labels` - Sets labels on a cluster.
* `container_projects_zones_clusters_set_maintenance_policy` - Sets the maintenance policy for a cluster.
* `container_projects_zones_clusters_set_master_auth` - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* `container_projects_zones_clusters_set_network_policy` - Enables or disables Network Policy for a cluster.
* `container_projects_zones_clusters_start_ip_rotation` - Starts master IP rotation.
* `container_projects_zones_clusters_update` - Updates the settings of a specific cluster.
* `container_projects_zones_get_serverconfig` - Returns configuration info about the Google Kubernetes Engine service.
* `container_projects_zones_operations_cancel` - Cancels the specified operation.
* `container_projects_zones_operations_get` - Gets the specified operation.
* `container_projects_zones_operations_list` - Lists all operations in a project in a specific zone or all zones.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
