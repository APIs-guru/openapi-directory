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
import { NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest, NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "dolorem",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "sed",
    alt: "media",
    callback: "ea",
    fields: "ex",
    hubId: "consequatur",
    key: "dolorum",
    oauthToken: "debitis",
    prettyPrint: false,
    quotaUser: "eligendi",
    requestId: "laboriosam",
    uploadType: "est",
    uploadProtocol: "et",
  },
  request: {
    description: "molestias",
    labels: {
      "ut": "omnis",
      "similique": "totam",
      "ullam": "et",
    },
    name: "dolorem",
    routingVpcs: [
      {
        uri: "sint",
      },
      {
        uri: "dolore",
      },
      {
        uri: "maiores",
      },
    ],
  },
};

sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req).then((res: NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networkconnectivityProjectsLocationsGlobalHubsCreate` - Creates a new Network Connectivity Center hub in the specified project.
* `networkconnectivityProjectsLocationsGlobalHubsList` - Lists the Network Connectivity Center hubs associated with a given project.
* `networkconnectivityProjectsLocationsInternalRangesCreate` - Creates a new InternalRange in a given project and location.
* `networkconnectivityProjectsLocationsInternalRangesList` - Lists InternalRanges in a given project and location.
* `networkconnectivityProjectsLocationsList` - Lists information about the supported locations for this service.
* `networkconnectivityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networkconnectivityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networkconnectivityProjectsLocationsSpokesCreate` - Creates a Network Connectivity Center spoke.
* `networkconnectivityProjectsLocationsSpokesDelete` - Deletes a Network Connectivity Center spoke.
* `networkconnectivityProjectsLocationsSpokesGet` - Gets details about a Network Connectivity Center spoke.
* `networkconnectivityProjectsLocationsSpokesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networkconnectivityProjectsLocationsSpokesList` - Lists the Network Connectivity Center spokes in a specified project and location.
* `networkconnectivityProjectsLocationsSpokesPatch` - Updates the parameters of a Network Connectivity Center spoke.
* `networkconnectivityProjectsLocationsSpokesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networkconnectivityProjectsLocationsSpokesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
