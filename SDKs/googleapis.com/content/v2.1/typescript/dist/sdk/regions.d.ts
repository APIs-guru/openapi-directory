import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Regions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentRegionsCreate - Creates a region definition in your Merchant Center account.
    **/
    contentRegionsCreate(req: operations.ContentRegionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentRegionsCreateResponse>;
    /**
     * contentRegionsDelete - Deletes a region definition from your Merchant Center account.
    **/
    contentRegionsDelete(req: operations.ContentRegionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentRegionsDeleteResponse>;
    /**
     * contentRegionsGet - Retrieves a region defined in your Merchant Center account.
    **/
    contentRegionsGet(req: operations.ContentRegionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentRegionsGetResponse>;
    /**
     * contentRegionsList - Lists the regions in your Merchant Center account.
    **/
    contentRegionsList(req: operations.ContentRegionsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentRegionsListResponse>;
    /**
     * contentRegionsPatch - Updates a region definition in your Merchant Center account.
    **/
    contentRegionsPatch(req: operations.ContentRegionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentRegionsPatchResponse>;
}
