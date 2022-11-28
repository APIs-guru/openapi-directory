import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Replies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveRepliesCreate - Creates a new reply to a comment.
    **/
    driveRepliesCreate(req: operations.DriveRepliesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesCreateResponse>;
    /**
     * driveRepliesDelete - Deletes a reply.
    **/
    driveRepliesDelete(req: operations.DriveRepliesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesDeleteResponse>;
    /**
     * driveRepliesGet - Gets a reply by ID.
    **/
    driveRepliesGet(req: operations.DriveRepliesGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesGetResponse>;
    /**
     * driveRepliesList - Lists a comment's replies.
    **/
    driveRepliesList(req: operations.DriveRepliesListRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesListResponse>;
    /**
     * driveRepliesUpdate - Updates a reply with patch semantics.
    **/
    driveRepliesUpdate(req: operations.DriveRepliesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesUpdateResponse>;
}
