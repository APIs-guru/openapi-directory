import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Folders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFilesV3FoldersFolderIdArchive - Delete folder.
     *
     * Delete folder by ID.
    **/
    deleteFilesV3FoldersFolderIdArchive(req: operations.DeleteFilesV3FoldersFolderIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FoldersFolderIdArchiveResponse>;
    /**
     * deleteFilesV3FoldersFolderPathArchiveByPath - Delete folder.
     *
     * Delete folder by path.
    **/
    deleteFilesV3FoldersFolderPathArchiveByPath(req: operations.DeleteFilesV3FoldersFolderPathArchiveByPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FoldersFolderPathArchiveByPathResponse>;
    /**
     * getFilesV3FoldersSearchDoSearch - Search folders
     *
     * Search for folders. Does not contain hidden or archived folders.
    **/
    getFilesV3FoldersSearchDoSearch(req: operations.GetFilesV3FoldersSearchDoSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersSearchDoSearchResponse>;
    /**
     * getFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatus - Check folder update status.
     *
     * Check status of folder update. Folder updates happen asynchronously.
    **/
    getFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatus(req: operations.GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse>;
    /**
     * getFilesV3FoldersFolderIdGetById - Get folder
     *
     * Get folder by ID
    **/
    getFilesV3FoldersFolderIdGetById(req: operations.GetFilesV3FoldersFolderIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersFolderIdGetByIdResponse>;
    /**
     * getFilesV3FoldersFolderPathGetByPath - Get folder.
     *
     * Get folder by path.
    **/
    getFilesV3FoldersFolderPathGetByPath(req: operations.GetFilesV3FoldersFolderPathGetByPathRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersFolderPathGetByPathResponse>;
    /**
     * postFilesV3FoldersUpdateAsyncUpdateProperties - Update folder properties
     *
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder's children as well.
    **/
    postFilesV3FoldersUpdateAsyncUpdateProperties(req: operations.PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse>;
    /**
     * postFilesV3FoldersCreate - Create folder.
     *
     * Creates a folder.
    **/
    postFilesV3FoldersCreate(req: operations.PostFilesV3FoldersCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FoldersCreateResponse>;
}
