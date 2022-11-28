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
    
    req := operations.DatastoreProjectsAllocateIdsRequest{
        Security: operations.DatastoreProjectsAllocateIdsSecurity{
            Option1: &operations.DatastoreProjectsAllocateIdsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.DatastoreProjectsAllocateIdsPathParams{
            ProjectID: "dolores",
        },
        QueryParams: operations.DatastoreProjectsAllocateIdsQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "voluptatem",
            Fields: "consequatur",
            Key: "nihil",
            OauthToken: "reprehenderit",
            PrettyPrint: false,
            QuotaUser: "aut",
            UploadType: "quis",
            UploadProtocol: "ea",
        },
        Request: &shared.AllocateIdsRequest{
            DatabaseID: "incidunt",
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "et",
                        NamespaceID: "deleniti",
                        ProjectID: "quis",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "vitae",
                            Kind: "aut",
                            Name: "et",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "et",
                        NamespaceID: "quas",
                        ProjectID: "vero",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "reiciendis",
                            Kind: "aliquam",
                            Name: "vitae",
                        },
                        shared.PathElement{
                            ID: "facilis",
                            Kind: "ipsa",
                            Name: "ipsam",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "deleniti",
                        NamespaceID: "et",
                        ProjectID: "sed",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "omnis",
                            Kind: "ut",
                            Name: "voluptas",
                        },
                        shared.PathElement{
                            ID: "modi",
                            Kind: "inventore",
                            Name: "nihil",
                        },
                        shared.PathElement{
                            ID: "ad",
                            Kind: "quisquam",
                            Name: "deleniti",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateIdsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DatastoreProjectsAllocateIds` - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* `DatastoreProjectsBeginTransaction` - Begins a new transaction.
* `DatastoreProjectsCommit` - Commits a transaction, optionally creating, deleting or modifying some entities.
* `DatastoreProjectsExport` - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `DatastoreProjectsImport` - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* `DatastoreProjectsIndexesCreate` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* `DatastoreProjectsIndexesDelete` - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* `DatastoreProjectsIndexesGet` - Gets an index.
* `DatastoreProjectsIndexesList` - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* `DatastoreProjectsLookup` - Looks up entities by key.
* `DatastoreProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastoreProjectsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `DatastoreProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DatastoreProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `DatastoreProjectsReserveIds` - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* `DatastoreProjectsRollback` - Rolls back a transaction.
* `DatastoreProjectsRunAggregationQuery` - Runs an aggregation query.
* `DatastoreProjectsRunQuery` - Queries for entities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
