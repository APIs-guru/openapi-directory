import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Buckets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageBucketsDelete - Permanently deletes an empty bucket.
    **/
    storageBucketsDelete(req: operations.StorageBucketsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsDeleteResponse>;
    /**
     * storageBucketsGet - Returns metadata for the specified bucket.
    **/
    storageBucketsGet(req: operations.StorageBucketsGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsGetResponse>;
    /**
     * storageBucketsInsert - Creates a new bucket.
    **/
    storageBucketsInsert(req: operations.StorageBucketsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsInsertResponse>;
    /**
     * storageBucketsList - Retrieves a list of buckets for a given project.
    **/
    storageBucketsList(req: operations.StorageBucketsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsListResponse>;
    /**
     * storageBucketsPatch - Updates a bucket. This method supports patch semantics.
    **/
    storageBucketsPatch(req: operations.StorageBucketsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsPatchResponse>;
    /**
     * storageBucketsUpdate - Updates a bucket.
    **/
    storageBucketsUpdate(req: operations.StorageBucketsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsUpdateResponse>;
}
