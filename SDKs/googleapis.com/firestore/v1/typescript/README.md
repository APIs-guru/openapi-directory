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
import { FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest, FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest = {
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
    parent: "reiciendis",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "earum",
    alt: "json",
    callback: "ut",
    fields: "eum",
    filter: "tempora",
    key: "ipsam",
    oauthToken: "id",
    pageSize: 9080046767572956971,
    pageToken: "dolores",
    prettyPrint: true,
    quotaUser: "tempora",
    uploadType: "ad",
    uploadProtocol: "dicta",
  },
};

sdk.projects.firestoreProjectsDatabasesCollectionGroupsFieldsList(req).then((res: FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `firestoreProjectsDatabasesCollectionGroupsFieldsList` - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
* `firestoreProjectsDatabasesCollectionGroupsIndexesCreate` - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* `firestoreProjectsDatabasesCollectionGroupsIndexesList` - Lists composite indexes.
* `firestoreProjectsDatabasesCreate` - Create a database.
* `firestoreProjectsDatabasesDocumentsBatchGet` - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* `firestoreProjectsDatabasesDocumentsBatchWrite` - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* `firestoreProjectsDatabasesDocumentsBeginTransaction` - Starts a new transaction.
* `firestoreProjectsDatabasesDocumentsCommit` - Commits a transaction, while optionally updating documents.
* `firestoreProjectsDatabasesDocumentsCreateDocument` - Creates a new document.
* `firestoreProjectsDatabasesDocumentsListCollectionIds` - Lists all the collection IDs underneath a document.
* `firestoreProjectsDatabasesDocumentsListDocuments` - Lists documents.
* `firestoreProjectsDatabasesDocumentsListen` - Listens to changes.
* `firestoreProjectsDatabasesDocumentsPartitionQuery` - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* `firestoreProjectsDatabasesDocumentsPatch` - Updates or inserts a document.
* `firestoreProjectsDatabasesDocumentsRollback` - Rolls back a transaction.
* `firestoreProjectsDatabasesDocumentsRunAggregationQuery` - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* `firestoreProjectsDatabasesDocumentsRunQuery` - Runs a query.
* `firestoreProjectsDatabasesDocumentsWrite` - Streams batches of document updates and deletes, in order.
* `firestoreProjectsDatabasesExportDocuments` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
* `firestoreProjectsDatabasesImportDocuments` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `firestoreProjectsDatabasesList` - List all the databases in the project.
* `firestoreProjectsDatabasesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `firestoreProjectsDatabasesOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `firestoreProjectsDatabasesOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `firestoreProjectsLocationsGet` - Gets information about a location.
* `firestoreProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
