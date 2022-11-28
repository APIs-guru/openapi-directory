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
     * sqlUsersDelete - Deletes a user from a Cloud SQL instance.
    **/
    sqlUsersDelete(req: operations.SqlUsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SqlUsersDeleteResponse>;
    /**
     * sqlUsersGet - Retrieves a resource containing information about a user.
    **/
    sqlUsersGet(req: operations.SqlUsersGetRequest, config?: AxiosRequestConfig): Promise<operations.SqlUsersGetResponse>;
    /**
     * sqlUsersInsert - Creates a new user in a Cloud SQL instance.
    **/
    sqlUsersInsert(req: operations.SqlUsersInsertRequest, config?: AxiosRequestConfig): Promise<operations.SqlUsersInsertResponse>;
    /**
     * sqlUsersList - Lists users in the specified Cloud SQL instance.
    **/
    sqlUsersList(req: operations.SqlUsersListRequest, config?: AxiosRequestConfig): Promise<operations.SqlUsersListResponse>;
    /**
     * sqlUsersUpdate - Updates an existing user in a Cloud SQL instance.
    **/
    sqlUsersUpdate(req: operations.SqlUsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SqlUsersUpdateResponse>;
}
