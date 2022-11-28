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
     * mybusinessbusinessinformationCategoriesBatchGet - Returns a list of business categories for the provided language and GConcept ids.
    **/
    mybusinessbusinessinformationCategoriesBatchGet(req: operations.MybusinessbusinessinformationCategoriesBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationCategoriesBatchGetResponse>;
    /**
     * mybusinessbusinessinformationCategoriesList - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').
    **/
    mybusinessbusinessinformationCategoriesList(req: operations.MybusinessbusinessinformationCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationCategoriesListResponse>;
}
