import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EffectiveIamPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudassetEffectiveIamPoliciesBatchGet - Gets effective IAM policies for a batch of resources.
    **/
    cloudassetEffectiveIamPoliciesBatchGet(req: operations.CloudassetEffectiveIamPoliciesBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetEffectiveIamPoliciesBatchGetResponse>;
}
