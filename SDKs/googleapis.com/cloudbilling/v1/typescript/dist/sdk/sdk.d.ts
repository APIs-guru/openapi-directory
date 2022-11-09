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
    CloudbillingBillingAccountsCreate(req: operations.CloudbillingBillingAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsCreateResponse>;
    CloudbillingBillingAccountsGet(req: operations.CloudbillingBillingAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsGetResponse>;
    CloudbillingBillingAccountsGetIamPolicy(req: operations.CloudbillingBillingAccountsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsGetIamPolicyResponse>;
    CloudbillingBillingAccountsList(req: operations.CloudbillingBillingAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsListResponse>;
    CloudbillingBillingAccountsPatch(req: operations.CloudbillingBillingAccountsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsPatchResponse>;
    CloudbillingBillingAccountsProjectsList(req: operations.CloudbillingBillingAccountsProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsProjectsListResponse>;
    CloudbillingBillingAccountsSetIamPolicy(req: operations.CloudbillingBillingAccountsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsSetIamPolicyResponse>;
    CloudbillingBillingAccountsTestIamPermissions(req: operations.CloudbillingBillingAccountsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsTestIamPermissionsResponse>;
    CloudbillingProjectsGetBillingInfo(req: operations.CloudbillingProjectsGetBillingInfoRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingProjectsGetBillingInfoResponse>;
    CloudbillingProjectsUpdateBillingInfo(req: operations.CloudbillingProjectsUpdateBillingInfoRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingProjectsUpdateBillingInfoResponse>;
    CloudbillingServicesList(req: operations.CloudbillingServicesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingServicesListResponse>;
    CloudbillingServicesSkusList(req: operations.CloudbillingServicesSkusListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingServicesSkusListResponse>;
}
export {};
