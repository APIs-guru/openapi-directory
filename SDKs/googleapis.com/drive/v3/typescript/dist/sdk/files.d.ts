import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveFilesCopy - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
    **/
    driveFilesCopy(req: operations.DriveFilesCopyRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesCopyResponse>;
    /**
     * driveFilesCreate - Creates a new file.
    **/
    driveFilesCreate(req: operations.DriveFilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesCreateResponse>;
    /**
     * driveFilesDelete - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
    **/
    driveFilesDelete(req: operations.DriveFilesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesDeleteResponse>;
    /**
     * driveFilesEmptyTrash - Permanently deletes all of the user's trashed files.
    **/
    driveFilesEmptyTrash(req: operations.DriveFilesEmptyTrashRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesEmptyTrashResponse>;
    /**
     * driveFilesExport - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
    **/
    driveFilesExport(req: operations.DriveFilesExportRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesExportResponse>;
    /**
     * driveFilesGenerateIds - Generates a set of file IDs which can be provided in create or copy requests.
    **/
    driveFilesGenerateIds(req: operations.DriveFilesGenerateIdsRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesGenerateIdsResponse>;
    /**
     * driveFilesGet - Gets a file's metadata or content by ID.
    **/
    driveFilesGet(req: operations.DriveFilesGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesGetResponse>;
    /**
     * driveFilesList - Lists or searches files.
    **/
    driveFilesList(req: operations.DriveFilesListRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesListResponse>;
    /**
     * driveFilesListLabels - Lists the labels on a file.
    **/
    driveFilesListLabels(req: operations.DriveFilesListLabelsRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesListLabelsResponse>;
    /**
     * driveFilesModifyLabels - Modifies the set of labels on a file.
    **/
    driveFilesModifyLabels(req: operations.DriveFilesModifyLabelsRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesModifyLabelsResponse>;
    /**
     * driveFilesUpdate - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
    **/
    driveFilesUpdate(req: operations.DriveFilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesUpdateResponse>;
    /**
     * driveFilesWatch - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.
    **/
    driveFilesWatch(req: operations.DriveFilesWatchRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesWatchResponse>;
}
