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
     * serviceusageServicesBatchEnable - Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.
    **/
    serviceusageServicesBatchEnable(req: operations.ServiceusageServicesBatchEnableRequest, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesBatchEnableResponse>;
    /**
     * serviceusageServicesBatchGet - Returns the service configurations and enabled states for a given list of services.
    **/
    serviceusageServicesBatchGet(req: operations.ServiceusageServicesBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesBatchGetResponse>;
    /**
     * serviceusageServicesDisable - Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.
    **/
    serviceusageServicesDisable(req: operations.ServiceusageServicesDisableRequest, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesDisableResponse>;
    /**
     * serviceusageServicesEnable - Enable a service so that it can be used with a project.
    **/
    serviceusageServicesEnable(req: operations.ServiceusageServicesEnableRequest, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesEnableResponse>;
    /**
     * serviceusageServicesGet - Returns the service configuration and enabled state for a given service.
    **/
    serviceusageServicesGet(req: operations.ServiceusageServicesGetRequest, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesGetResponse>;
    /**
     * serviceusageServicesList - List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.
    **/
    serviceusageServicesList(req: operations.ServiceusageServicesListRequest, config?: AxiosRequestConfig): Promise<operations.ServiceusageServicesListResponse>;
}
