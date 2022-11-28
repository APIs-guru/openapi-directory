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
     * cloudchannelProductsList - Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
    **/
    cloudchannelProductsList(req: operations.CloudchannelProductsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudchannelProductsListResponse>;
    /**
     * cloudchannelProductsSkusList - Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
    **/
    cloudchannelProductsSkusList(req: operations.CloudchannelProductsSkusListRequest, config?: AxiosRequestConfig): Promise<operations.CloudchannelProductsSkusListResponse>;
}
