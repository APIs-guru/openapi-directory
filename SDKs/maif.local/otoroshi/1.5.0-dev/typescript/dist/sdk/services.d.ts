import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allServices - Get all services
     *
     * Get all services
    **/
    allServices(req: operations.AllServicesRequest, config?: AxiosRequestConfig): Promise<operations.AllServicesResponse>;
    /**
     * createService - Create a new service descriptor
     *
     * Create a new service descriptor
    **/
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * createServiceTemplate - Create a service descriptor error template
     *
     * Update a service descriptor targets
    **/
    createServiceTemplate(req: operations.CreateServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceTemplateResponse>;
    /**
     * deleteService - Delete a service descriptor
     *
     * Delete a service descriptor
    **/
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * deleteServiceTemplate - Delete a service descriptor error template
     *
     * Delete a service descriptor error template
    **/
    deleteServiceTemplate(req: operations.DeleteServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceTemplateResponse>;
    /**
     * patchService - Update a service descriptor with a diff
     *
     * Update a service descriptor with a diff
    **/
    patchService(req: operations.PatchServiceRequest, config?: AxiosRequestConfig): Promise<operations.PatchServiceResponse>;
    /**
     * service - Get a service descriptor
     *
     * Get a service descriptor
    **/
    service(req: operations.ServiceRequest, config?: AxiosRequestConfig): Promise<operations.ServiceResponse>;
    /**
     * serviceAddTarget - Add a target to a service descriptor
     *
     * Add a target to a service descriptor
    **/
    serviceAddTarget(req: operations.ServiceAddTargetRequest, config?: AxiosRequestConfig): Promise<operations.ServiceAddTargetResponse>;
    /**
     * serviceDeleteTarget - Delete a service descriptor target
     *
     * Delete a service descriptor target
    **/
    serviceDeleteTarget(req: operations.ServiceDeleteTargetRequest, config?: AxiosRequestConfig): Promise<operations.ServiceDeleteTargetResponse>;
    /**
     * serviceGroupServices - Get all services descriptor for a group
     *
     * Get all services descriptor for a group
    **/
    serviceGroupServices(req: operations.ServiceGroupServicesRequest, config?: AxiosRequestConfig): Promise<operations.ServiceGroupServicesResponse>;
    /**
     * serviceTargets - Get a service descriptor targets
     *
     * Get a service descriptor targets
    **/
    serviceTargets(req: operations.ServiceTargetsRequest, config?: AxiosRequestConfig): Promise<operations.ServiceTargetsResponse>;
    /**
     * serviceTemplate - Get a service descriptor error template
     *
     * Get a service descriptor error template
    **/
    serviceTemplate(req: operations.ServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ServiceTemplateResponse>;
    /**
     * updateService - Update a service descriptor
     *
     * Update a service descriptor
    **/
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * updateServiceTargets - Update a service descriptor targets
     *
     * Update a service descriptor targets
    **/
    updateServiceTargets(req: operations.UpdateServiceTargetsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceTargetsResponse>;
    /**
     * updateServiceTemplate - Update an error template to a service descriptor
     *
     * Update an error template to a service descriptor
    **/
    updateServiceTemplate(req: operations.UpdateServiceTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceTemplateResponse>;
}
