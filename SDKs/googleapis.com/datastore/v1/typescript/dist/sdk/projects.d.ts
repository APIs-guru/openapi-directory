import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * datastoreProjectsAllocateIds - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
    **/
    datastoreProjectsAllocateIds(req: operations.DatastoreProjectsAllocateIdsRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsAllocateIdsResponse>;
    /**
     * datastoreProjectsBeginTransaction - Begins a new transaction.
    **/
    datastoreProjectsBeginTransaction(req: operations.DatastoreProjectsBeginTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsBeginTransactionResponse>;
    /**
     * datastoreProjectsCommit - Commits a transaction, optionally creating, deleting or modifying some entities.
    **/
    datastoreProjectsCommit(req: operations.DatastoreProjectsCommitRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsCommitResponse>;
    /**
     * datastoreProjectsExport - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
    **/
    datastoreProjectsExport(req: operations.DatastoreProjectsExportRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsExportResponse>;
    /**
     * datastoreProjectsImport - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
    **/
    datastoreProjectsImport(req: operations.DatastoreProjectsImportRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsImportResponse>;
    /**
     * datastoreProjectsIndexesCreate - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
    **/
    datastoreProjectsIndexesCreate(req: operations.DatastoreProjectsIndexesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsIndexesCreateResponse>;
    /**
     * datastoreProjectsIndexesDelete - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
    **/
    datastoreProjectsIndexesDelete(req: operations.DatastoreProjectsIndexesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsIndexesDeleteResponse>;
    /**
     * datastoreProjectsIndexesGet - Gets an index.
    **/
    datastoreProjectsIndexesGet(req: operations.DatastoreProjectsIndexesGetRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsIndexesGetResponse>;
    /**
     * datastoreProjectsIndexesList - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
    **/
    datastoreProjectsIndexesList(req: operations.DatastoreProjectsIndexesListRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsIndexesListResponse>;
    /**
     * datastoreProjectsLookup - Looks up entities by key.
    **/
    datastoreProjectsLookup(req: operations.DatastoreProjectsLookupRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsLookupResponse>;
    /**
     * datastoreProjectsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    datastoreProjectsOperationsCancel(req: operations.DatastoreProjectsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsOperationsCancelResponse>;
    /**
     * datastoreProjectsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    datastoreProjectsOperationsDelete(req: operations.DatastoreProjectsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsOperationsDeleteResponse>;
    /**
     * datastoreProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    datastoreProjectsOperationsGet(req: operations.DatastoreProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsOperationsGetResponse>;
    /**
     * datastoreProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    datastoreProjectsOperationsList(req: operations.DatastoreProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsOperationsListResponse>;
    /**
     * datastoreProjectsReserveIds - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
    **/
    datastoreProjectsReserveIds(req: operations.DatastoreProjectsReserveIdsRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsReserveIdsResponse>;
    /**
     * datastoreProjectsRollback - Rolls back a transaction.
    **/
    datastoreProjectsRollback(req: operations.DatastoreProjectsRollbackRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsRollbackResponse>;
    /**
     * datastoreProjectsRunAggregationQuery - Runs an aggregation query.
    **/
    datastoreProjectsRunAggregationQuery(req: operations.DatastoreProjectsRunAggregationQueryRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsRunAggregationQueryResponse>;
    /**
     * datastoreProjectsRunQuery - Queries for entities.
    **/
    datastoreProjectsRunQuery(req: operations.DatastoreProjectsRunQueryRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsRunQueryResponse>;
}
