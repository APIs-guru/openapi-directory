import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getWorkspaceIdMembersMemberIdNotes - Get the member's notes
    **/
    getWorkspaceIdMembersMemberIdNotes(req: operations.GetWorkspaceIdMembersMemberIdNotesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceIdMembersMemberIdNotesResponse>;
    /**
     * postWorkspaceIdMembersMemberIdNotes - Create a note
    **/
    postWorkspaceIdMembersMemberIdNotes(req: operations.PostWorkspaceIdMembersMemberIdNotesRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspaceIdMembersMemberIdNotesResponse>;
    /**
     * putWorkspaceIdMembersMemberIdNotesId - Update a note
    **/
    putWorkspaceIdMembersMemberIdNotesId(req: operations.PutWorkspaceIdMembersMemberIdNotesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspaceIdMembersMemberIdNotesIdResponse>;
}
