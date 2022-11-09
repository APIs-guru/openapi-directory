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
    OrgpolicyOrganizationsCustomConstraintsCreate(req: operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyOrganizationsCustomConstraintsCreateResponse>;
    OrgpolicyOrganizationsCustomConstraintsList(req: operations.OrgpolicyOrganizationsCustomConstraintsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyOrganizationsCustomConstraintsListResponse>;
    OrgpolicyProjectsConstraintsList(req: operations.OrgpolicyProjectsConstraintsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsConstraintsListResponse>;
    OrgpolicyProjectsPoliciesCreate(req: operations.OrgpolicyProjectsPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesCreateResponse>;
    OrgpolicyProjectsPoliciesDelete(req: operations.OrgpolicyProjectsPoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesDeleteResponse>;
    OrgpolicyProjectsPoliciesGet(req: operations.OrgpolicyProjectsPoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesGetResponse>;
    OrgpolicyProjectsPoliciesGetEffectivePolicy(req: operations.OrgpolicyProjectsPoliciesGetEffectivePolicyRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse>;
    OrgpolicyProjectsPoliciesList(req: operations.OrgpolicyProjectsPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesListResponse>;
    OrgpolicyProjectsPoliciesPatch(req: operations.OrgpolicyProjectsPoliciesPatchRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesPatchResponse>;
}
export {};
