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
    
req = operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest(
    security=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity(
        option1=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams(
        parent="reiciendis",
    ),
    query_params=operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams(
        dollar_xgafv="2",
        access_token="earum",
        alt="json",
        callback="ut",
        fields="eum",
        filter="tempora",
        key="ipsam",
        oauth_token="id",
        page_size=9080046767572956971,
        page_token="dolores",
        pretty_print=True,
        quota_user="tempora",
        upload_type="ad",
        upload_protocol="dicta",
    ),
)
    
res = s.projects.firestore_projects_databases_collection_groups_fields_list(req)

if res.google_firestore_admin_v1_list_fields_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `firestore_projects_databases_collection_groups_fields_list` - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
* `firestore_projects_databases_collection_groups_indexes_create` - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* `firestore_projects_databases_collection_groups_indexes_list` - Lists composite indexes.
* `firestore_projects_databases_create` - Create a database.
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
* `firestore_projects_databases_export_documents` - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
* `firestore_projects_databases_import_documents` - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
* `firestore_projects_databases_list` - List all the databases in the project.
* `firestore_projects_databases_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `firestore_projects_databases_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `firestore_projects_databases_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `firestore_projects_locations_get` - Gets information about a location.
* `firestore_projects_locations_list` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
