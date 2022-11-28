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
     * driveCommentsCreate - Creates a new comment on a file.
    **/
    driveCommentsCreate(req: operations.DriveCommentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsCreateResponse>;
    /**
     * driveCommentsDelete - Deletes a comment.
    **/
    driveCommentsDelete(req: operations.DriveCommentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsDeleteResponse>;
    /**
     * driveCommentsGet - Gets a comment by ID.
    **/
    driveCommentsGet(req: operations.DriveCommentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsGetResponse>;
    /**
     * driveCommentsList - Lists a file's comments.
    **/
    driveCommentsList(req: operations.DriveCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsListResponse>;
    /**
     * driveCommentsUpdate - Updates a comment with patch semantics.
    **/
    driveCommentsUpdate(req: operations.DriveCommentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveCommentsUpdateResponse>;
}
