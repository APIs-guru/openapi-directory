import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Productdeliverytime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentProductdeliverytimeCreate - Creates or updates the delivery time of a product.
    **/
    contentProductdeliverytimeCreate(req: operations.ContentProductdeliverytimeCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductdeliverytimeCreateResponse>;
    /**
     * contentProductdeliverytimeDelete - Deletes the delivery time of a product.
    **/
    contentProductdeliverytimeDelete(req: operations.ContentProductdeliverytimeDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductdeliverytimeDeleteResponse>;
    /**
     * contentProductdeliverytimeGet - Gets `productDeliveryTime` by `productId`.
    **/
    contentProductdeliverytimeGet(req: operations.ContentProductdeliverytimeGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductdeliverytimeGetResponse>;
}
