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
     * drivePermissionsCreate - Creates a permission for a file or shared drive.
    **/
    drivePermissionsCreate(req: operations.DrivePermissionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsCreateResponse>;
    /**
     * drivePermissionsDelete - Deletes a permission.
    **/
    drivePermissionsDelete(req: operations.DrivePermissionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsDeleteResponse>;
    /**
     * drivePermissionsGet - Gets a permission by ID.
    **/
    drivePermissionsGet(req: operations.DrivePermissionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsGetResponse>;
    /**
     * drivePermissionsList - Lists a file's or shared drive's permissions.
    **/
    drivePermissionsList(req: operations.DrivePermissionsListRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsListResponse>;
    /**
     * drivePermissionsUpdate - Updates a permission with patch semantics.
    **/
    drivePermissionsUpdate(req: operations.DrivePermissionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DrivePermissionsUpdateResponse>;
}
