import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * containerProjectsAggregatedUsableSubnetworksList - Lists subnetworks that are usable for creating clusters in a project.
    **/
    containerProjectsAggregatedUsableSubnetworksList(req: operations.ContainerProjectsAggregatedUsableSubnetworksListRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsAggregatedUsableSubnetworksListResponse>;
    /**
     * containerProjectsLocationsClustersCompleteIpRotation - Completes master IP rotation.
    **/
    containerProjectsLocationsClustersCompleteIpRotation(req: operations.ContainerProjectsLocationsClustersCompleteIpRotationRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersCompleteIpRotationResponse>;
    /**
     * containerProjectsLocationsClustersCreate - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
    **/
    containerProjectsLocationsClustersCreate(req: operations.ContainerProjectsLocationsClustersCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersCreateResponse>;
    /**
     * containerProjectsLocationsClustersGetJwks - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
    **/
    containerProjectsLocationsClustersGetJwks(req: operations.ContainerProjectsLocationsClustersGetJwksRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersGetJwksResponse>;
    /**
     * containerProjectsLocationsClustersList - Lists all clusters owned by a project in either the specified zone or all zones.
    **/
    containerProjectsLocationsClustersList(req: operations.ContainerProjectsLocationsClustersListRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersListResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsCompleteUpgrade - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
    **/
    containerProjectsLocationsClustersNodePoolsCompleteUpgrade(req: operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsCreate - Creates a node pool for a cluster.
    **/
    containerProjectsLocationsClustersNodePoolsCreate(req: operations.ContainerProjectsLocationsClustersNodePoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsCreateResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsDelete - Deletes a node pool from a cluster.
    **/
    containerProjectsLocationsClustersNodePoolsDelete(req: operations.ContainerProjectsLocationsClustersNodePoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsDeleteResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsList - Lists the node pools for a cluster.
    **/
    containerProjectsLocationsClustersNodePoolsList(req: operations.ContainerProjectsLocationsClustersNodePoolsListRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsListResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsRollback - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
    **/
    containerProjectsLocationsClustersNodePoolsRollback(req: operations.ContainerProjectsLocationsClustersNodePoolsRollbackRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsRollbackResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsSetAutoscaling - Sets the autoscaling settings for the specified node pool.
    **/
    containerProjectsLocationsClustersNodePoolsSetAutoscaling(req: operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsSetManagement - Sets the NodeManagement options for a node pool.
    **/
    containerProjectsLocationsClustersNodePoolsSetManagement(req: operations.ContainerProjectsLocationsClustersNodePoolsSetManagementRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsSetManagementResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsSetSize - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
    **/
    containerProjectsLocationsClustersNodePoolsSetSize(req: operations.ContainerProjectsLocationsClustersNodePoolsSetSizeRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsSetSizeResponse>;
    /**
     * containerProjectsLocationsClustersNodePoolsUpdate - Updates the version and/or image type for the specified node pool.
    **/
    containerProjectsLocationsClustersNodePoolsUpdate(req: operations.ContainerProjectsLocationsClustersNodePoolsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsUpdateResponse>;
    /**
     * containerProjectsLocationsClustersSetAddons - Sets the addons for a specific cluster.
    **/
    containerProjectsLocationsClustersSetAddons(req: operations.ContainerProjectsLocationsClustersSetAddonsRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetAddonsResponse>;
    /**
     * containerProjectsLocationsClustersSetLegacyAbac - Enables or disables the ABAC authorization mechanism on a cluster.
    **/
    containerProjectsLocationsClustersSetLegacyAbac(req: operations.ContainerProjectsLocationsClustersSetLegacyAbacRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetLegacyAbacResponse>;
    /**
     * containerProjectsLocationsClustersSetLocations - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
    **/
    containerProjectsLocationsClustersSetLocations(req: operations.ContainerProjectsLocationsClustersSetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetLocationsResponse>;
    /**
     * containerProjectsLocationsClustersSetLogging - Sets the logging service for a specific cluster.
    **/
    containerProjectsLocationsClustersSetLogging(req: operations.ContainerProjectsLocationsClustersSetLoggingRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetLoggingResponse>;
    /**
     * containerProjectsLocationsClustersSetMaintenancePolicy - Sets the maintenance policy for a cluster.
    **/
    containerProjectsLocationsClustersSetMaintenancePolicy(req: operations.ContainerProjectsLocationsClustersSetMaintenancePolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetMaintenancePolicyResponse>;
    /**
     * containerProjectsLocationsClustersSetMasterAuth - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
    **/
    containerProjectsLocationsClustersSetMasterAuth(req: operations.ContainerProjectsLocationsClustersSetMasterAuthRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetMasterAuthResponse>;
    /**
     * containerProjectsLocationsClustersSetMonitoring - Sets the monitoring service for a specific cluster.
    **/
    containerProjectsLocationsClustersSetMonitoring(req: operations.ContainerProjectsLocationsClustersSetMonitoringRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetMonitoringResponse>;
    /**
     * containerProjectsLocationsClustersSetNetworkPolicy - Enables or disables Network Policy for a cluster.
    **/
    containerProjectsLocationsClustersSetNetworkPolicy(req: operations.ContainerProjectsLocationsClustersSetNetworkPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetNetworkPolicyResponse>;
    /**
     * containerProjectsLocationsClustersSetResourceLabels - Sets labels on a cluster.
    **/
    containerProjectsLocationsClustersSetResourceLabels(req: operations.ContainerProjectsLocationsClustersSetResourceLabelsRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetResourceLabelsResponse>;
    /**
     * containerProjectsLocationsClustersStartIpRotation - Starts master IP rotation.
    **/
    containerProjectsLocationsClustersStartIpRotation(req: operations.ContainerProjectsLocationsClustersStartIpRotationRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersStartIpRotationResponse>;
    /**
     * containerProjectsLocationsClustersUpdateMaster - Updates the master for a specific cluster.
    **/
    containerProjectsLocationsClustersUpdateMaster(req: operations.ContainerProjectsLocationsClustersUpdateMasterRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersUpdateMasterResponse>;
    /**
     * containerProjectsLocationsClustersWellKnownGetOpenidConfiguration - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
    **/
    containerProjectsLocationsClustersWellKnownGetOpenidConfiguration(req: operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse>;
    /**
     * containerProjectsLocationsGetServerConfig - Returns configuration info about the Google Kubernetes Engine service.
    **/
    containerProjectsLocationsGetServerConfig(req: operations.ContainerProjectsLocationsGetServerConfigRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsGetServerConfigResponse>;
    /**
     * containerProjectsLocationsOperationsCancel - Cancels the specified operation.
    **/
    containerProjectsLocationsOperationsCancel(req: operations.ContainerProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsOperationsCancelResponse>;
    /**
     * containerProjectsLocationsOperationsGet - Gets the specified operation.
    **/
    containerProjectsLocationsOperationsGet(req: operations.ContainerProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsOperationsGetResponse>;
    /**
     * containerProjectsLocationsOperationsList - Lists all operations in a project in a specific zone or all zones.
    **/
    containerProjectsLocationsOperationsList(req: operations.ContainerProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsOperationsListResponse>;
    /**
     * containerProjectsZonesClustersAddons - Sets the addons for a specific cluster.
    **/
    containerProjectsZonesClustersAddons(req: operations.ContainerProjectsZonesClustersAddonsRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersAddonsResponse>;
    /**
     * containerProjectsZonesClustersCompleteIpRotation - Completes master IP rotation.
    **/
    containerProjectsZonesClustersCompleteIpRotation(req: operations.ContainerProjectsZonesClustersCompleteIpRotationRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersCompleteIpRotationResponse>;
    /**
     * containerProjectsZonesClustersCreate - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
    **/
    containerProjectsZonesClustersCreate(req: operations.ContainerProjectsZonesClustersCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersCreateResponse>;
    /**
     * containerProjectsZonesClustersDelete - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
    **/
    containerProjectsZonesClustersDelete(req: operations.ContainerProjectsZonesClustersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersDeleteResponse>;
    /**
     * containerProjectsZonesClustersGet - Gets the details of a specific cluster.
    **/
    containerProjectsZonesClustersGet(req: operations.ContainerProjectsZonesClustersGetRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersGetResponse>;
    /**
     * containerProjectsZonesClustersLegacyAbac - Enables or disables the ABAC authorization mechanism on a cluster.
    **/
    containerProjectsZonesClustersLegacyAbac(req: operations.ContainerProjectsZonesClustersLegacyAbacRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersLegacyAbacResponse>;
    /**
     * containerProjectsZonesClustersList - Lists all clusters owned by a project in either the specified zone or all zones.
    **/
    containerProjectsZonesClustersList(req: operations.ContainerProjectsZonesClustersListRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersListResponse>;
    /**
     * containerProjectsZonesClustersLocations - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
    **/
    containerProjectsZonesClustersLocations(req: operations.ContainerProjectsZonesClustersLocationsRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersLocationsResponse>;
    /**
     * containerProjectsZonesClustersLogging - Sets the logging service for a specific cluster.
    **/
    containerProjectsZonesClustersLogging(req: operations.ContainerProjectsZonesClustersLoggingRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersLoggingResponse>;
    /**
     * containerProjectsZonesClustersMaster - Updates the master for a specific cluster.
    **/
    containerProjectsZonesClustersMaster(req: operations.ContainerProjectsZonesClustersMasterRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersMasterResponse>;
    /**
     * containerProjectsZonesClustersMonitoring - Sets the monitoring service for a specific cluster.
    **/
    containerProjectsZonesClustersMonitoring(req: operations.ContainerProjectsZonesClustersMonitoringRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersMonitoringResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsAutoscaling - Sets the autoscaling settings for the specified node pool.
    **/
    containerProjectsZonesClustersNodePoolsAutoscaling(req: operations.ContainerProjectsZonesClustersNodePoolsAutoscalingRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsAutoscalingResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsCreate - Creates a node pool for a cluster.
    **/
    containerProjectsZonesClustersNodePoolsCreate(req: operations.ContainerProjectsZonesClustersNodePoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsCreateResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsDelete - Deletes a node pool from a cluster.
    **/
    containerProjectsZonesClustersNodePoolsDelete(req: operations.ContainerProjectsZonesClustersNodePoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsDeleteResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsGet - Retrieves the requested node pool.
    **/
    containerProjectsZonesClustersNodePoolsGet(req: operations.ContainerProjectsZonesClustersNodePoolsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsGetResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsList - Lists the node pools for a cluster.
    **/
    containerProjectsZonesClustersNodePoolsList(req: operations.ContainerProjectsZonesClustersNodePoolsListRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsListResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsRollback - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
    **/
    containerProjectsZonesClustersNodePoolsRollback(req: operations.ContainerProjectsZonesClustersNodePoolsRollbackRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsRollbackResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsSetManagement - Sets the NodeManagement options for a node pool.
    **/
    containerProjectsZonesClustersNodePoolsSetManagement(req: operations.ContainerProjectsZonesClustersNodePoolsSetManagementRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsSetManagementResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsSetSize - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
    **/
    containerProjectsZonesClustersNodePoolsSetSize(req: operations.ContainerProjectsZonesClustersNodePoolsSetSizeRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsSetSizeResponse>;
    /**
     * containerProjectsZonesClustersNodePoolsUpdate - Updates the version and/or image type for the specified node pool.
    **/
    containerProjectsZonesClustersNodePoolsUpdate(req: operations.ContainerProjectsZonesClustersNodePoolsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsUpdateResponse>;
    /**
     * containerProjectsZonesClustersResourceLabels - Sets labels on a cluster.
    **/
    containerProjectsZonesClustersResourceLabels(req: operations.ContainerProjectsZonesClustersResourceLabelsRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersResourceLabelsResponse>;
    /**
     * containerProjectsZonesClustersSetMaintenancePolicy - Sets the maintenance policy for a cluster.
    **/
    containerProjectsZonesClustersSetMaintenancePolicy(req: operations.ContainerProjectsZonesClustersSetMaintenancePolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersSetMaintenancePolicyResponse>;
    /**
     * containerProjectsZonesClustersSetMasterAuth - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
    **/
    containerProjectsZonesClustersSetMasterAuth(req: operations.ContainerProjectsZonesClustersSetMasterAuthRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersSetMasterAuthResponse>;
    /**
     * containerProjectsZonesClustersSetNetworkPolicy - Enables or disables Network Policy for a cluster.
    **/
    containerProjectsZonesClustersSetNetworkPolicy(req: operations.ContainerProjectsZonesClustersSetNetworkPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersSetNetworkPolicyResponse>;
    /**
     * containerProjectsZonesClustersStartIpRotation - Starts master IP rotation.
    **/
    containerProjectsZonesClustersStartIpRotation(req: operations.ContainerProjectsZonesClustersStartIpRotationRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersStartIpRotationResponse>;
    /**
     * containerProjectsZonesClustersUpdate - Updates the settings of a specific cluster.
    **/
    containerProjectsZonesClustersUpdate(req: operations.ContainerProjectsZonesClustersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersUpdateResponse>;
    /**
     * containerProjectsZonesGetServerconfig - Returns configuration info about the Google Kubernetes Engine service.
    **/
    containerProjectsZonesGetServerconfig(req: operations.ContainerProjectsZonesGetServerconfigRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesGetServerconfigResponse>;
    /**
     * containerProjectsZonesOperationsCancel - Cancels the specified operation.
    **/
    containerProjectsZonesOperationsCancel(req: operations.ContainerProjectsZonesOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesOperationsCancelResponse>;
    /**
     * containerProjectsZonesOperationsGet - Gets the specified operation.
    **/
    containerProjectsZonesOperationsGet(req: operations.ContainerProjectsZonesOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesOperationsGetResponse>;
    /**
     * containerProjectsZonesOperationsList - Lists all operations in a project in a specific zone or all zones.
    **/
    containerProjectsZonesOperationsList(req: operations.ContainerProjectsZonesOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesOperationsListResponse>;
}
