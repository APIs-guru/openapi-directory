# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest(
    security=operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity(
        option1=operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.FirestoreProjectsDatabasesDocumentsBatchGetPathParams(
        database="neque",
    ),
    query_params=operations.FirestoreProjectsDatabasesDocumentsBatchGetQueryParams(
        dollar_xgafv="1",
        access_token="dicta",
        alt="proto",
        callback="rerum",
        fields="consequatur",
        key="quam",
        oauth_token="quod",
        pretty_print=True,
        quota_user="molestiae",
        upload_type="perferendis",
        upload_protocol="qui",
    ),
    request=shared.BatchGetDocumentsRequest(
        documents=[
            "vitae",
            "expedita",
        ],
        mask=shared.DocumentMask(
            field_paths=[
                "omnis",
                "hic",
                "quo",
            ],
        ),
        new_transaction=shared.TransactionOptions(
            read_only=shared.ReadOnly(
                read_time="recusandae",
            ),
            read_write=shared.ReadWrite(
                retry_transaction="eos",
            ),
        ),
        read_time="nostrum",
        transaction="velit",
    ),
)
    
res = s.projects.firestore_projects_databases_documents_batch_get(req)

if res.batch_get_documents_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `firestore_projects_databases_documents_batch_get` - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
* `firestore_projects_databases_documents_batch_write` - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
* `firestore_projects_databases_documents_begin_transaction` - Starts a new transaction.
* `firestore_projects_databases_documents_commit` - Commits a transaction, while optionally updating documents.
* `firestore_projects_databases_documents_create_document` - Creates a new document.
* `firestore_projects_databases_documents_list_collection_ids` - Lists all the collection IDs underneath a document.
* `firestore_projects_databases_documents_list_documents` - Lists documents.
* `firestore_projects_databases_documents_listen` - Listens to changes.
* `firestore_projects_databases_documents_partition_query` - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
* `firestore_projects_databases_documents_patch` - Updates or inserts a document.
* `firestore_projects_databases_documents_rollback` - Rolls back a transaction.
* `firestore_projects_databases_documents_run_aggregation_query` - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
* `firestore_projects_databases_documents_run_query` - Runs a query.
* `firestore_projects_databases_documents_write` - Streams batches of document updates and deletes, in order.
* `firestore_projects_databases_export_documents` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `firestore_projects_databases_import_documents` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `firestore_projects_databases_indexes_create` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
* `firestore_projects_databases_indexes_delete` - Deletes an index.
* `firestore_projects_databases_indexes_get` - Gets an index.
* `firestore_projects_databases_indexes_list` - Lists the indexes that match the specified filters.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
