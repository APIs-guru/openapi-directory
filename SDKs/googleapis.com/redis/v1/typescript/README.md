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
import { RedisProjectsLocationsInstancesCreateRequest, RedisProjectsLocationsInstancesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RedisProjectsLocationsInstancesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "distinctio",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "corporis",
    alt: "media",
    callback: "necessitatibus",
    fields: "commodi",
    instanceId: "nulla",
    key: "quo",
    oauthToken: "aperiam",
    prettyPrint: false,
    quotaUser: "quasi",
    uploadType: "similique",
    uploadProtocol: "quod",
  },
  request: {
    alternativeLocationId: "et",
    authEnabled: false,
    authorizedNetwork: "est",
    connectMode: "PRIVATE_SERVICE_ACCESS",
    customerManagedKey: "et",
    displayName: "occaecati",
    labels: {
      "numquam": "quo",
      "dolor": "aspernatur",
      "officiis": "quo",
    },
    locationId: "at",
    maintenancePolicy: {
      description: "inventore",
      weeklyMaintenanceWindow: [
        {
          day: "DAY_OF_WEEK_UNSPECIFIED",
          startTime: {
            hours: 4589677787592018309,
            minutes: 4871412941294140056,
            nanos: 4695694551733737161,
            seconds: 1737807491654169512,
          },
        },
        {
          day: "SUNDAY",
          startTime: {
            hours: 6597343676242190148,
            minutes: 2077057246974141476,
            nanos: 6789962086798724761,
            seconds: 5773450730765709866,
          },
        },
      ],
    },
    maintenanceSchedule: {
      canReschedule: true,
    },
    memorySizeGb: 4466320768410931399,
    name: "nobis",
    persistenceConfig: {
      persistenceMode: "DISABLED",
      rdbSnapshotPeriod: "SIX_HOURS",
      rdbSnapshotStartTime: "distinctio",
    },
    readReplicasMode: "READ_REPLICAS_MODE_UNSPECIFIED",
    redisConfigs: {
      "voluptates": "dolores",
    },
    redisVersion: "veniam",
    replicaCount: 6344519173458084389,
    reservedIpRange: "quo",
    secondaryIpRange: "adipisci",
    suspensionReasons: [
      "SUSPENSION_REASON_UNSPECIFIED",
      "SUSPENSION_REASON_UNSPECIFIED",
    ],
    tier: "TIER_UNSPECIFIED",
    transitEncryptionMode: "DISABLED",
  },
};

sdk.projects.redisProjectsLocationsInstancesCreate(req).then((res: RedisProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `redisProjectsLocationsInstancesCreate` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesExport` - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesFailover` - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* `redisProjectsLocationsInstancesGetAuthString` - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* `redisProjectsLocationsInstancesImport` - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesList` - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* `redisProjectsLocationsInstancesPatch` - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesRescheduleMaintenance` - Reschedule maintenance for a given instance in a given project and location.
* `redisProjectsLocationsInstancesUpgrade` - Upgrades Redis instance to the newer Redis version specified in the request.
* `redisProjectsLocationsList` - Lists information about the supported locations for this service.
* `redisProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `redisProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `redisProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `redisProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
