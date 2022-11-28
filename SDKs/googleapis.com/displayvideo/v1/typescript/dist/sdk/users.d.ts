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
     * displayvideoUsersBulkEditAssignedUserRoles - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles.
    **/
    displayvideoUsersBulkEditAssignedUserRoles(req: operations.DisplayvideoUsersBulkEditAssignedUserRolesRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersBulkEditAssignedUserRolesResponse>;
    /**
     * displayvideoUsersCreate - Creates a new user. Returns the newly created user if successful.
    **/
    displayvideoUsersCreate(req: operations.DisplayvideoUsersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersCreateResponse>;
    /**
     * displayvideoUsersDelete - Deletes a user.
    **/
    displayvideoUsersDelete(req: operations.DisplayvideoUsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersDeleteResponse>;
    /**
     * displayvideoUsersGet - Gets a user.
    **/
    displayvideoUsersGet(req: operations.DisplayvideoUsersGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersGetResponse>;
    /**
     * displayvideoUsersList - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other.
    **/
    displayvideoUsersList(req: operations.DisplayvideoUsersListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersListResponse>;
    /**
     * displayvideoUsersPatch - Updates an existing user. Returns the updated user if successful.
    **/
    displayvideoUsersPatch(req: operations.DisplayvideoUsersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoUsersPatchResponse>;
}
