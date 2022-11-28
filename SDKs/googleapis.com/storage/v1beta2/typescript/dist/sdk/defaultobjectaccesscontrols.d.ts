import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DefaultObjectAccessControls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageDefaultObjectAccessControlsDelete - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
    **/
    storageDefaultObjectAccessControlsDelete(req: operations.StorageDefaultObjectAccessControlsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsDeleteResponse>;
    /**
     * storageDefaultObjectAccessControlsGet - Returns the default object ACL entry for the specified entity on the specified bucket.
    **/
    storageDefaultObjectAccessControlsGet(req: operations.StorageDefaultObjectAccessControlsGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsGetResponse>;
    /**
     * storageDefaultObjectAccessControlsInsert - Creates a new default object ACL entry on the specified bucket.
    **/
    storageDefaultObjectAccessControlsInsert(req: operations.StorageDefaultObjectAccessControlsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsInsertResponse>;
    /**
     * storageDefaultObjectAccessControlsList - Retrieves default object ACL entries on the specified bucket.
    **/
    storageDefaultObjectAccessControlsList(req: operations.StorageDefaultObjectAccessControlsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsListResponse>;
    /**
     * storageDefaultObjectAccessControlsPatch - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
    **/
    storageDefaultObjectAccessControlsPatch(req: operations.StorageDefaultObjectAccessControlsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsPatchResponse>;
    /**
     * storageDefaultObjectAccessControlsUpdate - Updates a default object ACL entry on the specified bucket.
    **/
    storageDefaultObjectAccessControlsUpdate(req: operations.StorageDefaultObjectAccessControlsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsUpdateResponse>;
}
