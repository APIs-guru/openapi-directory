import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IssueTrackers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteIssueTrackersIssueTrackerName - Delete an issue tracker.
     *
     * Delete an issue tracker.
    **/
    deleteIssueTrackersIssueTrackerName(req: operations.DeleteIssueTrackersIssueTrackerNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIssueTrackersIssueTrackerNameResponse>;
    /**
     * getIssueTrackers - Get the list of issue trackers.
     *
     * Get the list of issue trackers.
    **/
    getIssueTrackers(req: operations.GetIssueTrackersRequest, config?: AxiosRequestConfig): Promise<operations.GetIssueTrackersResponse>;
    /**
     * getIssueTrackersIssueTrackerName - Show an issue tracker.
     *
     * Show an issue tracker.
    **/
    getIssueTrackersIssueTrackerName(req: operations.GetIssueTrackersIssueTrackerNameRequest, config?: AxiosRequestConfig): Promise<operations.GetIssueTrackersIssueTrackerNameResponse>;
    /**
     * getIssueTrackersIssueTrackerNameIssuesIssueName - Show an issue of an issue tracker.
     *
     * Show an issue of an issue tracker.
    **/
    getIssueTrackersIssueTrackerNameIssuesIssueName(req: operations.GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest, config?: AxiosRequestConfig): Promise<operations.GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse>;
    /**
     * postIssueTrackers - Create an issue tracker.
     *
     * Create an issue tracker.
    **/
    postIssueTrackers(req: operations.PostIssueTrackersRequest, config?: AxiosRequestConfig): Promise<operations.PostIssueTrackersResponse>;
    /**
     * putIssueTrackersIssueTrackerName - Update or create an issue tracker.
     *
     * Update the issue tracker given as path parameter. If it is not found, create it.
    **/
    putIssueTrackersIssueTrackerName(req: operations.PutIssueTrackersIssueTrackerNameRequest, config?: AxiosRequestConfig): Promise<operations.PutIssueTrackersIssueTrackerNameResponse>;
}
