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
     * prodTtSasportalPoliciesGet - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    prodTtSasportalPoliciesGet(req: operations.ProdTtSasportalPoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalPoliciesGetResponse>;
    /**
     * prodTtSasportalPoliciesSet - Sets the access control policy on the specified resource. Replaces any existing policy.
    **/
    prodTtSasportalPoliciesSet(req: operations.ProdTtSasportalPoliciesSetRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalPoliciesSetResponse>;
    /**
     * prodTtSasportalPoliciesTest - Returns permissions that a caller has on the specified resource.
    **/
    prodTtSasportalPoliciesTest(req: operations.ProdTtSasportalPoliciesTestRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalPoliciesTestResponse>;
}
