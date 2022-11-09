import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Please note that not all data is available in the list endpoint. Once
     * you've identified the conversation you need to work with, use the
     * [GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details
     *
    **/
    GetConversations(req: operations.GetConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationsResponse>;
    GetEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    GetMembers(req: operations.GetMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetMembersResponse>;
    GetUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
}
export {};
