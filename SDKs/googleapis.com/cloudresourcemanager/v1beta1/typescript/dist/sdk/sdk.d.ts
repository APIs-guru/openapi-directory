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
    CloudresourcemanagerOrganizationsGet(req: operations.CloudresourcemanagerOrganizationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsGetResponse>;
    CloudresourcemanagerOrganizationsGetIamPolicy(req: operations.CloudresourcemanagerOrganizationsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsGetIamPolicyResponse>;
    CloudresourcemanagerOrganizationsList(req: operations.CloudresourcemanagerOrganizationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsListResponse>;
    CloudresourcemanagerOrganizationsSetIamPolicy(req: operations.CloudresourcemanagerOrganizationsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsSetIamPolicyResponse>;
    CloudresourcemanagerOrganizationsTestIamPermissions(req: operations.CloudresourcemanagerOrganizationsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsTestIamPermissionsResponse>;
    CloudresourcemanagerOrganizationsUpdate(req: operations.CloudresourcemanagerOrganizationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsUpdateResponse>;
    CloudresourcemanagerProjectsCreate(req: operations.CloudresourcemanagerProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsCreateResponse>;
    CloudresourcemanagerProjectsDelete(req: operations.CloudresourcemanagerProjectsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsDeleteResponse>;
    CloudresourcemanagerProjectsGet(req: operations.CloudresourcemanagerProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetResponse>;
    CloudresourcemanagerProjectsGetAncestry(req: operations.CloudresourcemanagerProjectsGetAncestryRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetAncestryResponse>;
    CloudresourcemanagerProjectsGetIamPolicy(req: operations.CloudresourcemanagerProjectsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsGetIamPolicyResponse>;
    CloudresourcemanagerProjectsList(req: operations.CloudresourcemanagerProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsListResponse>;
    CloudresourcemanagerProjectsSetIamPolicy(req: operations.CloudresourcemanagerProjectsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsSetIamPolicyResponse>;
    CloudresourcemanagerProjectsTestIamPermissions(req: operations.CloudresourcemanagerProjectsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsTestIamPermissionsResponse>;
    CloudresourcemanagerProjectsUndelete(req: operations.CloudresourcemanagerProjectsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsUndeleteResponse>;
    CloudresourcemanagerProjectsUpdate(req: operations.CloudresourcemanagerProjectsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerProjectsUpdateResponse>;
}
export {};
