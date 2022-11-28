import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessCategoriesBatchGet - Returns a list of business categories for the provided language and GConcept ids.
    **/
    mybusinessCategoriesBatchGet(req: operations.MybusinessCategoriesBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessCategoriesBatchGetResponse>;
    /**
     * mybusinessCategoriesList - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').
    **/
    mybusinessCategoriesList(req: operations.MybusinessCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessCategoriesListResponse>;
}
