import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LoadBalancerTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLoadBalancerTypes - Get all Load Balancer Types
     *
     * Gets all Load Balancer type objects.
    **/
    getLoadBalancerTypes(req: operations.GetLoadBalancerTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerTypesResponse>;
    /**
     * getLoadBalancerTypesId - Get a Load Balancer Type
     *
     * Gets a specific Load Balancer type object.
    **/
    getLoadBalancerTypesId(req: operations.GetLoadBalancerTypesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerTypesIdResponse>;
}
