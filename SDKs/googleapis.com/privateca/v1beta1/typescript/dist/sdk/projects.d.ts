import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesActivate - Activate a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesActivate(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsList - Lists CertificateRevocationLists.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsList(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificateRevocationListsListResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesCertificatesCreate - Create a new Certificate in a given Project, Location from a particular CertificateAuthority.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesCertificatesCreate(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesCreateResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesCertificatesList - Lists Certificates.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesCertificatesList(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesCertificatesPatch - Update a Certificate. Currently, the only field you can update is the labels field.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesCertificatesPatch(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesCertificatesRevoke - Revoke a Certificate.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesCertificatesRevoke(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokeResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesCreate - Create a new CertificateAuthority in a given Project and Location.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesCreate(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesCreateResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesDisable - Disable a CertificateAuthority.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesDisable(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesDisableRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesDisableResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesEnable - Enable a CertificateAuthority.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesEnable(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesEnableRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesEnableResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesFetch - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesFetch(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesFetchRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesFetchResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesList - Lists CertificateAuthorities.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesList(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesListResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesRestore - Restore a CertificateAuthority that is scheduled for deletion.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesRestore(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesRestoreRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesRestoreResponse>;
    /**
     * privatecaProjectsLocationsCertificateAuthoritiesScheduleDelete - Schedule a CertificateAuthority for deletion.
    **/
    privatecaProjectsLocationsCertificateAuthoritiesScheduleDelete(req: operations.PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeleteResponse>;
    /**
     * privatecaProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    privatecaProjectsLocationsList(req: operations.PrivatecaProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsListResponse>;
    /**
     * privatecaProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    privatecaProjectsLocationsOperationsCancel(req: operations.PrivatecaProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsCancelResponse>;
    /**
     * privatecaProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    privatecaProjectsLocationsOperationsDelete(req: operations.PrivatecaProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsDeleteResponse>;
    /**
     * privatecaProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    privatecaProjectsLocationsOperationsList(req: operations.PrivatecaProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsListResponse>;
    /**
     * privatecaProjectsLocationsReusableConfigsGet - Returns a ReusableConfig.
    **/
    privatecaProjectsLocationsReusableConfigsGet(req: operations.PrivatecaProjectsLocationsReusableConfigsGetRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsGetResponse>;
    /**
     * privatecaProjectsLocationsReusableConfigsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    privatecaProjectsLocationsReusableConfigsGetIamPolicy(req: operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsGetIamPolicyResponse>;
    /**
     * privatecaProjectsLocationsReusableConfigsList - Lists ReusableConfigs.
    **/
    privatecaProjectsLocationsReusableConfigsList(req: operations.PrivatecaProjectsLocationsReusableConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsListResponse>;
    /**
     * privatecaProjectsLocationsReusableConfigsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    privatecaProjectsLocationsReusableConfigsSetIamPolicy(req: operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsSetIamPolicyResponse>;
    /**
     * privatecaProjectsLocationsReusableConfigsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    privatecaProjectsLocationsReusableConfigsTestIamPermissions(req: operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsResponse>;
}
