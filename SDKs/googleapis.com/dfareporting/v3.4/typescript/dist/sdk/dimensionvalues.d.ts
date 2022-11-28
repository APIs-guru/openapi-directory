import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DimensionValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingDimensionValuesQuery - Retrieves list of report dimension values for a list of filters.
    **/
    dfareportingDimensionValuesQuery(req: operations.DfareportingDimensionValuesQueryRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingDimensionValuesQueryResponse>;
}
