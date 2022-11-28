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
import { NotebooksProjectsLocationsEnvironmentsCreateRequest, NotebooksProjectsLocationsEnvironmentsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NotebooksProjectsLocationsEnvironmentsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "tempora",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "ipsum",
    alt: "media",
    callback: "fugiat",
    environmentId: "magnam",
    fields: "porro",
    key: "eos",
    oauthToken: "consequatur",
    prettyPrint: false,
    quotaUser: "laudantium",
    uploadType: "officia",
    uploadProtocol: "quidem",
  },
  request: {
    containerImage: {
      repository: "voluptatem",
      tag: "nesciunt",
    },
    description: "provident",
    displayName: "perferendis",
    postStartupScript: "suscipit",
    vmImage: {
      imageFamily: "sunt",
      imageName: "aut",
      project: "non",
    },
  },
};

sdk.projects.notebooksProjectsLocationsEnvironmentsCreate(req).then((res: NotebooksProjectsLocationsEnvironmentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `notebooksProjectsLocationsEnvironmentsCreate` - Creates a new Environment.
* `notebooksProjectsLocationsEnvironmentsList` - Lists environments in a project.
* `notebooksProjectsLocationsExecutionsCreate` - Creates a new Execution in a given project and location.
* `notebooksProjectsLocationsExecutionsList` - Lists executions in a given project and location
* `notebooksProjectsLocationsInstancesCreate` - Creates a new Instance in a given project and location.
* `notebooksProjectsLocationsInstancesGetInstanceHealth` - Check if a notebook instance is healthy.
* `notebooksProjectsLocationsInstancesIsUpgradeable` - Check if a notebook instance is upgradable.
* `notebooksProjectsLocationsInstancesList` - Lists instances in a given project and location.
* `notebooksProjectsLocationsInstancesRegister` - Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
* `notebooksProjectsLocationsInstancesReport` - Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
* `notebooksProjectsLocationsInstancesRollback` - Rollbacks a notebook instance to the previous version.
* `notebooksProjectsLocationsInstancesSetAccelerator` - Updates the guest accelerators of a single Instance.
* `notebooksProjectsLocationsInstancesSetLabels` - Replaces all the labels of an Instance.
* `notebooksProjectsLocationsInstancesSetMachineType` - Updates the machine type of a single Instance.
* `notebooksProjectsLocationsInstancesUpdateConfig` - Update Notebook Instance configurations.
* `notebooksProjectsLocationsInstancesUpdateMetadataItems` - Add/update metadata items for an instance.
* `notebooksProjectsLocationsInstancesUpdateShieldedInstanceConfig` - Updates the Shielded instance configuration of a single Instance.
* `notebooksProjectsLocationsInstancesUpgradeInternal` - Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
* `notebooksProjectsLocationsList` - Lists information about the supported locations for this service.
* `notebooksProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `notebooksProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `notebooksProjectsLocationsRuntimesCreate` - Creates a new Runtime in a given project and location.
* `notebooksProjectsLocationsRuntimesDiagnose` - Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
* `notebooksProjectsLocationsRuntimesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `notebooksProjectsLocationsRuntimesList` - Lists Runtimes in a given project and location.
* `notebooksProjectsLocationsRuntimesPatch` - Update Notebook Runtime configuration.
* `notebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternal` - Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
* `notebooksProjectsLocationsRuntimesReportEvent` - Report and process a runtime event.
* `notebooksProjectsLocationsRuntimesReset` - Resets a Managed Notebook Runtime.
* `notebooksProjectsLocationsRuntimesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `notebooksProjectsLocationsRuntimesStart` - Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* `notebooksProjectsLocationsRuntimesStop` - Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
* `notebooksProjectsLocationsRuntimesSwitch` - Switch a Managed Notebook Runtime.
* `notebooksProjectsLocationsRuntimesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `notebooksProjectsLocationsRuntimesUpgrade` - Upgrades a Managed Notebook Runtime to the latest version.
* `notebooksProjectsLocationsSchedulesCreate` - Creates a new Scheduled Notebook in a given project and location.
* `notebooksProjectsLocationsSchedulesDelete` - Deletes schedule and all underlying jobs
* `notebooksProjectsLocationsSchedulesGet` - Gets details of schedule
* `notebooksProjectsLocationsSchedulesList` - Lists schedules in a given project and location.
* `notebooksProjectsLocationsSchedulesTrigger` - Triggers execution of an existing schedule.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
