import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * documentaiProjectsLocationsDocumentsBatchProcess - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
    **/
    documentaiProjectsLocationsDocumentsBatchProcess(req: operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsDocumentsBatchProcessResponse>;
    /**
     * documentaiProjectsLocationsDocumentsProcess - Processes a single document.
    **/
    documentaiProjectsLocationsDocumentsProcess(req: operations.DocumentaiProjectsLocationsDocumentsProcessRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsDocumentsProcessResponse>;
    /**
     * documentaiProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    documentaiProjectsOperationsGet(req: operations.DocumentaiProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsOperationsGetResponse>;
}
