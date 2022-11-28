import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Spaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chatSpacesList - Lists spaces the caller is a member of. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.spaces` or `chat.spaces.readonly` authorization scope. Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.
    **/
    chatSpacesList(req: operations.ChatSpacesListRequest, config?: AxiosRequestConfig): Promise<operations.ChatSpacesListResponse>;
    /**
     * chatSpacesMembersList - Lists memberships in a space. Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
    **/
    chatSpacesMembersList(req: operations.ChatSpacesMembersListRequest, config?: AxiosRequestConfig): Promise<operations.ChatSpacesMembersListResponse>;
    /**
     * chatSpacesMessagesAttachmentsGet - Gets the metadata of a message attachment. The attachment data is fetched using the media API. Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
    **/
    chatSpacesMessagesAttachmentsGet(req: operations.ChatSpacesMessagesAttachmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.ChatSpacesMessagesAttachmentsGetResponse>;
    /**
     * chatSpacesMessagesCreate - Creates a message. For example usage, see [Create a message](https://developers.google.com/chat/api/guides/crudl/messages#create_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` or `chat.messages.create` authorization scope.
    **/
    chatSpacesMessagesCreate(req: operations.ChatSpacesMessagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ChatSpacesMessagesCreateResponse>;
    /**
     * chatSpacesMessagesDelete - Deletes a message. For example usage, see [Delete a message](https://developers.google.com/chat/api/guides/crudl/messages#delete_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
    **/
    chatSpacesMessagesDelete(req: operations.ChatSpacesMessagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ChatSpacesMessagesDeleteResponse>;
    /**
     * chatSpacesMessagesUpdate - Updates a message. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
    **/
    chatSpacesMessagesUpdate(req: operations.ChatSpacesMessagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ChatSpacesMessagesUpdateResponse>;
    /**
     * chatSpacesWebhooks - Legacy path for creating message. Calling these will result in a BadRequest response.
    **/
    chatSpacesWebhooks(req: operations.ChatSpacesWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.ChatSpacesWebhooksResponse>;
}
