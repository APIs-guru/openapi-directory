import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Environments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allLines - Get all environments
     *
     * Get all environments provided by the current Otoroshi instance
    **/
    allLines(req: operations.AllLinesRequest, config?: AxiosRequestConfig): Promise<operations.AllLinesResponse>;
    /**
     * servicesForALine - Get all services for an environment
     *
     * Get all services for an environment provided by the current Otoroshi instance
    **/
    servicesForALine(req: operations.ServicesForALineRequest, config?: AxiosRequestConfig): Promise<operations.ServicesForALineResponse>;
}
