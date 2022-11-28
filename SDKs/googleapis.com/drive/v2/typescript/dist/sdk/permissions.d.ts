import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * drivePermissionsDelete - Deletes a permission from a file or shared drive.
    **/
    drivePermissionsDelete(req: operations.DrivePermissionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsDeleteResponse>;
    /**
     * drivePermissionsGet - Gets a permission by ID.
    **/
    drivePermissionsGet(req: operations.DrivePermissionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsGetResponse>;
    /**
     * drivePermissionsGetIdForEmail - Returns the permission ID for an email address.
    **/
    drivePermissionsGetIdForEmail(req: operations.DrivePermissionsGetIdForEmailRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsGetIdForEmailResponse>;
    /**
     * drivePermissionsInsert - Inserts a permission for a file or shared drive.
    **/
    drivePermissionsInsert(req: operations.DrivePermissionsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsInsertResponse>;
    /**
     * drivePermissionsList - Lists a file's or shared drive's permissions.
    **/
    drivePermissionsList(req: operations.DrivePermissionsListRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsListResponse>;
    /**
     * drivePermissionsPatch - Updates a permission using patch semantics.
    **/
    drivePermissionsPatch(req: operations.DrivePermissionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsPatchResponse>;
    /**
     * drivePermissionsUpdate - Updates a permission.
    **/
    drivePermissionsUpdate(req: operations.DrivePermissionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsUpdateResponse>;
}
