import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createUser - Create a user
     *
     * Note: Users must be created with an admin JWT.
    **/
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * deleteUser - Delete a user
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * getUser - Retrieve a user
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUsers - List users
     *
     * This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).
    **/
    getUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getuserConversations - List user conversations
    **/
    getuserConversations(req: operations.GetuserConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetuserConversationsResponse>;
    /**
     * updateUser - Update a user
    **/
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
