import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Estimate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEstimate - Get a specific estimate of project
     *
     * Get a specific estimate of project
    **/
    getEstimate(req: operations.GetEstimateRequest, config?: AxiosRequestConfig): Promise<operations.GetEstimateResponse>;
    /**
     * getEstimateList - List the Estimates
     *
     * List the Estimates
    **/
    getEstimateList(req: operations.GetEstimateListRequest, config?: AxiosRequestConfig): Promise<operations.GetEstimateListResponse>;
    /**
     * postEstimate - Create a Estimate
     *
     * Create a Estimate
    **/
    postEstimate(req: operations.PostEstimateRequest, config?: AxiosRequestConfig): Promise<operations.PostEstimateResponse>;
}
