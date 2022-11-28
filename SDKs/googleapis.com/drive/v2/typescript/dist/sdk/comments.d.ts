import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveCommentsDelete - Deletes a comment.
    **/
    driveCommentsDelete(req: operations.DriveCommentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsDeleteResponse>;
    /**
     * driveCommentsGet - Gets a comment by ID.
    **/
    driveCommentsGet(req: operations.DriveCommentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsGetResponse>;
    /**
     * driveCommentsInsert - Creates a new comment on the given file.
    **/
    driveCommentsInsert(req: operations.DriveCommentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsInsertResponse>;
    /**
     * driveCommentsList - Lists a file's comments.
    **/
    driveCommentsList(req: operations.DriveCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsListResponse>;
    /**
     * driveCommentsPatch - Updates an existing comment.
    **/
    driveCommentsPatch(req: operations.DriveCommentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsPatchResponse>;
    /**
     * driveCommentsUpdate - Updates an existing comment.
    **/
    driveCommentsUpdate(req: operations.DriveCommentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsUpdateResponse>;
}
