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
    ServicedirectoryProjectsLocationsList(req: operations.ServicedirectoryProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsListResponse>;
    ServicedirectoryProjectsLocationsNamespacesCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesCreateResponse>;
    ServicedirectoryProjectsLocationsNamespacesList(req: operations.ServicedirectoryProjectsLocationsNamespacesListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesListResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGet(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesEndpointsList(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesList(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesListResponse>;
    ServicedirectoryProjectsLocationsNamespacesServicesResolve(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse>;
    ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse>;
    ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse>;
    ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse>;
}
export {};
