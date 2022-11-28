import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ObjectAccessControls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageObjectAccessControlsDelete - Permanently deletes the ACL entry for the specified entity on the specified object.
    **/
    storageObjectAccessControlsDelete(req: operations.StorageObjectAccessControlsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsDeleteResponse>;
    /**
     * storageObjectAccessControlsGet - Returns the ACL entry for the specified entity on the specified object.
    **/
    storageObjectAccessControlsGet(req: operations.StorageObjectAccessControlsGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsGetResponse>;
    /**
     * storageObjectAccessControlsInsert - Creates a new ACL entry on the specified object.
    **/
    storageObjectAccessControlsInsert(req: operations.StorageObjectAccessControlsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsInsertResponse>;
    /**
     * storageObjectAccessControlsList - Retrieves ACL entries on the specified object.
    **/
    storageObjectAccessControlsList(req: operations.StorageObjectAccessControlsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsListResponse>;
    /**
     * storageObjectAccessControlsPatch - Patches an ACL entry on the specified object.
    **/
    storageObjectAccessControlsPatch(req: operations.StorageObjectAccessControlsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsPatchResponse>;
    /**
     * storageObjectAccessControlsUpdate - Updates an ACL entry on the specified object.
    **/
    storageObjectAccessControlsUpdate(req: operations.StorageObjectAccessControlsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsUpdateResponse>;
}
