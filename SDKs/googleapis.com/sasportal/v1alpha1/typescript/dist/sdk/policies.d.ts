import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Policies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sasportalPoliciesGet - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    sasportalPoliciesGet(req: operations.SasportalPoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.SasportalPoliciesGetResponse>;
    /**
     * sasportalPoliciesSet - Sets the access control policy on the specified resource. Replaces any existing policy.
    **/
    sasportalPoliciesSet(req: operations.SasportalPoliciesSetRequest, config?: AxiosRequestConfig): Promise<operations.SasportalPoliciesSetResponse>;
    /**
     * sasportalPoliciesTest - Returns permissions that a caller has on the specified resource.
    **/
    sasportalPoliciesTest(req: operations.SasportalPoliciesTestRequest, config?: AxiosRequestConfig): Promise<operations.SasportalPoliciesTestResponse>;
}
