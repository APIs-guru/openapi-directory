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
import { ConnectorsProjectsLocationsConnectionsCreateRequest, ConnectorsProjectsLocationsConnectionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConnectorsProjectsLocationsConnectionsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "non",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "eligendi",
    alt: "json",
    callback: "voluptas",
    connectionId: "eos",
    fields: "modi",
    key: "et",
    oauthToken: "rem",
    prettyPrint: false,
    quotaUser: "molestias",
    uploadType: "libero",
    uploadProtocol: "occaecati",
  },
  request: {
    authConfig: {
      additionalVariables: [
        {
          boolValue: true,
          intValue: "eos",
          key: "rerum",
          secretValue: {
            secretVersion: "excepturi",
          },
          stringValue: "repellendus",
        },
      ],
      authType: "OAUTH2_CLIENT_CREDENTIALS",
      oauth2ClientCredentials: {
        clientId: "qui",
        clientSecret: {
          secretVersion: "commodi",
        },
      },
      oauth2JwtBearer: {
        clientKey: {
          secretVersion: "dolores",
        },
        jwtClaims: {
          audience: "aut",
          issuer: "necessitatibus",
          subject: "nesciunt",
        },
      },
      sshPublicKey: {
        certType: "magni",
        sshClientCert: {
          secretVersion: "non",
        },
        sshClientCertPass: {
          secretVersion: "distinctio",
        },
        username: "minima",
      },
      userPassword: {
        password: {
          secretVersion: "ut",
        },
        username: "aperiam",
      },
    },
    configVariables: [
      {
        boolValue: false,
        intValue: "sunt",
        key: "animi",
        secretValue: {
          secretVersion: "mollitia",
        },
        stringValue: "excepturi",
      },
      {
        boolValue: false,
        intValue: "ut",
        key: "ex",
        secretValue: {
          secretVersion: "ad",
        },
        stringValue: "assumenda",
      },
    ],
    connectorVersion: "eaque",
    description: "consequatur",
    destinationConfigs: [
      {
        destinations: [
          {
            host: "velit",
            port: 7322938111960336165,
            serviceAttachment: "in",
          },
          {
            host: "veritatis",
            port: 5952822771195429582,
            serviceAttachment: "modi",
          },
          {
            host: "est",
            port: 1427910665186750051,
            serviceAttachment: "cumque",
          },
        ],
        key: "natus",
      },
      {
        destinations: [
          {
            host: "beatae",
            port: 9144606812326692045,
            serviceAttachment: "amet",
          },
        ],
        key: "dolorem",
      },
    ],
    labels: {
      "similique": "et",
      "ducimus": "cupiditate",
      "consequatur": "exercitationem",
    },
    lockConfig: {
      locked: false,
      reason: "voluptas",
    },
    nodeConfig: {
      maxNodeCount: 6413110699676294475,
      minNodeCount: 8175015999967088442,
    },
    serviceAccount: "iste",
    status: {
      description: "corrupti",
      state: "UPDATING",
      status: "quia",
    },
    suspended: true,
  },
};

sdk.projects.connectorsProjectsLocationsConnectionsCreate(req).then((res: ConnectorsProjectsLocationsConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `connectorsProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `connectorsProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `connectorsProjectsLocationsConnectionsPatch` - Updates the parameters of a single Connection.
* `connectorsProjectsLocationsConnectionsRuntimeActionSchemasList` - List schema of a runtime actions filtered by action name.
* `connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList` - List schema of a runtime entities filtered by entity name.
* `connectorsProjectsLocationsList` - Lists information about the supported locations for this service.
* `connectorsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `connectorsProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `connectorsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `connectorsProjectsLocationsProvidersConnectorsList` - Lists Connectors in a given project and location.
* `connectorsProjectsLocationsProvidersConnectorsVersionsGet` - Gets details of a single connector version.
* `connectorsProjectsLocationsProvidersConnectorsVersionsList` - Lists Connector Versions in a given project and location.
* `connectorsProjectsLocationsProvidersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `connectorsProjectsLocationsProvidersList` - Lists Providers in a given project and location.
* `connectorsProjectsLocationsProvidersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `connectorsProjectsLocationsProvidersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
