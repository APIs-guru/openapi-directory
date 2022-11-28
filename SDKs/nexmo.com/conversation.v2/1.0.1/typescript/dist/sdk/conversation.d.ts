import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Conversation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConversations - List Conversations
     *
     * Please note that not all data is available in the list endpoint. Once
     * you've identified the conversation you need to work with, use the
     * [GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details
     *
    **/
    getConversations(req: operations.GetConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationsResponse>;
}
