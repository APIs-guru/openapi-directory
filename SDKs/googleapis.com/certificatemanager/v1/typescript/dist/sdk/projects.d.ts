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
     * certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate - Creates a new CertificateIssuanceConfig in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse>;
    /**
     * certificatemanagerProjectsLocationsCertificateIssuanceConfigsList - Lists CertificateIssuanceConfigs in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificateIssuanceConfigsList(req: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse>;
    /**
     * certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate - Creates a new CertificateMapEntry in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateResponse>;
    /**
     * certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList - Lists CertificateMapEntries in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse>;
    /**
     * certificatemanagerProjectsLocationsCertificateMapsCreate - Creates a new CertificateMap in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificateMapsCreate(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCreateResponse>;
    /**
     * certificatemanagerProjectsLocationsCertificateMapsList - Lists CertificateMaps in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificateMapsList(req: operations.CertificatemanagerProjectsLocationsCertificateMapsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsListResponse>;
    /**
     * certificatemanagerProjectsLocationsCertificatesCreate - Creates a new Certificate in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificatesCreate(req: operations.CertificatemanagerProjectsLocationsCertificatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificatesCreateResponse>;
    /**
     * certificatemanagerProjectsLocationsCertificatesList - Lists Certificates in a given project and location.
    **/
    certificatemanagerProjectsLocationsCertificatesList(req: operations.CertificatemanagerProjectsLocationsCertificatesListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificatesListResponse>;
    /**
     * certificatemanagerProjectsLocationsDnsAuthorizationsCreate - Creates a new DnsAuthorization in a given project and location.
    **/
    certificatemanagerProjectsLocationsDnsAuthorizationsCreate(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse>;
    /**
     * certificatemanagerProjectsLocationsDnsAuthorizationsList - Lists DnsAuthorizations in a given project and location.
    **/
    certificatemanagerProjectsLocationsDnsAuthorizationsList(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse>;
    /**
     * certificatemanagerProjectsLocationsDnsAuthorizationsPatch - Updates a DnsAuthorization.
    **/
    certificatemanagerProjectsLocationsDnsAuthorizationsPatch(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse>;
    /**
     * certificatemanagerProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    certificatemanagerProjectsLocationsList(req: operations.CertificatemanagerProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsListResponse>;
    /**
     * certificatemanagerProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    certificatemanagerProjectsLocationsOperationsCancel(req: operations.CertificatemanagerProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsCancelResponse>;
    /**
     * certificatemanagerProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    certificatemanagerProjectsLocationsOperationsDelete(req: operations.CertificatemanagerProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsDeleteResponse>;
    /**
     * certificatemanagerProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    certificatemanagerProjectsLocationsOperationsGet(req: operations.CertificatemanagerProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsGetResponse>;
    /**
     * certificatemanagerProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    certificatemanagerProjectsLocationsOperationsList(req: operations.CertificatemanagerProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsListResponse>;
}
