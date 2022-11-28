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
     * storageProjectsHmacKeysCreate - Creates a new HMAC key for the specified service account.
    **/
    storageProjectsHmacKeysCreate(req: operations.StorageProjectsHmacKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysCreateResponse>;
    /**
     * storageProjectsHmacKeysDelete - Deletes an HMAC key.
    **/
    storageProjectsHmacKeysDelete(req: operations.StorageProjectsHmacKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysDeleteResponse>;
    /**
     * storageProjectsHmacKeysGet - Retrieves an HMAC key's metadata
    **/
    storageProjectsHmacKeysGet(req: operations.StorageProjectsHmacKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysGetResponse>;
    /**
     * storageProjectsHmacKeysList - Retrieves a list of HMAC keys matching the criteria.
    **/
    storageProjectsHmacKeysList(req: operations.StorageProjectsHmacKeysListRequest, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysListResponse>;
    /**
     * storageProjectsHmacKeysUpdate - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
    **/
    storageProjectsHmacKeysUpdate(req: operations.StorageProjectsHmacKeysUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysUpdateResponse>;
    /**
     * storageProjectsServiceAccountGet - Get the email address of this project's Google Cloud Storage service account.
    **/
    storageProjectsServiceAccountGet(req: operations.StorageProjectsServiceAccountGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageProjectsServiceAccountGetResponse>;
}
