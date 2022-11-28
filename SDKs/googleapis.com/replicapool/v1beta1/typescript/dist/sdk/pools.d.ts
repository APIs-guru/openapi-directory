import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * replicapoolPoolsDelete - Deletes a replica pool.
    **/
    replicapoolPoolsDelete(req: operations.ReplicapoolPoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsDeleteResponse>;
    /**
     * replicapoolPoolsGet - Gets information about a single replica pool.
    **/
    replicapoolPoolsGet(req: operations.ReplicapoolPoolsGetRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsGetResponse>;
    /**
     * replicapoolPoolsInsert - Inserts a new replica pool.
    **/
    replicapoolPoolsInsert(req: operations.ReplicapoolPoolsInsertRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsInsertResponse>;
    /**
     * replicapoolPoolsList - List all replica pools.
    **/
    replicapoolPoolsList(req: operations.ReplicapoolPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsListResponse>;
    /**
     * replicapoolPoolsResize - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
    **/
    replicapoolPoolsResize(req: operations.ReplicapoolPoolsResizeRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsResizeResponse>;
    /**
     * replicapoolPoolsUpdatetemplate - Update the template used by the pool.
    **/
    replicapoolPoolsUpdatetemplate(req: operations.ReplicapoolPoolsUpdatetemplateRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsUpdatetemplateResponse>;
}
