import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoCustomListsGet - Gets a custom list.
    **/
    displayvideoCustomListsGet(req: operations.DisplayvideoCustomListsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomListsGetResponse>;
    /**
     * displayvideoCustomListsList - Lists custom lists. The order is defined by the order_by parameter.
    **/
    displayvideoCustomListsList(req: operations.DisplayvideoCustomListsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomListsListResponse>;
}
