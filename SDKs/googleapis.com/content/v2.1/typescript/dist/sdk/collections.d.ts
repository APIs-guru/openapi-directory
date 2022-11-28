import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentCollectionsCreate - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
    **/
    contentCollectionsCreate(req: operations.ContentCollectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsCreateResponse>;
    /**
     * contentCollectionsDelete - Deletes a collection from your Merchant Center account.
    **/
    contentCollectionsDelete(req: operations.ContentCollectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsDeleteResponse>;
    /**
     * contentCollectionsGet - Retrieves a collection from your Merchant Center account.
    **/
    contentCollectionsGet(req: operations.ContentCollectionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsGetResponse>;
    /**
     * contentCollectionsList - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.
    **/
    contentCollectionsList(req: operations.ContentCollectionsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsListResponse>;
}
