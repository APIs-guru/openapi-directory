import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CombinedAudiences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoCombinedAudiencesGet - Gets a combined audience.
    **/
    displayvideoCombinedAudiencesGet(req: operations.DisplayvideoCombinedAudiencesGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCombinedAudiencesGetResponse>;
    /**
     * displayvideoCombinedAudiencesList - Lists combined audiences. The order is defined by the order_by parameter.
    **/
    displayvideoCombinedAudiencesList(req: operations.DisplayvideoCombinedAudiencesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCombinedAudiencesListResponse>;
}
