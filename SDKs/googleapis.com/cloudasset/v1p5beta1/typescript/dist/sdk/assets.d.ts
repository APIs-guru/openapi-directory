import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Assets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudassetAssetsList - Lists assets with time and resource types and returns paged results in response.
    **/
    cloudassetAssetsList(req: operations.CloudassetAssetsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetAssetsListResponse>;
}
