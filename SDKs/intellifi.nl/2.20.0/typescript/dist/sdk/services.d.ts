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
     * getServiceById - Get service
    **/
    getServiceById(req: operations.GetServiceByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceByIdResponse>;
    /**
     * getServices - Get all services
    **/
    getServices(req: operations.GetServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
    /**
     * updateService - Update existing service
    **/
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
}
