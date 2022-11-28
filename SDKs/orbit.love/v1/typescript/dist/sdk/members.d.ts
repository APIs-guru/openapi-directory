import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteWorkspaceIdMembersId - Delete a member
    **/
    deleteWorkspaceIdMembersId(req: operations.DeleteWorkspaceIdMembersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceIdMembersIdResponse>;
    /**
     * deleteWorkspaceIdMembersMemberIdIdentities - Remove identity from a member
    **/
    deleteWorkspaceIdMembersMemberIdIdentities(req: operations.DeleteWorkspaceIdMembersMemberIdIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceIdMembersMemberIdIdentitiesResponse>;
    /**
     * getWorkspaceIdMembers - List members in a workspace
    **/
    getWorkspaceIdMembers(req: operations.GetWorkspaceIdMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersResponse>;
    /**
     * getWorkspaceIdMembersFind - Find a member by an identity
     *
     * Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.
    **/
    getWorkspaceIdMembersFind(req: operations.GetWorkspaceIdMembersFindRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersFindResponse>;
    /**
     * getWorkspaceIdMembersId - Get a member
    **/
    getWorkspaceIdMembersId(req: operations.GetWorkspaceIdMembersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersIdResponse>;
    /**
     * postWorkspaceIdMembers - Create or update a member
     *
     * This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.
    **/
    postWorkspaceIdMembers(req: operations.PostWorkspaceIdMembersRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersResponse>;
    /**
     * postWorkspaceIdMembersMemberIdIdentities - Add identity to a member
    **/
    postWorkspaceIdMembersMemberIdIdentities(req: operations.PostWorkspaceIdMembersMemberIdIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersMemberIdIdentitiesResponse>;
    /**
     * putWorkspaceIdMembersId - Update a member
    **/
    putWorkspaceIdMembersId(req: operations.PutWorkspaceIdMembersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceIdMembersIdResponse>;
}
