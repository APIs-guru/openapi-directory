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
     * firestoreProjectsDatabasesCollectionGroupsFieldsList - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` .
    **/
    firestoreProjectsDatabasesCollectionGroupsFieldsList(req: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse>;
    /**
     * firestoreProjectsDatabasesCollectionGroupsIndexesCreate - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
    **/
    firestoreProjectsDatabasesCollectionGroupsIndexesCreate(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse>;
    /**
     * firestoreProjectsDatabasesCollectionGroupsIndexesList - Lists composite indexes.
    **/
    firestoreProjectsDatabasesCollectionGroupsIndexesList(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse>;
    /**
     * firestoreProjectsDatabasesCreate - Create a database.
    **/
    firestoreProjectsDatabasesCreate(req: operations.FirestoreProjectsDatabasesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCreateResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsBatchGet - Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
    **/
    firestoreProjectsDatabasesDocumentsBatchGet(req: operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsBatchGetResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsBatchWrite - Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
    **/
    firestoreProjectsDatabasesDocumentsBatchWrite(req: operations.FirestoreProjectsDatabasesDocumentsBatchWriteRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsBatchWriteResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsBeginTransaction - Starts a new transaction.
    **/
    firestoreProjectsDatabasesDocumentsBeginTransaction(req: operations.FirestoreProjectsDatabasesDocumentsBeginTransactionRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsBeginTransactionResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsCommit - Commits a transaction, while optionally updating documents.
    **/
    firestoreProjectsDatabasesDocumentsCommit(req: operations.FirestoreProjectsDatabasesDocumentsCommitRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsCommitResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsCreateDocument - Creates a new document.
    **/
    firestoreProjectsDatabasesDocumentsCreateDocument(req: operations.FirestoreProjectsDatabasesDocumentsCreateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsCreateDocumentResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsListCollectionIds - Lists all the collection IDs underneath a document.
    **/
    firestoreProjectsDatabasesDocumentsListCollectionIds(req: operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsListDocuments - Lists documents.
    **/
    firestoreProjectsDatabasesDocumentsListDocuments(req: operations.FirestoreProjectsDatabasesDocumentsListDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsListDocumentsResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsListen - Listens to changes.
    **/
    firestoreProjectsDatabasesDocumentsListen(req: operations.FirestoreProjectsDatabasesDocumentsListenRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsListenResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsPartitionQuery - Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
    **/
    firestoreProjectsDatabasesDocumentsPartitionQuery(req: operations.FirestoreProjectsDatabasesDocumentsPartitionQueryRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsPartitionQueryResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsPatch - Updates or inserts a document.
    **/
    firestoreProjectsDatabasesDocumentsPatch(req: operations.FirestoreProjectsDatabasesDocumentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsPatchResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsRollback - Rolls back a transaction.
    **/
    firestoreProjectsDatabasesDocumentsRollback(req: operations.FirestoreProjectsDatabasesDocumentsRollbackRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsRollbackResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsRunAggregationQuery - Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
    **/
    firestoreProjectsDatabasesDocumentsRunAggregationQuery(req: operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsRunQuery - Runs a query.
    **/
    firestoreProjectsDatabasesDocumentsRunQuery(req: operations.FirestoreProjectsDatabasesDocumentsRunQueryRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsRunQueryResponse>;
    /**
     * firestoreProjectsDatabasesDocumentsWrite - Streams batches of document updates and deletes, in order.
    **/
    firestoreProjectsDatabasesDocumentsWrite(req: operations.FirestoreProjectsDatabasesDocumentsWriteRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesDocumentsWriteResponse>;
    /**
     * firestoreProjectsDatabasesExportDocuments - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
    **/
    firestoreProjectsDatabasesExportDocuments(req: operations.FirestoreProjectsDatabasesExportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesExportDocumentsResponse>;
    /**
     * firestoreProjectsDatabasesImportDocuments - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
    **/
    firestoreProjectsDatabasesImportDocuments(req: operations.FirestoreProjectsDatabasesImportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesImportDocumentsResponse>;
    /**
     * firestoreProjectsDatabasesList - List all the databases in the project.
    **/
    firestoreProjectsDatabasesList(req: operations.FirestoreProjectsDatabasesListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesListResponse>;
    /**
     * firestoreProjectsDatabasesOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    firestoreProjectsDatabasesOperationsCancel(req: operations.FirestoreProjectsDatabasesOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesOperationsCancelResponse>;
    /**
     * firestoreProjectsDatabasesOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    firestoreProjectsDatabasesOperationsDelete(req: operations.FirestoreProjectsDatabasesOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesOperationsDeleteResponse>;
    /**
     * firestoreProjectsDatabasesOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    firestoreProjectsDatabasesOperationsList(req: operations.FirestoreProjectsDatabasesOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesOperationsListResponse>;
    /**
     * firestoreProjectsLocationsGet - Gets information about a location.
    **/
    firestoreProjectsLocationsGet(req: operations.FirestoreProjectsLocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsLocationsGetResponse>;
    /**
     * firestoreProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    firestoreProjectsLocationsList(req: operations.FirestoreProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsLocationsListResponse>;
}
