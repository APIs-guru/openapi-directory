import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * osloginUsersGetLoginProfile - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
    **/
    osloginUsersGetLoginProfile(req: operations.OsloginUsersGetLoginProfileRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersGetLoginProfileResponse>;
    /**
     * osloginUsersImportSshPublicKey - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
    **/
    osloginUsersImportSshPublicKey(req: operations.OsloginUsersImportSshPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersImportSshPublicKeyResponse>;
    /**
     * osloginUsersSshPublicKeysCreate - Create an SSH public key
    **/
    osloginUsersSshPublicKeysCreate(req: operations.OsloginUsersSshPublicKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysCreateResponse>;
    /**
     * osloginUsersSshPublicKeysDelete - Deletes an SSH public key.
    **/
    osloginUsersSshPublicKeysDelete(req: operations.OsloginUsersSshPublicKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysDeleteResponse>;
    /**
     * osloginUsersSshPublicKeysGet - Retrieves an SSH public key.
    **/
    osloginUsersSshPublicKeysGet(req: operations.OsloginUsersSshPublicKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysGetResponse>;
    /**
     * osloginUsersSshPublicKeysPatch - Updates an SSH public key and returns the profile information. This method supports patch semantics.
    **/
    osloginUsersSshPublicKeysPatch(req: operations.OsloginUsersSshPublicKeysPatchRequest, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysPatchResponse>;
}
