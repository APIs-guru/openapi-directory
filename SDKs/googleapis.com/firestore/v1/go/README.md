# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest{
        Security: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity{
            Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams{
            Parent: "reiciendis",
        },
        QueryParams: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "earum",
            Alt: "json",
            Callback: "ut",
            Fields: "eum",
            Filter: "tempora",
            Key: "ipsam",
            OauthToken: "id",
            PageSize: 9080046767572956971,
            PageToken: "dolores",
            PrettyPrint: true,
            QuotaUser: "tempora",
            UploadType: "ad",
            UploadProtocol: "dicta",
        },
    }
    
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsFieldsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirestoreAdminV1ListFieldsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `FirestoreProjectsDatabasesCollectionGroupsFieldsList` - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
* `FirestoreProjectsDatabasesCollectionGroupsIndexesCreate` - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* `FirestoreProjectsDatabasesCollectionGroupsIndexesList` - Lists composite indexes.
* `FirestoreProjectsDatabasesCreate` - Create a database.
* `FirestoreProjectsDatabasesDocumentsBatchGet` - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* `FirestoreProjectsDatabasesDocumentsBatchWrite` - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* `FirestoreProjectsDatabasesDocumentsBeginTransaction` - Starts a new transaction.
* `FirestoreProjectsDatabasesDocumentsCommit` - Commits a transaction, while optionally updating documents.
* `FirestoreProjectsDatabasesDocumentsCreateDocument` - Creates a new document.
* `FirestoreProjectsDatabasesDocumentsListCollectionIds` - Lists all the collection IDs underneath a document.
* `FirestoreProjectsDatabasesDocumentsListDocuments` - Lists documents.
* `FirestoreProjectsDatabasesDocumentsListen` - Listens to changes.
* `FirestoreProjectsDatabasesDocumentsPartitionQuery` - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* `FirestoreProjectsDatabasesDocumentsPatch` - Updates or inserts a document.
* `FirestoreProjectsDatabasesDocumentsRollback` - Rolls back a transaction.
* `FirestoreProjectsDatabasesDocumentsRunAggregationQuery` - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* `FirestoreProjectsDatabasesDocumentsRunQuery` - Runs a query.
* `FirestoreProjectsDatabasesDocumentsWrite` - Streams batches of document updates and deletes, in order.
* `FirestoreProjectsDatabasesExportDocuments` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
* `FirestoreProjectsDatabasesImportDocuments` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `FirestoreProjectsDatabasesList` - List all the databases in the project.
* `FirestoreProjectsDatabasesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `FirestoreProjectsDatabasesOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `FirestoreProjectsDatabasesOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `FirestoreProjectsLocationsGet` - Gets information about a location.
* `FirestoreProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
