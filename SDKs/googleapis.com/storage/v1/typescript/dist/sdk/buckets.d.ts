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
     * storageBucketsGetIamPolicy - Returns an IAM policy for the specified bucket.
    **/
    storageBucketsGetIamPolicy(req: operations.StorageBucketsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsGetIamPolicyResponse>;
    /**
     * storageBucketsInsert - Creates a new bucket.
    **/
    storageBucketsInsert(req: operations.StorageBucketsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsInsertResponse>;
    /**
     * storageBucketsList - Retrieves a list of buckets for a given project.
    **/
    storageBucketsList(req: operations.StorageBucketsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsListResponse>;
    /**
     * storageBucketsLockRetentionPolicy - Locks retention policy on a bucket.
    **/
    storageBucketsLockRetentionPolicy(req: operations.StorageBucketsLockRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsLockRetentionPolicyResponse>;
    /**
     * storageBucketsPatch - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
    **/
    storageBucketsPatch(req: operations.StorageBucketsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsPatchResponse>;
    /**
     * storageBucketsSetIamPolicy - Updates an IAM policy for the specified bucket.
    **/
    storageBucketsSetIamPolicy(req: operations.StorageBucketsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsSetIamPolicyResponse>;
    /**
     * storageBucketsTestIamPermissions - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
    **/
    storageBucketsTestIamPermissions(req: operations.StorageBucketsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsTestIamPermissionsResponse>;
    /**
     * storageBucketsUpdate - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
    **/
    storageBucketsUpdate(req: operations.StorageBucketsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketsUpdateResponse>;
}
