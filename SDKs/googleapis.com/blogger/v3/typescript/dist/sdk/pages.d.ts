import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerPagesDelete - Deletes a page by blog id and page id.
    **/
    bloggerPagesDelete(req: operations.BloggerPagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesDeleteResponse>;
    /**
     * bloggerPagesGet - Gets a page by blog id and page id.
    **/
    bloggerPagesGet(req: operations.BloggerPagesGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesGetResponse>;
    /**
     * bloggerPagesInsert - Inserts a page.
    **/
    bloggerPagesInsert(req: operations.BloggerPagesInsertRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesInsertResponse>;
    /**
     * bloggerPagesList - Lists pages.
    **/
    bloggerPagesList(req: operations.BloggerPagesListRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesListResponse>;
    /**
     * bloggerPagesPatch - Patches a page.
    **/
    bloggerPagesPatch(req: operations.BloggerPagesPatchRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesPatchResponse>;
    /**
     * bloggerPagesPublish - Publishes a page.
    **/
    bloggerPagesPublish(req: operations.BloggerPagesPublishRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesPublishResponse>;
    /**
     * bloggerPagesRevert - Reverts a published or scheduled page to draft state.
    **/
    bloggerPagesRevert(req: operations.BloggerPagesRevertRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesRevertResponse>;
    /**
     * bloggerPagesUpdate - Updates a page by blog id and page id.
    **/
    bloggerPagesUpdate(req: operations.BloggerPagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BloggerPagesUpdateResponse>;
}
