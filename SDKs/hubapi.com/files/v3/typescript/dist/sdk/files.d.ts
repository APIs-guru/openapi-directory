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
     * deleteFilesV3FilesFileIdGdprDeleteArchiveGdpr - GDPR delete
     *
     * GDRP delete file
    **/
    deleteFilesV3FilesFileIdGdprDeleteArchiveGdpr(req: operations.DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse>;
    /**
     * deleteFilesV3FilesFileIdArchive - Delete file
     *
     * Delete file by ID
    **/
    deleteFilesV3FilesFileIdArchive(req: operations.DeleteFilesV3FilesFileIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesV3FilesFileIdArchiveResponse>;
    /**
     * getFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImport - Check import status.
     *
     * Check the status of requested import.
    **/
    getFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImport(req: operations.GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse>;
    /**
     * getFilesV3FilesSearchDoSearch - Search files
     *
     * Search through files in the file manager. Does not display hidden or archived files.
    **/
    getFilesV3FilesSearchDoSearch(req: operations.GetFilesV3FilesSearchDoSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesSearchDoSearchResponse>;
    /**
     * getFilesV3FilesFileIdSignedUrlGetSignedUrl - Get signed URL to access private file.
     *
     * Generates signed URL that allows temporary access to a private file.
    **/
    getFilesV3FilesFileIdSignedUrlGetSignedUrl(req: operations.GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse>;
    /**
     * getFilesV3FilesFileIdGetById - Get file.
     *
     * Get file by ID.
    **/
    getFilesV3FilesFileIdGetById(req: operations.GetFilesV3FilesFileIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesV3FilesFileIdGetByIdResponse>;
    /**
     * patchFilesV3FilesFileIdUpdateProperties - update file properties
     *
     * Update properties of file by ID.
    **/
    patchFilesV3FilesFileIdUpdateProperties(req: operations.PatchFilesV3FilesFileIdUpdatePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.PatchFilesV3FilesFileIdUpdatePropertiesResponse>;
    /**
     * postFilesV3FilesImportFromUrlAsyncImportFromUrl - Import a file from a URL into the file manager.
     *
     * Asynchronously imports the file at the given URL into the file manager.
    **/
    postFilesV3FilesImportFromUrlAsyncImportFromUrl(req: operations.PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse>;
    /**
     * postFilesV3FilesUpload - Upload file
     *
     * Upload a single file with content specified in request body.
    **/
    postFilesV3FilesUpload(req: operations.PostFilesV3FilesUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesV3FilesUploadResponse>;
    /**
     * putFilesV3FilesFileIdReplace - Replace file.
     *
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
    **/
    putFilesV3FilesFileIdReplace(req: operations.PutFilesV3FilesFileIdReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PutFilesV3FilesFileIdReplaceResponse>;
}
