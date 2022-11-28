import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Revisions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveRevisionsDelete - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
    **/
    driveRevisionsDelete(req: operations.DriveRevisionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsDeleteResponse>;
    /**
     * driveRevisionsGet - Gets a revision's metadata or content by ID.
    **/
    driveRevisionsGet(req: operations.DriveRevisionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsGetResponse>;
    /**
     * driveRevisionsList - Lists a file's revisions.
    **/
    driveRevisionsList(req: operations.DriveRevisionsListRequest, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsListResponse>;
    /**
     * driveRevisionsUpdate - Updates a revision with patch semantics.
    **/
    driveRevisionsUpdate(req: operations.DriveRevisionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsUpdateResponse>;
}
