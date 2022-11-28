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
import { DatastreamProjectsLocationsConnectionProfilesCreateRequest, DatastreamProjectsLocationsConnectionProfilesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatastreamProjectsLocationsConnectionProfilesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "quibusdam",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "possimus",
    alt: "media",
    callback: "nihil",
    connectionProfileId: "est",
    fields: "quos",
    key: "sint",
    oauthToken: "facilis",
    prettyPrint: false,
    quotaUser: "ipsa",
    requestId: "officia",
    uploadType: "in",
    uploadProtocol: "nihil",
  },
  request: {
    displayName: "illo",
    forwardSshConnectivity: {
      hostname: "quos",
      password: "facere",
      port: 9197929128000679882,
      privateKey: "consequatur",
      username: "magnam",
    },
    gcsProfile: {
      bucketName: "aliquid",
      rootPath: "in",
    },
    labels: {
      "vitae": "praesentium",
      "dolorum": "fugit",
    },
    mysqlProfile: {
      hostname: "molestiae",
      password: "quisquam",
      port: 4830508113816580991,
      sslConfig: {
        caCertificate: "incidunt",
        clientCertificate: "dolorum",
        clientKey: "et",
      },
      username: "accusamus",
    },
    noConnectivity: {
      "necessitatibus": "animi",
    },
    oracleProfile: {
      connectionAttributes: {
        "rerum": "voluptas",
      },
      databaseService: "placeat",
      hostname: "non",
      password: "sit",
      port: 3924871608859186553,
      username: "est",
    },
    privateConnectivity: {
      privateConnectionName: "rerum",
    },
    staticServiceIpConnectivity: {
      "error": "distinctio",
      "veritatis": "quia",
    },
  },
};

sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req).then((res: DatastreamProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datastreamProjectsLocationsConnectionProfilesCreate` - Use this method to create a connection profile in a project and location.
* `datastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* `datastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `datastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `datastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `datastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `datastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity in a project and location.
* `datastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `datastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `datastreamProjectsLocationsStreamsFetchErrors` - Use this method to fetch any errors associated with a stream.
* `datastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `datastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `datastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `datastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Starts backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Stops the backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsPatch` - Use this method to update the configuration of a stream.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
