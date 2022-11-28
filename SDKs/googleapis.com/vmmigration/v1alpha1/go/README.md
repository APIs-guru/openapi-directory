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
    
    req := operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest{
        Security: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams{
            Group: "est",
        },
        QueryParams: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequatur",
            Alt: "proto",
            Callback: "cum",
            Fields: "repudiandae",
            Key: "sunt",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "voluptate",
            UploadType: "saepe",
            UploadProtocol: "ut",
        },
        Request: &shared.AddGroupMigrationRequest{
            MigratingVM: "et",
        },
    }
    
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsAddGroupMigration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `VmmigrationProjectsLocationsGroupsAddGroupMigration` - Adds a MigratingVm to a Group.
* `VmmigrationProjectsLocationsGroupsCreate` - Creates a new Group in a given project and location.
* `VmmigrationProjectsLocationsGroupsList` - Lists Groups in a given project and location.
* `VmmigrationProjectsLocationsGroupsRemoveGroupMigration` - Removes a MigratingVm from a Group.
* `VmmigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `VmmigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `VmmigrationProjectsLocationsSourcesCreate` - Creates a new Source in a given project and location.
* `VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate` - Creates a new DatacenterConnector in a given Source.
* `VmmigrationProjectsLocationsSourcesDatacenterConnectorsList` - Lists DatacenterConnectors in a given Source.
* `VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance` - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* `VmmigrationProjectsLocationsSourcesFetchInventory` - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* `VmmigrationProjectsLocationsSourcesList` - Lists Sources in a given project and location.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate` - Initiates a Clone of a specific migrating VM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList` - Lists CloneJobs of a given migrating VM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCreate` - Creates a new MigratingVm in a given Source.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel` - Initiates the cancellation of a running cutover job.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate` - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* `VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList` - Lists CutoverJobs of a given migrating VM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration` - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* `VmmigrationProjectsLocationsSourcesMigratingVmsList` - Lists MigratingVms in a given Source.
* `VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration` - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* `VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList` - Lists ReplicationCycles in a given MigratingVM.
* `VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration` - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* `VmmigrationProjectsLocationsSourcesMigratingVmsStartMigration` - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* `VmmigrationProjectsLocationsSourcesUtilizationReportsCreate` - Creates a new UtilizationReport.
* `VmmigrationProjectsLocationsSourcesUtilizationReportsList` - Lists Utilization Reports of the given Source.
* `VmmigrationProjectsLocationsTargetProjectsCreate` - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsDelete` - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsGet` - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsList` - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `VmmigrationProjectsLocationsTargetProjectsPatch` - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
