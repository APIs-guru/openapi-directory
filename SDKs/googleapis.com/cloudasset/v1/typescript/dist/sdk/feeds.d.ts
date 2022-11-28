import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Feeds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudassetFeedsCreate - Creates a feed in a parent project/folder/organization to listen to its asset updates.
    **/
    cloudassetFeedsCreate(req: operations.CloudassetFeedsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetFeedsCreateResponse>;
    /**
     * cloudassetFeedsList - Lists all asset feeds in a parent project/folder/organization.
    **/
    cloudassetFeedsList(req: operations.CloudassetFeedsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetFeedsListResponse>;
}
