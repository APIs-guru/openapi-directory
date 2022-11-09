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
    CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse>;
    CertificatemanagerProjectsLocationsCertificateIssuanceConfigsList(req: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse>;
    CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateResponse>;
    CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse>;
    CertificatemanagerProjectsLocationsCertificateMapsCreate(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCreateResponse>;
    CertificatemanagerProjectsLocationsCertificateMapsList(req: operations.CertificatemanagerProjectsLocationsCertificateMapsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsListResponse>;
    CertificatemanagerProjectsLocationsCertificatesCreate(req: operations.CertificatemanagerProjectsLocationsCertificatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificatesCreateResponse>;
    CertificatemanagerProjectsLocationsCertificatesList(req: operations.CertificatemanagerProjectsLocationsCertificatesListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificatesListResponse>;
    CertificatemanagerProjectsLocationsDnsAuthorizationsCreate(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse>;
    CertificatemanagerProjectsLocationsDnsAuthorizationsList(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse>;
    CertificatemanagerProjectsLocationsDnsAuthorizationsPatch(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse>;
    CertificatemanagerProjectsLocationsList(req: operations.CertificatemanagerProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsListResponse>;
    CertificatemanagerProjectsLocationsOperationsCancel(req: operations.CertificatemanagerProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsCancelResponse>;
    CertificatemanagerProjectsLocationsOperationsDelete(req: operations.CertificatemanagerProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsDeleteResponse>;
    CertificatemanagerProjectsLocationsOperationsGet(req: operations.CertificatemanagerProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsGetResponse>;
    CertificatemanagerProjectsLocationsOperationsList(req: operations.CertificatemanagerProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsListResponse>;
}
export {};
