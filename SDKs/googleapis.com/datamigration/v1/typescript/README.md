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
import { DatamigrationProjectsLocationsConnectionProfilesCreateRequest, DatamigrationProjectsLocationsConnectionProfilesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatamigrationProjectsLocationsConnectionProfilesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "nam",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "cumque",
    alt: "json",
    callback: "repellendus",
    connectionProfileId: "cumque",
    fields: "iste",
    key: "asperiores",
    oauthToken: "ut",
    prettyPrint: true,
    quotaUser: "tenetur",
    requestId: "impedit",
    uploadType: "aut",
    uploadProtocol: "sit",
  },
  request: {
    alloydb: {
      clusterId: "ullam",
      settings: {
        initialUser: {
          password: "voluptas",
          user: "mollitia",
        },
        labels: {
          "voluptatem": "libero",
          "et": "velit",
          "rerum": "totam",
        },
        primaryInstanceSettings: {
          databaseFlags: {
            "libero": "est",
          },
          id: "eum",
          labels: {
            "quo": "enim",
            "enim": "reprehenderit",
          },
          machineConfig: {
            cpuCount: 3452497793287034363,
          },
        },
        vpcNetwork: "deleniti",
      },
    },
    cloudsql: {
      settings: {
        activationPolicy: "SQL_ACTIVATION_POLICY_UNSPECIFIED",
        autoStorageIncrease: false,
        availabilityType: "ZONAL",
        cmekKeyName: "quo",
        collation: "ad",
        dataDiskSizeGb: "ad",
        dataDiskType: "SQL_DATA_DISK_TYPE_UNSPECIFIED",
        databaseFlags: {
          "maiores": "soluta",
        },
        databaseVersion: "POSTGRES_14",
        ipConfig: {
          authorizedNetworks: [
            {
              expireTime: "officiis",
              label: "veritatis",
              ttl: "fugit",
              value: "id",
            },
            {
              expireTime: "rerum",
              label: "alias",
              ttl: "enim",
              value: "cupiditate",
            },
          ],
          enableIpv4: true,
          privateNetwork: "et",
          requireSsl: false,
        },
        rootPassword: "inventore",
        secondaryZone: "voluptas",
        sourceId: "cumque",
        storageAutoResizeLimit: "velit",
        tier: "voluptatem",
        userLabels: {
          "cum": "ratione",
          "ab": "eius",
          "et": "consequatur",
        },
        zone: "quasi",
      },
    },
    displayName: "placeat",
    error: {
      code: 4808249340027072444,
      details: [
        {
          "quia": "possimus",
          "sit": "nostrum",
        },
      ],
      message: "nesciunt",
    },
    labels: {
      "quae": "modi",
      "incidunt": "ad",
    },
    mysql: {
      cloudSqlId: "animi",
      host: "iusto",
      password: "laudantium",
      port: 5783816651593308386,
      ssl: {
        caCertificate: "ea",
        clientCertificate: "facilis",
        clientKey: "vitae",
      },
      username: "consequatur",
    },
    name: "atque",
    postgresql: {
      cloudSqlId: "pariatur",
      host: "beatae",
      password: "et",
      port: 6051945376604600617,
      ssl: {
        caCertificate: "occaecati",
        clientCertificate: "quo",
        clientKey: "totam",
      },
      username: "in",
    },
    provider: "AURORA",
    state: "DELETED",
  },
};

sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req).then((res: DatamigrationProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datamigrationProjectsLocationsConnectionProfilesCreate` - Creates a new connection profile in a given project and location.
* `datamigrationProjectsLocationsConnectionProfilesList` - Retrieves a list of all connection profiles in a given project and location.
* `datamigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `datamigrationProjectsLocationsMigrationJobsCreate` - Creates a new migration job in a given project and location.
* `datamigrationProjectsLocationsMigrationJobsGenerateSshScript` - Generate a SSH configuration script to configure the reverse SSH connectivity.
* `datamigrationProjectsLocationsMigrationJobsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datamigrationProjectsLocationsMigrationJobsList` - Lists migration jobs in a given project and location.
* `datamigrationProjectsLocationsMigrationJobsPatch` - Updates the parameters of a single migration job.
* `datamigrationProjectsLocationsMigrationJobsPromote` - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* `datamigrationProjectsLocationsMigrationJobsRestart` - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* `datamigrationProjectsLocationsMigrationJobsResume` - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* `datamigrationProjectsLocationsMigrationJobsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datamigrationProjectsLocationsMigrationJobsStart` - Start an already created migration job.
* `datamigrationProjectsLocationsMigrationJobsStop` - Stops a running migration job.
* `datamigrationProjectsLocationsMigrationJobsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datamigrationProjectsLocationsMigrationJobsVerify` - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* `datamigrationProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datamigrationProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datamigrationProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
