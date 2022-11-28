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
     * securitycenterOrganizationsAssetsRunDiscovery - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
    **/
    securitycenterOrganizationsAssetsRunDiscovery(req: operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse>;
    /**
     * securitycenterOrganizationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    securitycenterOrganizationsOperationsCancel(req: operations.SecuritycenterOrganizationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsOperationsCancelResponse>;
    /**
     * securitycenterOrganizationsSourcesCreate - Creates a source.
    **/
    securitycenterOrganizationsSourcesCreate(req: operations.SecuritycenterOrganizationsSourcesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesCreateResponse>;
    /**
     * securitycenterOrganizationsSourcesFindingsCreate - Creates a finding. The corresponding source must exist for finding creation to succeed.
    **/
    securitycenterOrganizationsSourcesFindingsCreate(req: operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse>;
    /**
     * securitycenterOrganizationsSourcesGetIamPolicy - Gets the access control policy on the specified Source.
    **/
    securitycenterOrganizationsSourcesGetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse>;
    /**
     * securitycenterOrganizationsSourcesSetIamPolicy - Sets the access control policy on the specified Source.
    **/
    securitycenterOrganizationsSourcesSetIamPolicy(req: operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse>;
    /**
     * securitycenterOrganizationsSourcesTestIamPermissions - Returns the permissions that a caller has on the specified source.
    **/
    securitycenterOrganizationsSourcesTestIamPermissions(req: operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse>;
}
