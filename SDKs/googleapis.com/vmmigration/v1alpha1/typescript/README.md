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
import { VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest, VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    group: "est",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "consequatur",
    alt: "proto",
    callback: "cum",
    fields: "repudiandae",
    key: "sunt",
    oauthToken: "vero",
    prettyPrint: false,
    quotaUser: "voluptate",
    uploadType: "saepe",
    uploadProtocol: "ut",
  },
  request: {
    migratingVm: "et",
  },
};

sdk.projects.vmmigrationProjectsLocationsGroupsAddGroupMigration(req).then((res: VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `vmmigrationProjectsLocationsGroupsAddGroupMigration` - Adds a MigratingVm to a Group.
* `vmmigrationProjectsLocationsGroupsCreate` - Creates a new Group in a given project and location.
* `vmmigrationProjectsLocationsGroupsList` - Lists Groups in a given project and location.
* `vmmigrationProjectsLocationsGroupsRemoveGroupMigration` - Removes a MigratingVm from a Group.
* `vmmigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `vmmigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `vmmigrationProjectsLocationsSourcesCreate` - Creates a new Source in a given project and location.
* `vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate` - Creates a new DatacenterConnector in a given Source.
* `vmmigrationProjectsLocationsSourcesDatacenterConnectorsList` - Lists DatacenterConnectors in a given Source.
* `vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance` - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* `vmmigrationProjectsLocationsSourcesFetchInventory` - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* `vmmigrationProjectsLocationsSourcesList` - Lists Sources in a given project and location.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate` - Initiates a Clone of a specific migrating VM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList` - Lists CloneJobs of a given migrating VM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCreate` - Creates a new MigratingVm in a given Source.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel` - Initiates the cancellation of a running cutover job.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate` - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* `vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList` - Lists CutoverJobs of a given migrating VM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration` - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* `vmmigrationProjectsLocationsSourcesMigratingVmsList` - Lists MigratingVms in a given Source.
* `vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration` - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* `vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList` - Lists ReplicationCycles in a given MigratingVM.
* `vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration` - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* `vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration` - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* `vmmigrationProjectsLocationsSourcesUtilizationReportsCreate` - Creates a new UtilizationReport.
* `vmmigrationProjectsLocationsSourcesUtilizationReportsList` - Lists Utilization Reports of the given Source.
* `vmmigrationProjectsLocationsTargetProjectsCreate` - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsDelete` - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsGet` - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsList` - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* `vmmigrationProjectsLocationsTargetProjectsPatch` - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
