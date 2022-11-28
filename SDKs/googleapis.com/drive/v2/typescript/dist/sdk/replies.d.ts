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
     * driveRepliesDelete - Deletes a reply.
    **/
    driveRepliesDelete(req: operations.DriveRepliesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesDeleteResponse>;
    /**
     * driveRepliesGet - Gets a reply.
    **/
    driveRepliesGet(req: operations.DriveRepliesGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesGetResponse>;
    /**
     * driveRepliesInsert - Creates a new reply to the given comment.
    **/
    driveRepliesInsert(req: operations.DriveRepliesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesInsertResponse>;
    /**
     * driveRepliesList - Lists all of the replies to a comment.
    **/
    driveRepliesList(req: operations.DriveRepliesListRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesListResponse>;
    /**
     * driveRepliesPatch - Updates an existing reply.
    **/
    driveRepliesPatch(req: operations.DriveRepliesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesPatchResponse>;
    /**
     * driveRepliesUpdate - Updates an existing reply.
    **/
    driveRepliesUpdate(req: operations.DriveRepliesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveRepliesUpdateResponse>;
}
