import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject - Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
    **/
    monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(req: operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse>;
    /**
     * monitoringLocationsGlobalMetricsScopesProjectsCreate - Adds a MonitoredProject with the given project ID to the specified Metrics Scope.
    **/
    monitoringLocationsGlobalMetricsScopesProjectsCreate(req: operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse>;
}
