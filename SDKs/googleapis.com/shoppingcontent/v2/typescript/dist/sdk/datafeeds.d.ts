import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Datafeeds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentDatafeedsCustombatch - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
    **/
    contentDatafeedsCustombatch(req: operations.ContentDatafeedsCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsCustombatchResponse>;
    /**
     * contentDatafeedsDelete - Deletes a datafeed configuration from your Merchant Center account.
    **/
    contentDatafeedsDelete(req: operations.ContentDatafeedsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsDeleteResponse>;
    /**
     * contentDatafeedsFetchnow - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
    **/
    contentDatafeedsFetchnow(req: operations.ContentDatafeedsFetchnowRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsFetchnowResponse>;
    /**
     * contentDatafeedsGet - Retrieves a datafeed configuration from your Merchant Center account.
    **/
    contentDatafeedsGet(req: operations.ContentDatafeedsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsGetResponse>;
    /**
     * contentDatafeedsInsert - Registers a datafeed configuration with your Merchant Center account.
    **/
    contentDatafeedsInsert(req: operations.ContentDatafeedsInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsInsertResponse>;
    /**
     * contentDatafeedsList - Lists the configurations for datafeeds in your Merchant Center account.
    **/
    contentDatafeedsList(req: operations.ContentDatafeedsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsListResponse>;
    /**
     * contentDatafeedsUpdate - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
    **/
    contentDatafeedsUpdate(req: operations.ContentDatafeedsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsUpdateResponse>;
}
