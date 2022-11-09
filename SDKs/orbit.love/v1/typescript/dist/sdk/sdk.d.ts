import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    DeleteWorkspaceIdMembersId(req: operations.DeleteWorkspaceIdMembersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceIdMembersIdResponse>;
    DeleteWorkspaceIdMembersMemberIdActivitiesId(req: operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse>;
    DeleteWorkspaceIdMembersMemberIdIdentities(req: operations.DeleteWorkspaceIdMembersMemberIdIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceIdMembersMemberIdIdentitiesResponse>;
    GetUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    GetWorkspaceIdActivities(req: operations.GetWorkspaceIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdActivitiesResponse>;
    GetWorkspaceIdActivitiesId(req: operations.GetWorkspaceIdActivitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdActivitiesIdResponse>;
    GetWorkspaceIdActivityTypes(req: operations.GetWorkspaceIdActivityTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdActivityTypesResponse>;
    GetWorkspaceIdMembers(req: operations.GetWorkspaceIdMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersResponse>;
    /**
     * Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.
    **/
    GetWorkspaceIdMembersFind(req: operations.GetWorkspaceIdMembersFindRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersFindResponse>;
    GetWorkspaceIdMembersId(req: operations.GetWorkspaceIdMembersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersIdResponse>;
    GetWorkspaceIdMembersMemberIdActivities(req: operations.GetWorkspaceIdMembersMemberIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersMemberIdActivitiesResponse>;
    GetWorkspaceIdMembersMemberIdNotes(req: operations.GetWorkspaceIdMembersMemberIdNotesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersMemberIdNotesResponse>;
    GetWorkspaceIdReports(req: operations.GetWorkspaceIdReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdReportsResponse>;
    GetWorkspaces(req: operations.GetWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesResponse>;
    GetWorkspacesWorkspaceId(req: operations.GetWorkspacesWorkspaceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceIdResponse>;
    /**
     * Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.
    **/
    PostWorkspaceIdActivities(req: operations.PostWorkspaceIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdActivitiesResponse>;
    /**
     * This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.
    **/
    PostWorkspaceIdMembers(req: operations.PostWorkspaceIdMembersRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersResponse>;
    PostWorkspaceIdMembersMemberIdActivities(req: operations.PostWorkspaceIdMembersMemberIdActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersMemberIdActivitiesResponse>;
    PostWorkspaceIdMembersMemberIdIdentities(req: operations.PostWorkspaceIdMembersMemberIdIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersMemberIdIdentitiesResponse>;
    PostWorkspaceIdMembersMemberIdNotes(req: operations.PostWorkspaceIdMembersMemberIdNotesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersMemberIdNotesResponse>;
    PutWorkspaceIdMembersId(req: operations.PutWorkspaceIdMembersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceIdMembersIdResponse>;
    PutWorkspaceIdMembersMemberIdActivitiesId(req: operations.PutWorkspaceIdMembersMemberIdActivitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceIdMembersMemberIdActivitiesIdResponse>;
    PutWorkspaceIdMembersMemberIdNotesId(req: operations.PutWorkspaceIdMembersMemberIdNotesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceIdMembersMemberIdNotesIdResponse>;
}
export {};
