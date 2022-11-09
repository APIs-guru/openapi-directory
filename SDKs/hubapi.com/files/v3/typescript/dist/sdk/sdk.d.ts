import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * GDRP delete file
    **/
    DeleteFilesV3FilesFileIdGdprDeleteArchiveGdpr(req: operations.DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse>;
    /**
     * Delete file by ID
    **/
    DeleteFilesV3FilesFileIdArchive(req: operations.DeleteFilesV3FilesFileIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FilesFileIdArchiveResponse>;
    /**
     * Delete folder by ID.
    **/
    DeleteFilesV3FoldersFolderIdArchive(req: operations.DeleteFilesV3FoldersFolderIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FoldersFolderIdArchiveResponse>;
    /**
     * Delete folder by path.
    **/
    DeleteFilesV3FoldersFolderPathArchiveByPath(req: operations.DeleteFilesV3FoldersFolderPathArchiveByPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FoldersFolderPathArchiveByPathResponse>;
    /**
     * Check the status of requested import.
    **/
    GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImport(req: operations.GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse>;
    /**
     * Search through files in the file manager. Does not display hidden or archived files.
    **/
    GetFilesV3FilesSearchDoSearch(req: operations.GetFilesV3FilesSearchDoSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesSearchDoSearchResponse>;
    /**
     * Generates signed URL that allows temporary access to a private file.
    **/
    GetFilesV3FilesFileIdSignedUrlGetSignedUrl(req: operations.GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse>;
    /**
     * Get file by ID.
    **/
    GetFilesV3FilesFileIdGetById(req: operations.GetFilesV3FilesFileIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesFileIdGetByIdResponse>;
    /**
     * Search for folders. Does not contain hidden or archived folders.
    **/
    GetFilesV3FoldersSearchDoSearch(req: operations.GetFilesV3FoldersSearchDoSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersSearchDoSearchResponse>;
    /**
     * Check status of folder update. Folder updates happen asynchronously.
    **/
    GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatus(req: operations.GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse>;
    /**
     * Get folder by ID
    **/
    GetFilesV3FoldersFolderIdGetById(req: operations.GetFilesV3FoldersFolderIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersFolderIdGetByIdResponse>;
    /**
     * Get folder by path.
    **/
    GetFilesV3FoldersFolderPathGetByPath(req: operations.GetFilesV3FoldersFolderPathGetByPathRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FoldersFolderPathGetByPathResponse>;
    /**
     * Update properties of file by ID.
    **/
    PatchFilesV3FilesFileIdUpdateProperties(req: operations.PatchFilesV3FilesFileIdUpdatePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.PatchFilesV3FilesFileIdUpdatePropertiesResponse>;
    /**
     * Asynchronously imports the file at the given URL into the file manager.
    **/
    PostFilesV3FilesImportFromUrlAsyncImportFromUrl(req: operations.PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse>;
    /**
     * Upload a single file with content specified in request body.
    **/
    PostFilesV3FilesUpload(req: operations.PostFilesV3FilesUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FilesUploadResponse>;
    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder's children as well.
    **/
    PostFilesV3FoldersUpdateAsyncUpdateProperties(req: operations.PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse>;
    /**
     * Creates a folder.
    **/
    PostFilesV3FoldersCreate(req: operations.PostFilesV3FoldersCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FoldersCreateResponse>;
    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
    **/
    PutFilesV3FilesFileIdReplace(req: operations.PutFilesV3FilesFileIdReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PutFilesV3FilesFileIdReplaceResponse>;
}
export {};
