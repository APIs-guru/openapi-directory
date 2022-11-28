import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Member {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createMember - Create a member
    **/
    createMember(req: operations.CreateMemberRequest, config?: AxiosRequestConfig): Promise<operations.CreateMemberResponse>;
    /**
     * deleteMember - Delete a member
    **/
    deleteMember(req: operations.DeleteMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMemberResponse>;
    /**
     * getMember - Retrieve a member
    **/
    getMember(req: operations.GetMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberResponse>;
    /**
     * getMembers - List members
     *
     * This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).
    **/
    getMembers(req: operations.GetMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetMembersResponse>;
    /**
     * updateMember - Update a member
    **/
    updateMember(req: operations.UpdateMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMemberResponse>;
}
