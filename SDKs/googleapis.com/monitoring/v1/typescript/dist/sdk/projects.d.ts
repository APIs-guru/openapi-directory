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
     * monitoringProjectsDashboardsCreate - Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
    **/
    monitoringProjectsDashboardsCreate(req: operations.MonitoringProjectsDashboardsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsCreateResponse>;
    /**
     * monitoringProjectsDashboardsDelete - Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
    **/
    monitoringProjectsDashboardsDelete(req: operations.MonitoringProjectsDashboardsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsDeleteResponse>;
    /**
     * monitoringProjectsDashboardsGet - Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
    **/
    monitoringProjectsDashboardsGet(req: operations.MonitoringProjectsDashboardsGetRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsGetResponse>;
    /**
     * monitoringProjectsDashboardsList - Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
    **/
    monitoringProjectsDashboardsList(req: operations.MonitoringProjectsDashboardsListRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsListResponse>;
    /**
     * monitoringProjectsDashboardsPatch - Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
    **/
    monitoringProjectsDashboardsPatch(req: operations.MonitoringProjectsDashboardsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsPatchResponse>;
    /**
     * monitoringProjectsLocationPrometheusApiV1LabelValues - Lists possible values for a given label name.
    **/
    monitoringProjectsLocationPrometheusApiV1LabelValues(req: operations.MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse>;
    /**
     * monitoringProjectsLocationPrometheusApiV1Labels - Lists labels for metrics.
    **/
    monitoringProjectsLocationPrometheusApiV1Labels(req: operations.MonitoringProjectsLocationPrometheusApiV1LabelsRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1LabelsResponse>;
    /**
     * monitoringProjectsLocationPrometheusApiV1LabelsList - Lists labels for metrics.
    **/
    monitoringProjectsLocationPrometheusApiV1LabelsList(req: operations.MonitoringProjectsLocationPrometheusApiV1LabelsListRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1LabelsListResponse>;
    /**
     * monitoringProjectsLocationPrometheusApiV1MetadataList - Lists metadata for metrics.
    **/
    monitoringProjectsLocationPrometheusApiV1MetadataList(req: operations.MonitoringProjectsLocationPrometheusApiV1MetadataListRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1MetadataListResponse>;
    /**
     * monitoringProjectsLocationPrometheusApiV1Query - Evaluate a PromQL query at a single point in time.
    **/
    monitoringProjectsLocationPrometheusApiV1Query(req: operations.MonitoringProjectsLocationPrometheusApiV1QueryRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1QueryResponse>;
    /**
     * monitoringProjectsLocationPrometheusApiV1QueryRange - Evaluate a PromQL query with start, end time range.
    **/
    monitoringProjectsLocationPrometheusApiV1QueryRange(req: operations.MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse>;
    /**
     * monitoringProjectsLocationPrometheusApiV1Series - Lists metadata for metrics.
    **/
    monitoringProjectsLocationPrometheusApiV1Series(req: operations.MonitoringProjectsLocationPrometheusApiV1SeriesRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1SeriesResponse>;
}
