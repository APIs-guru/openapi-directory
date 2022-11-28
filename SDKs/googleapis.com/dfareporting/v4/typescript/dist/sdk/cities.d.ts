import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCitiesList - Retrieves a list of cities, possibly filtered.
    **/
    dfareportingCitiesList(req: operations.DfareportingCitiesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCitiesListResponse>;
}
