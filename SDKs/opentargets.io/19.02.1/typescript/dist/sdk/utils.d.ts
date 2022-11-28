import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Utils {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDataMetrics - Get metrics about the current data release
     *
     * Returns the metrics about associations and evidences, divided by datasource, genes and so on.
     *
    **/
    getDataMetrics(config?: AxiosRequestConfig): Promise<operations.GetDataMetricsResponse>;
    /**
     * getDataStats - Get statistics about the current data release
     *
     * Returns the number of associations and evidences, divided by datasource.
     *
    **/
    getDataStats(config?: AxiosRequestConfig): Promise<operations.GetDataStatsResponse>;
    /**
     * getPing - Ping service
     *
     * Check if the API is up
     *
    **/
    getPing(config?: AxiosRequestConfig): Promise<operations.GetPingResponse>;
    /**
     * getTherapeuticAreas - Get the list of therapeutic areas about the current data release
     *
     * Returns the list of therapeutic areas for the current data release
     *
    **/
    getTherapeuticAreas(config?: AxiosRequestConfig): Promise<operations.GetTherapeuticAreasResponse>;
    /**
     * getVersion - Get API version
     *
     * Returns current API version.
     *
    **/
    getVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
}
