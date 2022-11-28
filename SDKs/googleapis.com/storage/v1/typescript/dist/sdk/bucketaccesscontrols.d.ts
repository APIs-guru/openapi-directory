import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BucketAccessControls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageBucketAccessControlsDelete - Permanently deletes the ACL entry for the specified entity on the specified bucket.
    **/
    storageBucketAccessControlsDelete(req: operations.StorageBucketAccessControlsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsDeleteResponse>;
    /**
     * storageBucketAccessControlsGet - Returns the ACL entry for the specified entity on the specified bucket.
    **/
    storageBucketAccessControlsGet(req: operations.StorageBucketAccessControlsGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsGetResponse>;
    /**
     * storageBucketAccessControlsInsert - Creates a new ACL entry on the specified bucket.
    **/
    storageBucketAccessControlsInsert(req: operations.StorageBucketAccessControlsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsInsertResponse>;
    /**
     * storageBucketAccessControlsList - Retrieves ACL entries on the specified bucket.
    **/
    storageBucketAccessControlsList(req: operations.StorageBucketAccessControlsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsListResponse>;
    /**
     * storageBucketAccessControlsPatch - Patches an ACL entry on the specified bucket.
    **/
    storageBucketAccessControlsPatch(req: operations.StorageBucketAccessControlsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsPatchResponse>;
    /**
     * storageBucketAccessControlsUpdate - Updates an ACL entry on the specified bucket.
    **/
    storageBucketAccessControlsUpdate(req: operations.StorageBucketAccessControlsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsUpdateResponse>;
}
