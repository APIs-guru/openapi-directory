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
     * createConversation - Create a conversation
    **/
    createConversation(req: operations.CreateConversationRequest, config?: AxiosRequestConfig): Promise<operations.CreateConversationResponse>;
    /**
     * deleteConversation - Delete a conversation
    **/
    deleteConversation(req: operations.DeleteConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationResponse>;
    /**
     * listConversations - List conversations
     *
     * This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).
     *
     * List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)
    **/
    listConversations(req: operations.ListConversationsRequest, config?: AxiosRequestConfig): Promise<operations.ListConversationsResponse>;
    /**
     * recordConversation - Record a conversation
    **/
    recordConversation(req: operations.RecordConversationRequest, config?: AxiosRequestConfig): Promise<operations.RecordConversationResponse>;
    /**
     * replaceConversation - Update a conversation
    **/
    replaceConversation(req: operations.ReplaceConversationRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceConversationResponse>;
    /**
     * retrieveConversation - Retrieve a conversation
    **/
    retrieveConversation(req: operations.RetrieveConversationRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveConversationResponse>;
}
