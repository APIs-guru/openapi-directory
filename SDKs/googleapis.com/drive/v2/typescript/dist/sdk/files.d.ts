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
     * driveFilesCopy - Creates a copy of the specified file. Folders cannot be copied.
    **/
    driveFilesCopy(req: operations.DriveFilesCopyRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesCopyResponse>;
    /**
     * driveFilesDelete - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
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
     * driveFilesGenerateIds - Generates a set of file IDs which can be provided in insert or copy requests.
    **/
    driveFilesGenerateIds(req: operations.DriveFilesGenerateIdsRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesGenerateIdsResponse>;
    /**
     * driveFilesGet - Gets a file's metadata or content by ID.
    **/
    driveFilesGet(req: operations.DriveFilesGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesGetResponse>;
    /**
     * driveFilesInsert - Insert a new file.
    **/
    driveFilesInsert(req: operations.DriveFilesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesInsertResponse>;
    /**
     * driveFilesList - Lists the user's files.
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
     * driveFilesPatch - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
    **/
    driveFilesPatch(req: operations.DriveFilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesPatchResponse>;
    /**
     * driveFilesTouch - Set the file's updated time to the current server time.
    **/
    driveFilesTouch(req: operations.DriveFilesTouchRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesTouchResponse>;
    /**
     * driveFilesTrash - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
    **/
    driveFilesTrash(req: operations.DriveFilesTrashRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesTrashResponse>;
    /**
     * driveFilesUntrash - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
    **/
    driveFilesUntrash(req: operations.DriveFilesUntrashRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesUntrashResponse>;
    /**
     * driveFilesUpdate - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
    **/
    driveFilesUpdate(req: operations.DriveFilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesUpdateResponse>;
    /**
     * driveFilesWatch - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.
    **/
    driveFilesWatch(req: operations.DriveFilesWatchRequest, config?: AxiosRequestConfig): Promise<operations.DriveFilesWatchResponse>;
}
