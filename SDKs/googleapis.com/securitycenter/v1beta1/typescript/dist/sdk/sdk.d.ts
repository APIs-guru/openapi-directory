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
    SecuritycenterOrganizationsAssetsGroup(req: operations.SecuritycenterOrganizationsAssetsGroupRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsGroupResponse>;
    SecuritycenterOrganizationsAssetsList(req: operations.SecuritycenterOrganizationsAssetsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsListResponse>;
    SecuritycenterOrganizationsAssetsRunDiscovery(req: operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse>;
    SecuritycenterOrganizationsOperationsCancel(req: operations.SecuritycenterOrganizationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsCancelResponse>;
    SecuritycenterOrganizationsOperationsDelete(req: operations.SecuritycenterOrganizationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsDeleteResponse>;
    SecuritycenterOrganizationsSourcesCreate(req: operations.SecuritycenterOrganizationsSourcesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesCreateResponse>;
    SecuritycenterOrganizationsSourcesFindingsCreate(req: operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse>;
    SecuritycenterOrganizationsSourcesFindingsGroup(req: operations.SecuritycenterOrganizationsSourcesFindingsGroupRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsGroupResponse>;
    SecuritycenterOrganizationsSourcesFindingsList(req: operations.SecuritycenterOrganizationsSourcesFindingsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsListResponse>;
    SecuritycenterOrganizationsSourcesFindingsSetState(req: operations.SecuritycenterOrganizationsSourcesFindingsSetStateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsSetStateResponse>;
    SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarks(req: operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse>;
    SecuritycenterOrganizationsSourcesGet(req: operations.SecuritycenterOrganizationsSourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesGetResponse>;
    SecuritycenterOrganizationsSourcesGetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse>;
    SecuritycenterOrganizationsSourcesList(req: operations.SecuritycenterOrganizationsSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesListResponse>;
    SecuritycenterOrganizationsSourcesSetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse>;
    SecuritycenterOrganizationsSourcesTestIamPermissions(req: operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse>;
}
export {};
