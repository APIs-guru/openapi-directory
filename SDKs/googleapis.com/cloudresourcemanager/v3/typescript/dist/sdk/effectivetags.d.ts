import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EffectiveTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudresourcemanagerEffectiveTagsList - Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.
    **/
    cloudresourcemanagerEffectiveTagsList(req: operations.CloudresourcemanagerEffectiveTagsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerEffectiveTagsListResponse>;
}
