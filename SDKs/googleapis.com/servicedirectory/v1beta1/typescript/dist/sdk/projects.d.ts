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
     * servicedirectoryProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    servicedirectoryProjectsLocationsList(req: operations.ServicedirectoryProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsListResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesCreate - Creates a namespace, and returns the new namespace.
    **/
    servicedirectoryProjectsLocationsNamespacesCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesCreateResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesList - Lists all namespaces.
    **/
    servicedirectoryProjectsLocationsNamespacesList(req: operations.ServicedirectoryProjectsLocationsNamespacesListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesListResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesCreate - Creates a service, and returns the new service.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate - Creates an endpoint, and returns the new endpoint.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete - Deletes an endpoint.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet - Gets an endpoint.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesEndpointsList - Lists all endpoints.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsList(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch - Updates an endpoint.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesList - Lists all services belonging to a namespace.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesList(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesListRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesListResponse>;
    /**
     * servicedirectoryProjectsLocationsNamespacesServicesResolve - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
    **/
    servicedirectoryProjectsLocationsNamespacesServicesResolve(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse>;
    /**
     * servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy - Gets the IAM Policy for a resource
    **/
    servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse>;
    /**
     * servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy - Sets the IAM Policy for a resource
    **/
    servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse>;
    /**
     * servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions - Tests IAM permissions for a resource (namespace, service or service workload only).
    **/
    servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse>;
}
