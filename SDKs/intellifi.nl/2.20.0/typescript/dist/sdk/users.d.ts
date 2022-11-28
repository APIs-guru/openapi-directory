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
     * addUser - Create user
     *
     * Can only be used by an **administrative** user.
    **/
    addUser(req: operations.AddUserRequest, config?: AxiosRequestConfig): Promise<operations.AddUserResponse>;
    /**
     * deleteUser - Delete user
     *
     * Can only be used by an **administrative** user.
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * getUserById - Get user
     *
     * Can only be used by an **administrative** user.
    **/
    getUserById(req: operations.GetUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserByIdResponseOutput>;
    /**
     * getUsers - Get all users
     *
     * Can only be used by an **administrative** user.
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponseOutput>;
    /**
     * updateUser - Update existing user
     *
     * Can only be used by an **administrative** user.
    **/
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
