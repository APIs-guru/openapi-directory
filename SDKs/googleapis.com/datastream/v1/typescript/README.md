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
    parent: "dignissimos",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "quis",
    alt: "proto",
    callback: "dolores",
    connectionProfileId: "voluptatem",
    fields: "sed",
    force: true,
    key: "et",
    oauthToken: "enim",
    prettyPrint: false,
    quotaUser: "vero",
    requestId: "nisi",
    uploadType: "occaecati",
    uploadProtocol: "qui",
    validateOnly: true,
  },
  request: {
    bigqueryProfile: {
      "veritatis": "corporis",
    },
    displayName: "fugiat",
    forwardSshConnectivity: {
      hostname: "dolor",
      password: "voluptatem",
      port: 88593726215372726,
      privateKey: "quo",
      username: "aliquid",
    },
    gcsProfile: {
      bucket: "eum",
      rootPath: "veniam",
    },
    labels: {
      "id": "neque",
      "exercitationem": "architecto",
      "suscipit": "dolores",
    },
    mysqlProfile: {
      hostname: "dolores",
      password: "maiores",
      port: 8619365412726495595,
      sslConfig: {
        caCertificate: "facilis",
        clientCertificate: "enim",
        clientKey: "accusantium",
      },
      username: "nihil",
    },
    oracleProfile: {
      connectionAttributes: {
        "velit": "libero",
      },
      databaseService: "est",
      hostname: "tempora",
      password: "eius",
      port: 6426046401014374835,
      username: "non",
    },
    postgresqlProfile: {
      database: "et",
      hostname: "sit",
      password: "qui",
      port: 5409926317833318634,
      username: "soluta",
    },
    privateConnectivity: {
      privateConnection: "voluptatum",
    },
    staticServiceIpConnectivity: {
      "delectus": "accusamus",
      "suscipit": "doloremque",
      "dolores": "quis",
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
* `datastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* `datastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `datastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `datastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `datastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `datastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity configuration in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity configuration in a project and location.
* `datastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `datastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `datastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `datastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `datastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `datastreamProjectsLocationsStreamsObjectsLookup` - Use this method to look up a stream object by its source object identifier.
* `datastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Use this method to start a backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Use this method to stop a backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsPatch` - Use this method to update the configuration of a stream.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
