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
import { NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest, NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sunt",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "odit",
    alt: "proto",
    authorizationPolicyId: "et",
    callback: "vel",
    fields: "quae",
    key: "aspernatur",
    oauthToken: "error",
    prettyPrint: false,
    quotaUser: "a",
    uploadType: "omnis",
    uploadProtocol: "nostrum",
  },
  request: {
    action: "DENY",
    description: "et",
    labels: {
      "aut": "animi",
      "dolores": "placeat",
      "occaecati": "doloribus",
    },
    name: "adipisci",
    rules: [
      {
        destinations: [
          {
            hosts: [
              "accusantium",
              "assumenda",
            ],
            httpHeaderMatch: {
              headerName: "amet",
              regexMatch: "culpa",
            },
            methods: [
              "est",
            ],
            ports: [
              3094887997718014353,
            ],
          },
          {
            hosts: [
              "rem",
            ],
            httpHeaderMatch: {
              headerName: "et",
              regexMatch: "accusantium",
            },
            methods: [
              "reprehenderit",
              "neque",
            ],
            ports: [
              2947460363222143838,
              8830944403013891383,
            ],
          },
          {
            hosts: [
              "dolorum",
              "et",
              "atque",
            ],
            httpHeaderMatch: {
              headerName: "iure",
              regexMatch: "repudiandae",
            },
            methods: [
              "quae",
              "eum",
            ],
            ports: [
              5668318127090690829,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "vitae",
              "repudiandae",
              "facilis",
            ],
            principals: [
              "aut",
              "quibusdam",
              "delectus",
            ],
          },
          {
            ipBlocks: [
              "enim",
            ],
            principals: [
              "voluptates",
              "nam",
              "aut",
            ],
          },
          {
            ipBlocks: [
              "omnis",
              "possimus",
            ],
            principals: [
              "quasi",
            ],
          },
        ],
      },
      {
        destinations: [
          {
            hosts: [
              "praesentium",
              "quas",
              "consequatur",
            ],
            httpHeaderMatch: {
              headerName: "nulla",
              regexMatch: "ut",
            },
            methods: [
              "voluptatem",
              "ad",
            ],
            ports: [
              1055283062987230859,
              6260300121941604790,
            ],
          },
          {
            hosts: [
              "architecto",
              "est",
              "et",
            ],
            httpHeaderMatch: {
              headerName: "aliquam",
              regexMatch: "praesentium",
            },
            methods: [
              "maxime",
              "ut",
            ],
            ports: [
              2764710142788548971,
            ],
          },
          {
            hosts: [
              "ipsa",
            ],
            httpHeaderMatch: {
              headerName: "rem",
              regexMatch: "inventore",
            },
            methods: [
              "incidunt",
            ],
            ports: [
              1236303082765211796,
              1514040532654582993,
              5574152755078767765,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "aut",
              "unde",
            ],
            principals: [
              "velit",
              "voluptas",
              "magnam",
            ],
          },
          {
            ipBlocks: [
              "et",
            ],
            principals: [
              "aperiam",
              "iste",
            ],
          },
        ],
      },
      {
        destinations: [
          {
            hosts: [
              "sint",
            ],
            httpHeaderMatch: {
              headerName: "ratione",
              regexMatch: "vero",
            },
            methods: [
              "odit",
            ],
            ports: [
              3477566635643771654,
            ],
          },
        ],
        sources: [
          {
            ipBlocks: [
              "eveniet",
              "nam",
              "minima",
            ],
            principals: [
              "et",
              "perferendis",
              "ipsa",
            ],
          },
        ],
      },
    ],
  },
};

sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req).then((res: NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networksecurityProjectsLocationsAuthorizationPoliciesCreate` - Creates a new AuthorizationPolicy in a given project and location.
* `networksecurityProjectsLocationsAuthorizationPoliciesList` - Lists AuthorizationPolicies in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesCreate` - Creates a new ClientTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesList` - Lists ClientTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsList` - Lists information about the supported locations for this service.
* `networksecurityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networksecurityProjectsLocationsServerTlsPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesDelete` - Deletes a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGet` - Gets details of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurityProjectsLocationsServerTlsPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesPatch` - Updates the parameters of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
