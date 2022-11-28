import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IamPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudassetIamPoliciesSearchAll - Searches all the IAM policies within a given accessible CRM scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.
    **/
    cloudassetIamPoliciesSearchAll(req: operations.CloudassetIamPoliciesSearchAllRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetIamPoliciesSearchAllResponse>;
}
