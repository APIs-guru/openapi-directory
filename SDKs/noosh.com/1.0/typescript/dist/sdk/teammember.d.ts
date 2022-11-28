import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TeamMember {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers - Deprecated, please use 1.1 Version
     *
     * Deprecated, please use 1.1 Version
    **/
    postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers(req: operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRequest, config?: AxiosRequestConfig): Promise<operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersResponse>;
    /**
     * deleteTeamMemberOfProject - Delete a team member for the specific project.
     *
     * Delete a team member for the specific project.
    **/
    deleteTeamMemberOfProject(req: operations.DeleteTeamMemberOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamMemberOfProjectResponse>;
    /**
     * getTeamMemberListOfClientProject - List team member of client project side.
     *
     * List team member of client project side.
    **/
    getTeamMemberListOfClientProject(req: operations.GetTeamMemberListOfClientProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMemberListOfClientProjectResponse>;
    /**
     * getTeamMemberListOfProject - List team member of project.
     *
     * List team member of project.
    **/
    getTeamMemberListOfProject(req: operations.GetTeamMemberListOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMemberListOfProjectResponse>;
    /**
     * postTeamMemberOfProject - Invite a team member or all the members of team template for the specific project.
     *
     * Invite a team member or all the members of team template for the specific project.
    **/
    postTeamMemberOfProject(req: operations.PostTeamMemberOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamMemberOfProjectResponse>;
}
