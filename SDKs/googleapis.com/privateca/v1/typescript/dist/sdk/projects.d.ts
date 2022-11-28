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
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList - Lists CertificateRevocationLists.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate - Create a new CertificateAuthority in a given Project and Location.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable - Disable a CertificateAuthority.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable - Enable a CertificateAuthority.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList - Lists CertificateAuthorities.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete - Undelete a CertificateAuthority that has been deleted.
    **/
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificatesCreate - Create a new Certificate in a given Project, Location from a particular CaPool.
    **/
    privatecaProjectsLocationsCaPoolsCertificatesCreate(req: operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificatesList - Lists Certificates.
    **/
    privatecaProjectsLocationsCaPoolsCertificatesList(req: operations.PrivatecaProjectsLocationsCaPoolsCertificatesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificatesListResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCertificatesRevoke - Revoke a Certificate.
    **/
    privatecaProjectsLocationsCaPoolsCertificatesRevoke(req: operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsCreate - Create a CaPool.
    **/
    privatecaProjectsLocationsCaPoolsCreate(req: operations.PrivatecaProjectsLocationsCaPoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCreateResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsFetchCaCerts - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
    **/
    privatecaProjectsLocationsCaPoolsFetchCaCerts(req: operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse>;
    /**
     * privatecaProjectsLocationsCaPoolsList - Lists CaPools.
    **/
    privatecaProjectsLocationsCaPoolsList(req: operations.PrivatecaProjectsLocationsCaPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsListResponse>;
    /**
     * privatecaProjectsLocationsCertificateTemplatesCreate - Create a new CertificateTemplate in a given Project and Location.
    **/
    privatecaProjectsLocationsCertificateTemplatesCreate(req: operations.PrivatecaProjectsLocationsCertificateTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesCreateResponse>;
    /**
     * privatecaProjectsLocationsCertificateTemplatesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    privatecaProjectsLocationsCertificateTemplatesGetIamPolicy(req: operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse>;
    /**
     * privatecaProjectsLocationsCertificateTemplatesList - Lists CertificateTemplates.
    **/
    privatecaProjectsLocationsCertificateTemplatesList(req: operations.PrivatecaProjectsLocationsCertificateTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesListResponse>;
    /**
     * privatecaProjectsLocationsCertificateTemplatesPatch - Update a CertificateTemplate.
    **/
    privatecaProjectsLocationsCertificateTemplatesPatch(req: operations.PrivatecaProjectsLocationsCertificateTemplatesPatchRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesPatchResponse>;
    /**
     * privatecaProjectsLocationsCertificateTemplatesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    privatecaProjectsLocationsCertificateTemplatesSetIamPolicy(req: operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse>;
    /**
     * privatecaProjectsLocationsCertificateTemplatesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    privatecaProjectsLocationsCertificateTemplatesTestIamPermissions(req: operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse>;
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
     * privatecaProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    privatecaProjectsLocationsOperationsGet(req: operations.PrivatecaProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsGetResponse>;
    /**
     * privatecaProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    privatecaProjectsLocationsOperationsList(req: operations.PrivatecaProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsListResponse>;
}
