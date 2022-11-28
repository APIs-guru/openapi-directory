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
import { FirestoreProjectsDatabasesDocumentsBatchGetRequest, FirestoreProjectsDatabasesDocumentsBatchGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FirestoreProjectsDatabasesDocumentsBatchGetRequest = {
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
    database: "neque",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "dicta",
    alt: "proto",
    callback: "rerum",
    fields: "consequatur",
    key: "quam",
    oauthToken: "quod",
    prettyPrint: true,
    quotaUser: "molestiae",
    uploadType: "perferendis",
    uploadProtocol: "qui",
  },
  request: {
    documents: [
      "vitae",
      "expedita",
    ],
    mask: {
      fieldPaths: [
        "omnis",
        "hic",
        "quo",
      ],
    },
    newTransaction: {
      readOnly: {
        readTime: "recusandae",
      },
      readWrite: {
        retryTransaction: "eos",
      },
    },
    readTime: "nostrum",
    transaction: "velit",
  },
};

sdk.projects.firestoreProjectsDatabasesDocumentsBatchGet(req).then((res: FirestoreProjectsDatabasesDocumentsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

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
* `firestoreProjectsDatabasesExportDocuments` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `firestoreProjectsDatabasesImportDocuments` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `firestoreProjectsDatabasesIndexesCreate` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
* `firestoreProjectsDatabasesIndexesDelete` - Deletes an index.
* `firestoreProjectsDatabasesIndexesGet` - Gets an index.
* `firestoreProjectsDatabasesIndexesList` - Lists the indexes that match the specified filters.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
