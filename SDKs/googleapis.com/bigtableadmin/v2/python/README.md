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
    
req = operations.BigtableadminOperationsCancelRequest(
    security=operations.BigtableadminOperationsCancelSecurity(
        option1=operations.BigtableadminOperationsCancelSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.BigtableadminOperationsCancelPathParams(
        name="quis",
    ),
    query_params=operations.BigtableadminOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="magnam",
        alt="media",
        callback="iste",
        fields="quasi",
        key="sed",
        oauth_token="fuga",
        pretty_print=True,
        quota_user="accusamus",
        upload_type="sunt",
        upload_protocol="cupiditate",
    ),
)
    
res = s.operations.bigtableadmin_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `bigtableadmin_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `bigtableadmin_operations_projects_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### projects

* `bigtableadmin_projects_instances_app_profiles_create` - Creates an app profile within an instance.
* `bigtableadmin_projects_instances_app_profiles_list` - Lists information about app profiles in an instance.
* `bigtableadmin_projects_instances_clusters_backups_copy` - Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
* `bigtableadmin_projects_instances_clusters_backups_create` - Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
* `bigtableadmin_projects_instances_clusters_backups_list` - Lists Cloud Bigtable backups. Returns both completed and pending backups.
* `bigtableadmin_projects_instances_clusters_create` - Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* `bigtableadmin_projects_instances_clusters_hot_tablets_list` - Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
* `bigtableadmin_projects_instances_clusters_list` - Lists information about clusters in an instance.
* `bigtableadmin_projects_instances_clusters_update` - Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
* `bigtableadmin_projects_instances_create` - Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
* `bigtableadmin_projects_instances_list` - Lists information about instances in a project.
* `bigtableadmin_projects_instances_tables_check_consistency` - Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
* `bigtableadmin_projects_instances_tables_create` - Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
* `bigtableadmin_projects_instances_tables_delete` - Permanently deletes a specified table and all of its data.
* `bigtableadmin_projects_instances_tables_drop_row_range` - Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
* `bigtableadmin_projects_instances_tables_generate_consistency_token` - Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
* `bigtableadmin_projects_instances_tables_get_iam_policy` - Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.
* `bigtableadmin_projects_instances_tables_list` - Lists all tables served from a specified instance.
* `bigtableadmin_projects_instances_tables_modify_column_families` - Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
* `bigtableadmin_projects_instances_tables_patch` - Updates a specified table.
* `bigtableadmin_projects_instances_tables_restore` - Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
* `bigtableadmin_projects_instances_tables_set_iam_policy` - Sets the access control policy on a Table resource. Replaces any existing policy.
* `bigtableadmin_projects_instances_tables_test_iam_permissions` - Returns permissions that the caller has on the specified table resource.
* `bigtableadmin_projects_instances_tables_undelete` - Restores a specified table which was accidentally deleted.
* `bigtableadmin_projects_locations_get` - Gets information about a location.
* `bigtableadmin_projects_locations_list` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
