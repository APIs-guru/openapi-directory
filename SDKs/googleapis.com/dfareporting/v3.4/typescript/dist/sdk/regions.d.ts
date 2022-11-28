import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Regions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingRegionsList - Retrieves a list of regions.
    **/
    dfareportingRegionsList(req: operations.DfareportingRegionsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingRegionsListResponse>;
}
