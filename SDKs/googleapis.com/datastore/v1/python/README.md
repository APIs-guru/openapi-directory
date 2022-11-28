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
    
req = operations.DatastoreProjectsAllocateIdsRequest(
    security=operations.DatastoreProjectsAllocateIdsSecurity(
        option1=operations.DatastoreProjectsAllocateIdsSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.DatastoreProjectsAllocateIdsPathParams(
        project_id="dolores",
    ),
    query_params=operations.DatastoreProjectsAllocateIdsQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="media",
        callback="voluptatem",
        fields="consequatur",
        key="nihil",
        oauth_token="reprehenderit",
        pretty_print=False,
        quota_user="aut",
        upload_type="quis",
        upload_protocol="ea",
    ),
    request=shared.AllocateIdsRequest(
        database_id="incidunt",
        keys=[
            shared.Key(
                partition_id=shared.PartitionID(
                    database_id="et",
                    namespace_id="deleniti",
                    project_id="quis",
                ),
                path=[
                    shared.PathElement(
                        id="vitae",
                        kind="aut",
                        name="et",
                    ),
                ],
            ),
            shared.Key(
                partition_id=shared.PartitionID(
                    database_id="et",
                    namespace_id="quas",
                    project_id="vero",
                ),
                path=[
                    shared.PathElement(
                        id="reiciendis",
                        kind="aliquam",
                        name="vitae",
                    ),
                    shared.PathElement(
                        id="facilis",
                        kind="ipsa",
                        name="ipsam",
                    ),
                ],
            ),
            shared.Key(
                partition_id=shared.PartitionID(
                    database_id="deleniti",
                    namespace_id="et",
                    project_id="sed",
                ),
                path=[
                    shared.PathElement(
                        id="omnis",
                        kind="ut",
                        name="voluptas",
                    ),
                    shared.PathElement(
                        id="modi",
                        kind="inventore",
                        name="nihil",
                    ),
                    shared.PathElement(
                        id="ad",
                        kind="quisquam",
                        name="deleniti",
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.projects.datastore_projects_allocate_ids(req)

if res.allocate_ids_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datastore_projects_allocate_ids` - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* `datastore_projects_begin_transaction` - Begins a new transaction.
* `datastore_projects_commit` - Commits a transaction, optionally creating, deleting or modifying some entities.
* `datastore_projects_export` - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `datastore_projects_import` - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* `datastore_projects_indexes_create` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* `datastore_projects_indexes_delete` - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* `datastore_projects_indexes_get` - Gets an index.
* `datastore_projects_indexes_list` - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* `datastore_projects_lookup` - Looks up entities by key.
* `datastore_projects_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datastore_projects_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datastore_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datastore_projects_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datastore_projects_reserve_ids` - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* `datastore_projects_rollback` - Rolls back a transaction.
* `datastore_projects_run_aggregation_query` - Runs an aggregation query.
* `datastore_projects_run_query` - Queries for entities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
