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
     * clouderrorreportingProjectsDeleteEvents - Deletes all error events of a given project.
    **/
    clouderrorreportingProjectsDeleteEvents(req: operations.ClouderrorreportingProjectsDeleteEventsRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsDeleteEventsResponse>;
    /**
     * clouderrorreportingProjectsEventsList - Lists the specified events.
    **/
    clouderrorreportingProjectsEventsList(req: operations.ClouderrorreportingProjectsEventsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsEventsListResponse>;
    /**
     * clouderrorreportingProjectsEventsReport - Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a global service built on Cloud Logging and doesn't analyze logs stored in regional log buckets or logs routed to other Google Cloud projects. For more information, see [Using Error Reporting with regionalized logs] (https://cloud.google.com/error-reporting/docs/regionalization).
    **/
    clouderrorreportingProjectsEventsReport(req: operations.ClouderrorreportingProjectsEventsReportRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsEventsReportResponse>;
    /**
     * clouderrorreportingProjectsGroupStatsList - Lists the specified groups.
    **/
    clouderrorreportingProjectsGroupStatsList(req: operations.ClouderrorreportingProjectsGroupStatsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsGroupStatsListResponse>;
    /**
     * clouderrorreportingProjectsGroupsGet - Get the specified group.
    **/
    clouderrorreportingProjectsGroupsGet(req: operations.ClouderrorreportingProjectsGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsGroupsGetResponse>;
    /**
     * clouderrorreportingProjectsGroupsUpdate - Replace the data for the specified group. Fails if the group does not exist.
    **/
    clouderrorreportingProjectsGroupsUpdate(req: operations.ClouderrorreportingProjectsGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsGroupsUpdateResponse>;
}
