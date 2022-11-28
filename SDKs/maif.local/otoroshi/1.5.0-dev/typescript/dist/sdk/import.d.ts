import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Import {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fullExport - Export the full state of Otoroshi
     *
     * Export the full state of Otoroshi
    **/
    fullExport(req: operations.FullExportRequest, config?: AxiosRequestConfig): Promise<operations.FullExportResponse>;
    /**
     * fullImport - Import the full state of Otoroshi
     *
     * Import the full state of Otoroshi
    **/
    fullImport(req: operations.FullImportRequest, config?: AxiosRequestConfig): Promise<operations.FullImportResponse>;
    /**
     * fullImportFromFile - Import the full state of Otoroshi as a file
     *
     * Import the full state of Otoroshi as a file
    **/
    fullImportFromFile(req: operations.FullImportFromFileRequest, config?: AxiosRequestConfig): Promise<operations.FullImportFromFileResponse>;
}
