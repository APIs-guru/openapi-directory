import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TargetingTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoTargetingTypesTargetingOptionsGet - Gets a single targeting option.
    **/
    displayvideoTargetingTypesTargetingOptionsGet(req: operations.DisplayvideoTargetingTypesTargetingOptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoTargetingTypesTargetingOptionsGetResponse>;
    /**
     * displayvideoTargetingTypesTargetingOptionsList - Lists targeting options of a given type.
    **/
    displayvideoTargetingTypesTargetingOptionsList(req: operations.DisplayvideoTargetingTypesTargetingOptionsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoTargetingTypesTargetingOptionsListResponse>;
    /**
     * displayvideoTargetingTypesTargetingOptionsSearch - Searches for targeting options of a given type based on the given search terms.
    **/
    displayvideoTargetingTypesTargetingOptionsSearch(req: operations.DisplayvideoTargetingTypesTargetingOptionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoTargetingTypesTargetingOptionsSearchResponse>;
}
