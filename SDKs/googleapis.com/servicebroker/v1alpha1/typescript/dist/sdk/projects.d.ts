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
     * servicebrokerProjectsBrokersInstancesServiceBindingsList - Lists all the bindings in the instance
    **/
    servicebrokerProjectsBrokersInstancesServiceBindingsList(req: operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersInstancesServiceBindingsListResponse>;
    /**
     * servicebrokerProjectsBrokersServiceInstancesList - Lists all the instances in the brokers
     * This API is an extension and not part of the OSB spec.
     * Hence the path is a standard Google API URL.
    **/
    servicebrokerProjectsBrokersServiceInstancesList(req: operations.ServicebrokerProjectsBrokersServiceInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersServiceInstancesListResponse>;
    /**
     * servicebrokerProjectsBrokersV2CatalogList - Lists all the Services registered with this broker for consumption for
     * given service registry broker, which contains an set of services.
     * Note, that Service producer API is separate from Broker API.
    **/
    servicebrokerProjectsBrokersV2CatalogList(req: operations.ServicebrokerProjectsBrokersV2CatalogListRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2CatalogListResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesCreate - Provisions a service instance.
     * If `request.accepts_incomplete` is false and Broker cannot execute request
     * synchronously HTTP 422 error will be returned along with
     * FAILED_PRECONDITION status.
     * If `request.accepts_incomplete` is true and the Broker decides to execute
     * resource asynchronously then HTTP 202 response code will be returned and a
     * valid polling operation in the response will be included.
     * If Broker executes the request synchronously and it succeeds HTTP 201
     * response will be furnished.
     * If identical instance exists, then HTTP 200 response will be returned.
     * If an instance with identical ID but mismatching parameters exists, then
     * HTTP 409 status code will be returned.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesCreate(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesDelete - Deprovisions a service instance.
     * For synchronous/asynchronous request details see CreateServiceInstance
     * method.
     * If service instance does not exist HTTP 410 status will be returned.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesDelete(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesDeleteResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesGet - Gets the given service instance from the system.
     * This API is an extension and not part of the OSB spec.
     * Hence the path is a standard Google API URL.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesGet(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesGetLastOperation - Returns the state of the last operation for the service instance.
     * Only last (or current) operation can be polled.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesGetLastOperation(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesPatch - Updates an existing service instance.
     * See CreateServiceInstance for possible response codes.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesPatch(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate - CreateBinding generates a service binding to an existing service instance.
     * See ProviServiceInstance for async operation details.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet - GetBinding returns the binding information.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse>;
    /**
     * servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation - Returns the state of the last operation for the binding.
     * Only last (or current) operation can be polled.
    **/
    servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse>;
}
