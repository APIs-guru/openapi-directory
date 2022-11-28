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
    
req = operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest(
    security=operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams(
        parent="placeat",
    ),
    query_params=operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams(
        dollar_xgafv="2",
        access_token="vero",
        alt="media",
        backup_id="sed",
        callback="aut",
        fields="voluptas",
        key="debitis",
        oauth_token="reprehenderit",
        pretty_print=False,
        quota_user="maxime",
        upload_type="et",
        upload_protocol="sit",
    ),
    request=shared.BackupInput(
        cluster_metadata=shared.ClusterMetadata(
            anthos_version="voluptas",
            backup_crd_versions={
                "perspiciatis": "nihil",
                "et": "est",
                "debitis": "qui",
            },
            cluster="sed",
            gke_version="animi",
            k8s_version="rerum",
        ),
        delete_lock_days=303880974147249365,
        description="provident",
        encryption_key=shared.EncryptionKey(
            gcp_kms_encryption_key="qui",
        ),
        labels={
            "et": "molestiae",
            "perferendis": "vel",
        },
        retain_days=4896749636161315584,
        selected_applications=shared.NamespacedNames(
            namespaced_names=[
                shared.NamespacedName(
                    name="dolorem",
                    namespace="aut",
                ),
                shared.NamespacedName(
                    name="saepe",
                    namespace="quas",
                ),
                shared.NamespacedName(
                    name="repudiandae",
                    namespace="similique",
                ),
            ],
        ),
        selected_namespaces=shared.Namespaces(
            namespaces=[
                "distinctio",
            ],
        ),
    ),
)
    
res = s.projects.gkebackup_projects_locations_backup_plans_backups_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `gkebackup_projects_locations_backup_plans_backups_create` - Creates a Backup for the given BackupPlan.
* `gkebackup_projects_locations_backup_plans_backups_list` - Lists the Backups for a given BackupPlan.
* `gkebackup_projects_locations_backup_plans_backups_volume_backups_list` - Lists the VolumeBackups for a given Backup.
* `gkebackup_projects_locations_backup_plans_create` - Creates a new BackupPlan in a given location.
* `gkebackup_projects_locations_backup_plans_list` - Lists BackupPlans in a given location.
* `gkebackup_projects_locations_delete_operations` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkebackup_projects_locations_list` - Lists information about the supported locations for this service.
* `gkebackup_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkebackup_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `gkebackup_projects_locations_restore_plans_create` - Creates a new RestorePlan in a given location.
* `gkebackup_projects_locations_restore_plans_list` - Lists RestorePlans in a given location.
* `gkebackup_projects_locations_restore_plans_restores_create` - Creates a new Restore for the given RestorePlan.
* `gkebackup_projects_locations_restore_plans_restores_delete` - Deletes an existing Restore.
* `gkebackup_projects_locations_restore_plans_restores_list` - Lists the Restores for a given RestorePlan.
* `gkebackup_projects_locations_restore_plans_restores_patch` - Update a Restore.
* `gkebackup_projects_locations_restore_plans_restores_volume_restores_get` - Retrieve the details of a single VolumeRestore.
* `gkebackup_projects_locations_restore_plans_restores_volume_restores_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkebackup_projects_locations_restore_plans_restores_volume_restores_list` - Lists the VolumeRestores for a given Restore.
* `gkebackup_projects_locations_restore_plans_restores_volume_restores_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkebackup_projects_locations_restore_plans_restores_volume_restores_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
