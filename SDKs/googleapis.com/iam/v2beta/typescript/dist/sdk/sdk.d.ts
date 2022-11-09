import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    IamPoliciesCreatePolicy(req: operations.IamPoliciesCreatePolicyRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesCreatePolicyResponse>;
    IamPoliciesDelete(req: operations.IamPoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesDeleteResponse>;
    IamPoliciesListPolicies(req: operations.IamPoliciesListPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesListPoliciesResponse>;
    IamPoliciesOperationsGet(req: operations.IamPoliciesOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesOperationsGetResponse>;
    IamPoliciesUpdate(req: operations.IamPoliciesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesUpdateResponse>;
}
export {};
