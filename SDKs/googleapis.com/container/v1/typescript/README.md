# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ContainerProjectsAggregatedUsableSubnetworksListRequest, ContainerProjectsAggregatedUsableSubnetworksListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ContainerProjectsAggregatedUsableSubnetworksListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "omnis",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "hic",
    alt: "json",
    callback: "velit",
    fields: "temporibus",
    filter: "necessitatibus",
    key: "dignissimos",
    oauthToken: "inventore",
    pageSize: 152382936208986167,
    pageToken: "qui",
    prettyPrint: false,
    quotaUser: "aut",
    uploadType: "quis",
    uploadProtocol: "corrupti",
  },
};

sdk.projects.containerProjectsAggregatedUsableSubnetworksList(req).then((res: ContainerProjectsAggregatedUsableSubnetworksListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `containerProjectsAggregatedUsableSubnetworksList` - Lists subnetworks that are usable for creating clusters in a project.
* `containerProjectsLocationsClustersCompleteIpRotation` - Completes master IP rotation.
* `containerProjectsLocationsClustersCreate` - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* `containerProjectsLocationsClustersGetJwks` - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* `containerProjectsLocationsClustersList` - Lists all clusters owned by a project in either the specified zone or all zones.
* `containerProjectsLocationsClustersNodePoolsCompleteUpgrade` - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* `containerProjectsLocationsClustersNodePoolsCreate` - Creates a node pool for a cluster.
* `containerProjectsLocationsClustersNodePoolsDelete` - Deletes a node pool from a cluster.
* `containerProjectsLocationsClustersNodePoolsList` - Lists the node pools for a cluster.
* `containerProjectsLocationsClustersNodePoolsRollback` - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* `containerProjectsLocationsClustersNodePoolsSetAutoscaling` - Sets the autoscaling settings for the specified node pool.
* `containerProjectsLocationsClustersNodePoolsSetManagement` - Sets the NodeManagement options for a node pool.
* `containerProjectsLocationsClustersNodePoolsSetSize` - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* `containerProjectsLocationsClustersNodePoolsUpdate` - Updates the version and/or image type for the specified node pool.
* `containerProjectsLocationsClustersSetAddons` - Sets the addons for a specific cluster.
* `containerProjectsLocationsClustersSetLegacyAbac` - Enables or disables the ABAC authorization mechanism on a cluster.
* `containerProjectsLocationsClustersSetLocations` - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
* `containerProjectsLocationsClustersSetLogging` - Sets the logging service for a specific cluster.
* `containerProjectsLocationsClustersSetMaintenancePolicy` - Sets the maintenance policy for a cluster.
* `containerProjectsLocationsClustersSetMasterAuth` - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* `containerProjectsLocationsClustersSetMonitoring` - Sets the monitoring service for a specific cluster.
* `containerProjectsLocationsClustersSetNetworkPolicy` - Enables or disables Network Policy for a cluster.
* `containerProjectsLocationsClustersSetResourceLabels` - Sets labels on a cluster.
* `containerProjectsLocationsClustersStartIpRotation` - Starts master IP rotation.
* `containerProjectsLocationsClustersUpdateMaster` - Updates the master for a specific cluster.
* `containerProjectsLocationsClustersWellKnownGetOpenidConfiguration` - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
* `containerProjectsLocationsGetServerConfig` - Returns configuration info about the Google Kubernetes Engine service.
* `containerProjectsLocationsOperationsCancel` - Cancels the specified operation.
* `containerProjectsLocationsOperationsGet` - Gets the specified operation.
* `containerProjectsLocationsOperationsList` - Lists all operations in a project in a specific zone or all zones.
* `containerProjectsZonesClustersAddons` - Sets the addons for a specific cluster.
* `containerProjectsZonesClustersCompleteIpRotation` - Completes master IP rotation.
* `containerProjectsZonesClustersCreate` - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* `containerProjectsZonesClustersDelete` - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* `containerProjectsZonesClustersGet` - Gets the details of a specific cluster.
* `containerProjectsZonesClustersLegacyAbac` - Enables or disables the ABAC authorization mechanism on a cluster.
* `containerProjectsZonesClustersList` - Lists all clusters owned by a project in either the specified zone or all zones.
* `containerProjectsZonesClustersLocations` - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
* `containerProjectsZonesClustersLogging` - Sets the logging service for a specific cluster.
* `containerProjectsZonesClustersMaster` - Updates the master for a specific cluster.
* `containerProjectsZonesClustersMonitoring` - Sets the monitoring service for a specific cluster.
* `containerProjectsZonesClustersNodePoolsAutoscaling` - Sets the autoscaling settings for the specified node pool.
* `containerProjectsZonesClustersNodePoolsCreate` - Creates a node pool for a cluster.
* `containerProjectsZonesClustersNodePoolsDelete` - Deletes a node pool from a cluster.
* `containerProjectsZonesClustersNodePoolsGet` - Retrieves the requested node pool.
* `containerProjectsZonesClustersNodePoolsList` - Lists the node pools for a cluster.
* `containerProjectsZonesClustersNodePoolsRollback` - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* `containerProjectsZonesClustersNodePoolsSetManagement` - Sets the NodeManagement options for a node pool.
* `containerProjectsZonesClustersNodePoolsSetSize` - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* `containerProjectsZonesClustersNodePoolsUpdate` - Updates the version and/or image type for the specified node pool.
* `containerProjectsZonesClustersResourceLabels` - Sets labels on a cluster.
* `containerProjectsZonesClustersSetMaintenancePolicy` - Sets the maintenance policy for a cluster.
* `containerProjectsZonesClustersSetMasterAuth` - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* `containerProjectsZonesClustersSetNetworkPolicy` - Enables or disables Network Policy for a cluster.
* `containerProjectsZonesClustersStartIpRotation` - Starts master IP rotation.
* `containerProjectsZonesClustersUpdate` - Updates the settings of a specific cluster.
* `containerProjectsZonesGetServerconfig` - Returns configuration info about the Google Kubernetes Engine service.
* `containerProjectsZonesOperationsCancel` - Cancels the specified operation.
* `containerProjectsZonesOperationsGet` - Gets the specified operation.
* `containerProjectsZonesOperationsList` - Lists all operations in a project in a specific zone or all zones.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
