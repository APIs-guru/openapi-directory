import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * securitycenterOrganizationsAssetsGroup - Filters an organization's assets and groups them by their specified properties.
    **/
    securitycenterOrganizationsAssetsGroup(req: operations.SecuritycenterOrganizationsAssetsGroupRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsGroupResponse>;
    /**
     * securitycenterOrganizationsAssetsList - Lists an organization's assets.
    **/
    securitycenterOrganizationsAssetsList(req: operations.SecuritycenterOrganizationsAssetsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsListResponse>;
    /**
     * securitycenterOrganizationsAssetsRunDiscovery - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
    **/
    securitycenterOrganizationsAssetsRunDiscovery(req: operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse>;
    /**
     * securitycenterOrganizationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    securitycenterOrganizationsOperationsCancel(req: operations.SecuritycenterOrganizationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsCancelResponse>;
    /**
     * securitycenterOrganizationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    securitycenterOrganizationsOperationsDelete(req: operations.SecuritycenterOrganizationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsDeleteResponse>;
    /**
     * securitycenterOrganizationsSourcesCreate - Creates a source.
    **/
    securitycenterOrganizationsSourcesCreate(req: operations.SecuritycenterOrganizationsSourcesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesCreateResponse>;
    /**
     * securitycenterOrganizationsSourcesFindingsCreate - Creates a finding. The corresponding source must exist for finding creation to succeed.
    **/
    securitycenterOrganizationsSourcesFindingsCreate(req: operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse>;
    /**
     * securitycenterOrganizationsSourcesFindingsGroup - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
    **/
    securitycenterOrganizationsSourcesFindingsGroup(req: operations.SecuritycenterOrganizationsSourcesFindingsGroupRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsGroupResponse>;
    /**
     * securitycenterOrganizationsSourcesFindingsList - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
    **/
    securitycenterOrganizationsSourcesFindingsList(req: operations.SecuritycenterOrganizationsSourcesFindingsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsListResponse>;
    /**
     * securitycenterOrganizationsSourcesFindingsSetState - Updates the state of a finding.
    **/
    securitycenterOrganizationsSourcesFindingsSetState(req: operations.SecuritycenterOrganizationsSourcesFindingsSetStateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsSetStateResponse>;
    /**
     * securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks - Updates security marks.
    **/
    securitycenterOrganizationsSourcesFindingsUpdateSecurityMarks(req: operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse>;
    /**
     * securitycenterOrganizationsSourcesGet - Gets a source.
    **/
    securitycenterOrganizationsSourcesGet(req: operations.SecuritycenterOrganizationsSourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesGetResponse>;
    /**
     * securitycenterOrganizationsSourcesGetIamPolicy - Gets the access control policy on the specified Source.
    **/
    securitycenterOrganizationsSourcesGetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse>;
    /**
     * securitycenterOrganizationsSourcesList - Lists all sources belonging to an organization.
    **/
    securitycenterOrganizationsSourcesList(req: operations.SecuritycenterOrganizationsSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesListResponse>;
    /**
     * securitycenterOrganizationsSourcesSetIamPolicy - Sets the access control policy on the specified Source.
    **/
    securitycenterOrganizationsSourcesSetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse>;
    /**
     * securitycenterOrganizationsSourcesTestIamPermissions - Returns the permissions that a caller has on the specified source.
    **/
    securitycenterOrganizationsSourcesTestIamPermissions(req: operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse>;
}
