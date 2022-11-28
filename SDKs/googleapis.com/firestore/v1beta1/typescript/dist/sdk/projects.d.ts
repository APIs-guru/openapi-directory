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
     * firestoreProjectsDatabasesExportDocuments - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
    **/
    firestoreProjectsDatabasesExportDocuments(req: operations.FirestoreProjectsDatabasesExportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesExportDocumentsResponse>;
    /**
     * firestoreProjectsDatabasesImportDocuments - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
    **/
    firestoreProjectsDatabasesImportDocuments(req: operations.FirestoreProjectsDatabasesImportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesImportDocumentsResponse>;
    /**
     * firestoreProjectsDatabasesIndexesCreate - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
    **/
    firestoreProjectsDatabasesIndexesCreate(req: operations.FirestoreProjectsDatabasesIndexesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesCreateResponse>;
    /**
     * firestoreProjectsDatabasesIndexesDelete - Deletes an index.
    **/
    firestoreProjectsDatabasesIndexesDelete(req: operations.FirestoreProjectsDatabasesIndexesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesDeleteResponse>;
    /**
     * firestoreProjectsDatabasesIndexesGet - Gets an index.
    **/
    firestoreProjectsDatabasesIndexesGet(req: operations.FirestoreProjectsDatabasesIndexesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesGetResponse>;
    /**
     * firestoreProjectsDatabasesIndexesList - Lists the indexes that match the specified filters.
    **/
    firestoreProjectsDatabasesIndexesList(req: operations.FirestoreProjectsDatabasesIndexesListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesIndexesListResponse>;
}
