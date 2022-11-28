import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PostUserInfos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerPostUserInfosGet - Gets one post and user info pair, by post_id and user_id.
    **/
    bloggerPostUserInfosGet(req: operations.BloggerPostUserInfosGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostUserInfosGetResponse>;
    /**
     * bloggerPostUserInfosList - Lists post and user info pairs.
    **/
    bloggerPostUserInfosList(req: operations.BloggerPostUserInfosListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPostUserInfosListResponse>;
}
