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
import { DatafusionProjectsLocationsInstancesCreateRequest, DatafusionProjectsLocationsInstancesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatafusionProjectsLocationsInstancesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "velit",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "nostrum",
    alt: "media",
    callback: "veritatis",
    fields: "quis",
    instanceId: "quidem",
    key: "ratione",
    oauthToken: "sed",
    prettyPrint: false,
    quotaUser: "enim",
    uploadType: "natus",
    uploadProtocol: "repudiandae",
  },
  request: {
    accelerators: [
      {
        acceleratorType: "CCAI_INSIGHTS",
        state: "STATE_UNSPECIFIED",
      },
      {
        acceleratorType: "CCAI_INSIGHTS",
        state: "ENABLED",
      },
    ],
    availableVersion: [
      {
        availableFeatures: [
          "sed",
        ],
        defaultVersion: true,
        type: "TYPE_UNSPECIFIED",
        versionNumber: "est",
      },
      {
        availableFeatures: [
          "dolores",
          "officia",
        ],
        defaultVersion: false,
        type: "TYPE_PREVIEW",
        versionNumber: "aut",
      },
      {
        availableFeatures: [
          "iure",
          "voluptatem",
          "modi",
        ],
        defaultVersion: false,
        type: "TYPE_UNSPECIFIED",
        versionNumber: "totam",
      },
    ],
    cryptoKeyConfig: {
      keyReference: "ea",
    },
    dataprocServiceAccount: "nisi",
    description: "dicta",
    displayName: "provident",
    enableRbac: false,
    enableStackdriverLogging: false,
    enableStackdriverMonitoring: false,
    eventPublishConfig: {
      enabled: true,
      topic: "mollitia",
    },
    labels: {
      "perferendis": "voluptatem",
      "et": "asperiores",
      "reprehenderit": "sequi",
    },
    networkConfig: {
      ipAllocation: "at",
      network: "ea",
    },
    options: {
      "facere": "veritatis",
    },
    privateInstance: true,
    type: "TYPE_UNSPECIFIED",
    version: "nostrum",
    zone: "minus",
  },
};

sdk.projects.datafusionProjectsLocationsInstancesCreate(req).then((res: DatafusionProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datafusionProjectsLocationsInstancesCreate` - Creates a new Data Fusion instance in the specified project and location.
* `datafusionProjectsLocationsInstancesDnsPeeringsCreate` - Creates DNS peering on the given resource.
* `datafusionProjectsLocationsInstancesDnsPeeringsList` - Lists DNS peerings for a given resource.
* `datafusionProjectsLocationsInstancesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datafusionProjectsLocationsInstancesList` - Lists Data Fusion instances in the specified project and location.
* `datafusionProjectsLocationsInstancesPatch` - Updates a single Data Fusion instance.
* `datafusionProjectsLocationsInstancesRestart` - Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
* `datafusionProjectsLocationsInstancesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datafusionProjectsLocationsInstancesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datafusionProjectsLocationsList` - Lists information about the supported locations for this service.
* `datafusionProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datafusionProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datafusionProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datafusionProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datafusionProjectsLocationsVersionsList` - Lists possible versions for Data Fusion instances in the specified project and location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
