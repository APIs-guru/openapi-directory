import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteWorkspaceIdMembersMemberIdActivitiesId - Delete a post activity
    **/
    deleteWorkspaceIdMembersMemberIdActivitiesId(req: operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse>;
    /**
     * getWorkspaceIdActivities - List activities for a workspace
    **/
    getWorkspaceIdActivities(req: operations.GetWorkspaceIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdActivitiesResponse>;
    /**
     * getWorkspaceIdActivitiesId - Get an activity in the workspace
    **/
    getWorkspaceIdActivitiesId(req: operations.GetWorkspaceIdActivitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdActivitiesIdResponse>;
    /**
     * getWorkspaceIdMembersMemberIdActivities - List activities for a member
    **/
    getWorkspaceIdMembersMemberIdActivities(req: operations.GetWorkspaceIdMembersMemberIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersMemberIdActivitiesResponse>;
    /**
     * postWorkspaceIdActivities - Create a Custom or a Content activity for a new or existing member
     *
     * Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.
    **/
    postWorkspaceIdActivities(req: operations.PostWorkspaceIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdActivitiesResponse>;
    /**
     * postWorkspaceIdMembersMemberIdActivities - Create a Custom or a Content activity for a member
    **/
    postWorkspaceIdMembersMemberIdActivities(req: operations.PostWorkspaceIdMembersMemberIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersMemberIdActivitiesResponse>;
    /**
     * putWorkspaceIdMembersMemberIdActivitiesId - Update a custom activity for a member
    **/
    putWorkspaceIdMembersMemberIdActivitiesId(req: operations.PutWorkspaceIdMembersMemberIdActivitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceIdMembersMemberIdActivitiesIdResponse>;
}
