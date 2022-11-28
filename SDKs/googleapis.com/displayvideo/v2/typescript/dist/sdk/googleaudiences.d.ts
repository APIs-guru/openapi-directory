import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GoogleAudiences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoGoogleAudiencesGet - Gets a Google audience.
    **/
    displayvideoGoogleAudiencesGet(req: operations.DisplayvideoGoogleAudiencesGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGoogleAudiencesGetResponse>;
    /**
     * displayvideoGoogleAudiencesList - Lists Google audiences. The order is defined by the order_by parameter.
    **/
    displayvideoGoogleAudiencesList(req: operations.DisplayvideoGoogleAudiencesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGoogleAudiencesListResponse>;
}
