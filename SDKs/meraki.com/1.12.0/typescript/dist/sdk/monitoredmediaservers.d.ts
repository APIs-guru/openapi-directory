import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MonitoredMediaServers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationInsightMonitoredMediaServer - Add a media server to be monitored for this organization
     *
     * Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
    **/
    createOrganizationInsightMonitoredMediaServer(req: operations.CreateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * deleteOrganizationInsightMonitoredMediaServer - Delete a monitored media server from this organization
     *
     * Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
    **/
    deleteOrganizationInsightMonitoredMediaServer(req: operations.DeleteOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * getOrganizationInsightMonitoredMediaServer - Return a monitored media server for this organization
     *
     * Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
    **/
    getOrganizationInsightMonitoredMediaServer(req: operations.GetOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * getOrganizationInsightMonitoredMediaServers - List the monitored media servers for this organization
     *
     * List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
    **/
    getOrganizationInsightMonitoredMediaServers(req: operations.GetOrganizationInsightMonitoredMediaServersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServersResponse>;
    /**
     * updateOrganizationInsightMonitoredMediaServer - Update a monitored media server for this organization
     *
     * Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
    **/
    updateOrganizationInsightMonitoredMediaServer(req: operations.UpdateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationInsightMonitoredMediaServerResponse>;
}
