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
import { GkebackupProjectsLocationsBackupPlansBackupsCreateRequest, GkebackupProjectsLocationsBackupPlansBackupsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GkebackupProjectsLocationsBackupPlansBackupsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "placeat",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "vero",
    alt: "media",
    backupId: "sed",
    callback: "aut",
    fields: "voluptas",
    key: "debitis",
    oauthToken: "reprehenderit",
    prettyPrint: false,
    quotaUser: "maxime",
    uploadType: "et",
    uploadProtocol: "sit",
  },
  request: {
    clusterMetadata: {
      anthosVersion: "voluptas",
      backupCrdVersions: {
        "perspiciatis": "nihil",
        "et": "est",
        "debitis": "qui",
      },
      cluster: "sed",
      gkeVersion: "animi",
      k8sVersion: "rerum",
    },
    deleteLockDays: 303880974147249365,
    description: "provident",
    encryptionKey: {
      gcpKmsEncryptionKey: "qui",
    },
    labels: {
      "et": "molestiae",
      "perferendis": "vel",
    },
    retainDays: 4896749636161315584,
    selectedApplications: {
      namespacedNames: [
        {
          name: "dolorem",
          namespace: "aut",
        },
        {
          name: "saepe",
          namespace: "quas",
        },
        {
          name: "repudiandae",
          namespace: "similique",
        },
      ],
    },
    selectedNamespaces: {
      namespaces: [
        "distinctio",
      ],
    },
  },
};

sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req).then((res: GkebackupProjectsLocationsBackupPlansBackupsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `gkebackupProjectsLocationsBackupPlansBackupsCreate` - Creates a Backup for the given BackupPlan.
* `gkebackupProjectsLocationsBackupPlansBackupsList` - Lists the Backups for a given BackupPlan.
* `gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList` - Lists the VolumeBackups for a given Backup.
* `gkebackupProjectsLocationsBackupPlansCreate` - Creates a new BackupPlan in a given location.
* `gkebackupProjectsLocationsBackupPlansList` - Lists BackupPlans in a given location.
* `gkebackupProjectsLocationsDeleteOperations` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkebackupProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkebackupProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkebackupProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `gkebackupProjectsLocationsRestorePlansCreate` - Creates a new RestorePlan in a given location.
* `gkebackupProjectsLocationsRestorePlansList` - Lists RestorePlans in a given location.
* `gkebackupProjectsLocationsRestorePlansRestoresCreate` - Creates a new Restore for the given RestorePlan.
* `gkebackupProjectsLocationsRestorePlansRestoresDelete` - Deletes an existing Restore.
* `gkebackupProjectsLocationsRestorePlansRestoresList` - Lists the Restores for a given RestorePlan.
* `gkebackupProjectsLocationsRestorePlansRestoresPatch` - Update a Restore.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet` - Retrieve the details of a single VolumeRestore.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList` - Lists the VolumeRestores for a given Restore.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
