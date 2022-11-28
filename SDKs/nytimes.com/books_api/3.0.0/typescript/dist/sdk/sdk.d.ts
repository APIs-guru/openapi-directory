import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nytimes.com/svc/books/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getListsBestSellersHistoryJson - Best Seller History List
    **/
    getListsBestSellersHistoryJson(req: operations.GetListsBestSellersHistoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetListsBestSellersHistoryJsonResponse>;
    /**
     * getListsDateListJson - Best Seller List by Date
    **/
    getListsDateListJson(req: operations.GetListsDateListJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetListsDateListJsonResponse>;
    /**
     * getListsFormat - Best Seller List
    **/
    getListsFormat(req: operations.GetListsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetListsFormatResponse>;
    /**
     * getListsNamesFormat - Best Seller List Names
    **/
    getListsNamesFormat(req: operations.GetListsNamesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetListsNamesFormatResponse>;
    /**
     * getListsOverviewFormat - Best Seller List Overview
    **/
    getListsOverviewFormat(req: operations.GetListsOverviewFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetListsOverviewFormatResponse>;
    /**
     * getReviewsFormat - Reviews
    **/
    getReviewsFormat(req: operations.GetReviewsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsFormatResponse>;
}
export {};
