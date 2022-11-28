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
     * runProjectsLocationsAuthorizeddomainsList - List authorized domains.
    **/
    runProjectsLocationsAuthorizeddomainsList(req: operations.RunProjectsLocationsAuthorizeddomainsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsAuthorizeddomainsListResponse>;
    /**
     * runProjectsLocationsConfigurationsList - List configurations.
    **/
    runProjectsLocationsConfigurationsList(req: operations.RunProjectsLocationsConfigurationsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsConfigurationsListResponse>;
    /**
     * runProjectsLocationsDomainmappingsCreate - Create a new domain mapping.
    **/
    runProjectsLocationsDomainmappingsCreate(req: operations.RunProjectsLocationsDomainmappingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsDomainmappingsCreateResponse>;
    /**
     * runProjectsLocationsDomainmappingsList - List all domain mappings.
    **/
    runProjectsLocationsDomainmappingsList(req: operations.RunProjectsLocationsDomainmappingsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsDomainmappingsListResponse>;
    /**
     * runProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    runProjectsLocationsList(req: operations.RunProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsListResponse>;
    /**
     * runProjectsLocationsRevisionsList - List revisions.
    **/
    runProjectsLocationsRevisionsList(req: operations.RunProjectsLocationsRevisionsListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsRevisionsListResponse>;
    /**
     * runProjectsLocationsRoutesList - List routes.
    **/
    runProjectsLocationsRoutesList(req: operations.RunProjectsLocationsRoutesListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsRoutesListResponse>;
    /**
     * runProjectsLocationsServicesCreate - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
    **/
    runProjectsLocationsServicesCreate(req: operations.RunProjectsLocationsServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesCreateResponse>;
    /**
     * runProjectsLocationsServicesDelete - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
    **/
    runProjectsLocationsServicesDelete(req: operations.RunProjectsLocationsServicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesDeleteResponse>;
    /**
     * runProjectsLocationsServicesGet - Gets information about a service.
    **/
    runProjectsLocationsServicesGet(req: operations.RunProjectsLocationsServicesGetRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesGetResponse>;
    /**
     * runProjectsLocationsServicesGetIamPolicy - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
    **/
    runProjectsLocationsServicesGetIamPolicy(req: operations.RunProjectsLocationsServicesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesGetIamPolicyResponse>;
    /**
     * runProjectsLocationsServicesList - Lists services for the given project and region.
    **/
    runProjectsLocationsServicesList(req: operations.RunProjectsLocationsServicesListRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesListResponse>;
    /**
     * runProjectsLocationsServicesReplaceService - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
    **/
    runProjectsLocationsServicesReplaceService(req: operations.RunProjectsLocationsServicesReplaceServiceRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesReplaceServiceResponse>;
    /**
     * runProjectsLocationsServicesSetIamPolicy - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
    **/
    runProjectsLocationsServicesSetIamPolicy(req: operations.RunProjectsLocationsServicesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesSetIamPolicyResponse>;
    /**
     * runProjectsLocationsServicesTestIamPermissions - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
    **/
    runProjectsLocationsServicesTestIamPermissions(req: operations.RunProjectsLocationsServicesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesTestIamPermissionsResponse>;
}
