import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Overview {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraAnalyticsOverview - Returns an overview of aggregate analytics data for a timespan
     *
     * Returns an overview of aggregate analytics data for a timespan
    **/
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * getNetworkClientsOverview - Return overview statistics for network clients
     *
     * Return overview statistics for network clients
    **/
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * getOrganizationApiRequestsOverview - Return an aggregated overview of API requests data
     *
     * Return an aggregated overview of API requests data
    **/
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
    /**
     * getOrganizationLicensesOverview - Return an overview of the license state for an organization
     *
     * Return an overview of the license state for an organization
    **/
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
}
