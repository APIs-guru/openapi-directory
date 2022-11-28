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
    
    req := operations.BigtableadminOperationsCancelRequest{
        Security: operations.BigtableadminOperationsCancelSecurity{
            Option1: &operations.BigtableadminOperationsCancelSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.BigtableadminOperationsCancelPathParams{
            Name: "quis",
        },
        QueryParams: operations.BigtableadminOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "magnam",
            Alt: "media",
            Callback: "iste",
            Fields: "quasi",
            Key: "sed",
            OauthToken: "fuga",
            PrettyPrint: true,
            QuotaUser: "accusamus",
            UploadType: "sunt",
            UploadProtocol: "cupiditate",
        },
    }
    
    res, err := s.Operations.BigtableadminOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `BigtableadminOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `BigtableadminOperationsProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### projects

* `BigtableadminProjectsInstancesAppProfilesCreate` - Creates an app profile within an instance.
* `BigtableadminProjectsInstancesAppProfilesList` - Lists information about app profiles in an instance.
* `BigtableadminProjectsInstancesClustersBackupsCopy` - Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
* `BigtableadminProjectsInstancesClustersBackupsCreate` - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
* `BigtableadminProjectsInstancesClustersBackupsList` - Lists Cloud Bigtable backups. Returns both completed and pending backups.
* `BigtableadminProjectsInstancesClustersCreate` - Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* `BigtableadminProjectsInstancesClustersHotTabletsList` - Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
* `BigtableadminProjectsInstancesClustersList` - Lists information about clusters in an instance.
* `BigtableadminProjectsInstancesClustersUpdate` - Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
* `BigtableadminProjectsInstancesCreate` - Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* `BigtableadminProjectsInstancesList` - Lists information about instances in a project.
* `BigtableadminProjectsInstancesTablesCheckConsistency` - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
* `BigtableadminProjectsInstancesTablesCreate` - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
* `BigtableadminProjectsInstancesTablesDelete` - Permanently deletes a specified table and all of its data.
* `BigtableadminProjectsInstancesTablesDropRowRange` - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
* `BigtableadminProjectsInstancesTablesGenerateConsistencyToken` - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
* `BigtableadminProjectsInstancesTablesGetIamPolicy` - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
* `BigtableadminProjectsInstancesTablesList` - Lists all tables served from a specified instance.
* `BigtableadminProjectsInstancesTablesModifyColumnFamilies` - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
* `BigtableadminProjectsInstancesTablesPatch` - Updates a specified table.
* `BigtableadminProjectsInstancesTablesRestore` - Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
* `BigtableadminProjectsInstancesTablesSetIamPolicy` - Sets the access control policy on a Table resource. Replaces any existing policy.
* `BigtableadminProjectsInstancesTablesTestIamPermissions` - Returns permissions that the caller has on the specified table resource.
* `BigtableadminProjectsInstancesTablesUndelete` - Restores a specified table which was accidentally deleted.
* `BigtableadminProjectsLocationsGet` - Gets information about a location.
* `BigtableadminProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
