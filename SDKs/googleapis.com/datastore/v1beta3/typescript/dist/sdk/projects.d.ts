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
     * datastoreProjectsLookup - Looks up entities by key.
    **/
    datastoreProjectsLookup(req: operations.DatastoreProjectsLookupRequest, config?: AxiosRequestConfig): Promise<operations.DatastoreProjectsLookupResponse>;
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
