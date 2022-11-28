import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentProductsCustombatch - Retrieves, inserts, and deletes multiple products in a single request.
    **/
    contentProductsCustombatch(req: operations.ContentProductsCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductsCustombatchResponse>;
    /**
     * contentProductsDelete - Deletes a product from your Merchant Center account.
    **/
    contentProductsDelete(req: operations.ContentProductsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductsDeleteResponse>;
    /**
     * contentProductsGet - Retrieves a product from your Merchant Center account.
    **/
    contentProductsGet(req: operations.ContentProductsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductsGetResponse>;
    /**
     * contentProductsInsert - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
    **/
    contentProductsInsert(req: operations.ContentProductsInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductsInsertResponse>;
    /**
     * contentProductsList - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
    **/
    contentProductsList(req: operations.ContentProductsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductsListResponse>;
    /**
     * contentProductsUpdate - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.
    **/
    contentProductsUpdate(req: operations.ContentProductsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductsUpdateResponse>;
}
