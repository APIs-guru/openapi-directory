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
    
req = operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest(
    security=operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams(
        group="est",
    ),
    query_params=operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams(
        dollar_xgafv="1",
        access_token="consequatur",
        alt="proto",
        callback="cum",
        fields="repudiandae",
        key="sunt",
        oauth_token="vero",
        pretty_print=False,
        quota_user="voluptate",
        upload_type="saepe",
        upload_protocol="ut",
    ),
    request=shared.AddGroupMigrationRequest(
        migrating_vm="et",
    ),
)
    
res = s.projects.vmmigration_projects_locations_groups_add_group_migration(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `vmmigration_projects_locations_groups_add_group_migration` - Adds a MigratingVm to a Group.
* `vmmigration_projects_locations_groups_create` - Creates a new Group in a given project and location.
* `vmmigration_projects_locations_groups_list` - Lists Groups in a given project and location.
* `vmmigration_projects_locations_groups_remove_group_migration` - Removes a MigratingVm from a Group.
* `vmmigration_projects_locations_list` - Lists information about the supported locations for this service.
* `vmmigration_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `vmmigration_projects_locations_sources_create` - Creates a new Source in a given project and location.
* `vmmigration_projects_locations_sources_datacenter_connectors_create` - Creates a new DatacenterConnector in a given Source.
* `vmmigration_projects_locations_sources_datacenter_connectors_list` - Lists DatacenterConnectors in a given Source.
* `vmmigration_projects_locations_sources_datacenter_connectors_upgrade_appliance` - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* `vmmigration_projects_locations_sources_fetch_inventory` - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* `vmmigration_projects_locations_sources_list` - Lists Sources in a given project and location.
* `vmmigration_projects_locations_sources_migrating_vms_clone_jobs_create` - Initiates a Clone of a specific migrating VM.
* `vmmigration_projects_locations_sources_migrating_vms_clone_jobs_list` - Lists CloneJobs of a given migrating VM.
* `vmmigration_projects_locations_sources_migrating_vms_create` - Creates a new MigratingVm in a given Source.
* `vmmigration_projects_locations_sources_migrating_vms_cutover_jobs_cancel` - Initiates the cancellation of a running cutover job.
* `vmmigration_projects_locations_sources_migrating_vms_cutover_jobs_create` - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* `vmmigration_projects_locations_sources_migrating_vms_cutover_jobs_list` - Lists CutoverJobs of a given migrating VM.
* `vmmigration_projects_locations_sources_migrating_vms_finalize_migration` - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* `vmmigration_projects_locations_sources_migrating_vms_list` - Lists MigratingVms in a given Source.
* `vmmigration_projects_locations_sources_migrating_vms_pause_migration` - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* `vmmigration_projects_locations_sources_migrating_vms_replication_cycles_list` - Lists ReplicationCycles in a given MigratingVM.
* `vmmigration_projects_locations_sources_migrating_vms_resume_migration` - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* `vmmigration_projects_locations_sources_migrating_vms_start_migration` - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* `vmmigration_projects_locations_sources_utilization_reports_create` - Creates a new UtilizationReport.
* `vmmigration_projects_locations_sources_utilization_reports_list` - Lists Utilization Reports of the given Source.
* `vmmigration_projects_locations_target_projects_create` - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigration_projects_locations_target_projects_delete` - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigration_projects_locations_target_projects_get` - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigration_projects_locations_target_projects_list` - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigration_projects_locations_target_projects_patch` - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
