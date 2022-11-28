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
import { DatastoreProjectsAllocateIdsRequest, DatastoreProjectsAllocateIdsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DatastoreProjectsAllocateIdsRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    projectId: "dolores",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "et",
    alt: "media",
    callback: "voluptatem",
    fields: "consequatur",
    key: "nihil",
    oauthToken: "reprehenderit",
    prettyPrint: false,
    quotaUser: "aut",
    uploadType: "quis",
    uploadProtocol: "ea",
  },
  request: {
    databaseId: "incidunt",
    keys: [
      {
        partitionId: {
          databaseId: "et",
          namespaceId: "deleniti",
          projectId: "quis",
        },
        path: [
          {
            id: "vitae",
            kind: "aut",
            name: "et",
          },
        ],
      },
      {
        partitionId: {
          databaseId: "et",
          namespaceId: "quas",
          projectId: "vero",
        },
        path: [
          {
            id: "reiciendis",
            kind: "aliquam",
            name: "vitae",
          },
          {
            id: "facilis",
            kind: "ipsa",
            name: "ipsam",
          },
        ],
      },
      {
        partitionId: {
          databaseId: "deleniti",
          namespaceId: "et",
          projectId: "sed",
        },
        path: [
          {
            id: "omnis",
            kind: "ut",
            name: "voluptas",
          },
          {
            id: "modi",
            kind: "inventore",
            name: "nihil",
          },
          {
            id: "ad",
            kind: "quisquam",
            name: "deleniti",
          },
        ],
      },
    ],
  },
};

sdk.projects.datastoreProjectsAllocateIds(req).then((res: DatastoreProjectsAllocateIdsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datastoreProjectsAllocateIds` - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* `datastoreProjectsBeginTransaction` - Begins a new transaction.
* `datastoreProjectsCommit` - Commits a transaction, optionally creating, deleting or modifying some entities.
* `datastoreProjectsExport` - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `datastoreProjectsImport` - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* `datastoreProjectsIndexesCreate` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* `datastoreProjectsIndexesDelete` - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* `datastoreProjectsIndexesGet` - Gets an index.
* `datastoreProjectsIndexesList` - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* `datastoreProjectsLookup` - Looks up entities by key.
* `datastoreProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datastoreProjectsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datastoreProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datastoreProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datastoreProjectsReserveIds` - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* `datastoreProjectsRollback` - Rolls back a transaction.
* `datastoreProjectsRunAggregationQuery` - Runs an aggregation query.
* `datastoreProjectsRunQuery` - Queries for entities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
