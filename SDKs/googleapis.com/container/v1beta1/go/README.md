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
    s := sdk.New()
    
    req := operations.ContainerProjectsAggregatedUsableSubnetworksListRequest{
        Security: operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContainerProjectsAggregatedUsableSubnetworksListPathParams{
            Parent: "impedit",
        },
        QueryParams: operations.ContainerProjectsAggregatedUsableSubnetworksListQueryParams{
            DollarXgafv: "2",
            AccessToken: "ex",
            Alt: "media",
            Callback: "voluptatem",
            Fields: "et",
            Filter: "eos",
            Key: "ut",
            OauthToken: "natus",
            PageSize: 2548457878720010381,
            PageToken: "minus",
            PrettyPrint: false,
            QuotaUser: "harum",
            UploadType: "autem",
            UploadProtocol: "recusandae",
        },
    }
    
    res, err := s.Projects.ContainerProjectsAggregatedUsableSubnetworksList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsableSubnetworksResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ContainerProjectsAggregatedUsableSubnetworksList` - Lists subnetworks that can be used for creating clusters in a project.
* `ContainerProjectsLocationsClustersCompleteIPRotation` - Completes master IP rotation.
* `ContainerProjectsLocationsClustersCreate` - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* `ContainerProjectsLocationsClustersGetJwks` - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* `ContainerProjectsLocationsClustersList` - Lists all clusters owned by a project in either the specified zone or all zones.
* `ContainerProjectsLocationsClustersNodePoolsCompleteUpgrade` - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* `ContainerProjectsLocationsClustersNodePoolsCreate` - Creates a node pool for a cluster.
* `ContainerProjectsLocationsClustersNodePoolsDelete` - Deletes a node pool from a cluster.
* `ContainerProjectsLocationsClustersNodePoolsList` - Lists the node pools for a cluster.
* `ContainerProjectsLocationsClustersNodePoolsRollback` - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* `ContainerProjectsLocationsClustersNodePoolsSetAutoscaling` - Sets the autoscaling settings of a specific node pool.
* `ContainerProjectsLocationsClustersNodePoolsSetManagement` - Sets the NodeManagement options for a node pool.
* `ContainerProjectsLocationsClustersNodePoolsSetSize` - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* `ContainerProjectsLocationsClustersNodePoolsUpdate` - Updates the version and/or image type of a specific node pool.
* `ContainerProjectsLocationsClustersSetAddons` - Sets the addons for a specific cluster.
* `ContainerProjectsLocationsClustersSetLegacyAbac` - Enables or disables the ABAC authorization mechanism on a cluster.
* `ContainerProjectsLocationsClustersSetLocations` - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* `ContainerProjectsLocationsClustersSetLogging` - Sets the logging service for a specific cluster.
* `ContainerProjectsLocationsClustersSetMaintenancePolicy` - Sets the maintenance policy for a cluster.
* `ContainerProjectsLocationsClustersSetMasterAuth` - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* `ContainerProjectsLocationsClustersSetMonitoring` - Sets the monitoring service for a specific cluster.
* `ContainerProjectsLocationsClustersSetNetworkPolicy` - Enables or disables Network Policy for a cluster.
* `ContainerProjectsLocationsClustersSetResourceLabels` - Sets labels on a cluster.
* `ContainerProjectsLocationsClustersStartIPRotation` - Starts master IP rotation.
* `ContainerProjectsLocationsClustersUpdateMaster` - Updates the master for a specific cluster.
* `ContainerProjectsLocationsClustersWellKnownGetOpenidConfiguration` - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
* `ContainerProjectsLocationsGetServerConfig` - Returns configuration info about the Google Kubernetes Engine service.
* `ContainerProjectsLocationsList` - Fetches locations that offer Google Kubernetes Engine.
* `ContainerProjectsLocationsOperationsCancel` - Cancels the specified operation.
* `ContainerProjectsLocationsOperationsGet` - Gets the specified operation.
* `ContainerProjectsLocationsOperationsList` - Lists all operations in a project in the specified zone or all zones.
* `ContainerProjectsZonesClustersAddons` - Sets the addons for a specific cluster.
* `ContainerProjectsZonesClustersCompleteIPRotation` - Completes master IP rotation.
* `ContainerProjectsZonesClustersCreate` - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* `ContainerProjectsZonesClustersDelete` - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* `ContainerProjectsZonesClustersGet` - Gets the details for a specific cluster.
* `ContainerProjectsZonesClustersLegacyAbac` - Enables or disables the ABAC authorization mechanism on a cluster.
* `ContainerProjectsZonesClustersList` - Lists all clusters owned by a project in either the specified zone or all zones.
* `ContainerProjectsZonesClustersLocations` - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* `ContainerProjectsZonesClustersLogging` - Sets the logging service for a specific cluster.
* `ContainerProjectsZonesClustersMaster` - Updates the master for a specific cluster.
* `ContainerProjectsZonesClustersMonitoring` - Sets the monitoring service for a specific cluster.
* `ContainerProjectsZonesClustersNodePoolsAutoscaling` - Sets the autoscaling settings of a specific node pool.
* `ContainerProjectsZonesClustersNodePoolsCreate` - Creates a node pool for a cluster.
* `ContainerProjectsZonesClustersNodePoolsDelete` - Deletes a node pool from a cluster.
* `ContainerProjectsZonesClustersNodePoolsGet` - Retrieves the requested node pool.
* `ContainerProjectsZonesClustersNodePoolsList` - Lists the node pools for a cluster.
* `ContainerProjectsZonesClustersNodePoolsRollback` - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* `ContainerProjectsZonesClustersNodePoolsSetManagement` - Sets the NodeManagement options for a node pool.
* `ContainerProjectsZonesClustersNodePoolsSetSize` - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* `ContainerProjectsZonesClustersNodePoolsUpdate` - Updates the version and/or image type of a specific node pool.
* `ContainerProjectsZonesClustersResourceLabels` - Sets labels on a cluster.
* `ContainerProjectsZonesClustersSetMaintenancePolicy` - Sets the maintenance policy for a cluster.
* `ContainerProjectsZonesClustersSetMasterAuth` - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* `ContainerProjectsZonesClustersSetNetworkPolicy` - Enables or disables Network Policy for a cluster.
* `ContainerProjectsZonesClustersStartIPRotation` - Starts master IP rotation.
* `ContainerProjectsZonesClustersUpdate` - Updates the settings for a specific cluster.
* `ContainerProjectsZonesGetServerconfig` - Returns configuration info about the Google Kubernetes Engine service.
* `ContainerProjectsZonesOperationsCancel` - Cancels the specified operation.
* `ContainerProjectsZonesOperationsGet` - Gets the specified operation.
* `ContainerProjectsZonesOperationsList` - Lists all operations in a project in the specified zone or all zones.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
