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
     * containeranalysisProjectsNotesCreate - Creates a new `Note`.
    **/
    containeranalysisProjectsNotesCreate(req: operations.ContaineranalysisProjectsNotesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsNotesCreateResponse>;
    /**
     * containeranalysisProjectsNotesList - Lists all `Notes` for a given project.
    **/
    containeranalysisProjectsNotesList(req: operations.ContaineranalysisProjectsNotesListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsNotesListResponse>;
    /**
     * containeranalysisProjectsOccurrencesCreate - Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
    **/
    containeranalysisProjectsOccurrencesCreate(req: operations.ContaineranalysisProjectsOccurrencesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesCreateResponse>;
    /**
     * containeranalysisProjectsOccurrencesGetVulnerabilitySummary - Gets a summary of the number and severity of occurrences.
    **/
    containeranalysisProjectsOccurrencesGetVulnerabilitySummary(req: operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryResponse>;
    /**
     * containeranalysisProjectsOccurrencesList - Lists active `Occurrences` for a given project matching the filters.
    **/
    containeranalysisProjectsOccurrencesList(req: operations.ContaineranalysisProjectsOccurrencesListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesListResponse>;
    /**
     * containeranalysisProjectsOperationsCreate - Creates a new `Operation`.
    **/
    containeranalysisProjectsOperationsCreate(req: operations.ContaineranalysisProjectsOperationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOperationsCreateResponse>;
    /**
     * containeranalysisProjectsScanConfigsList - Lists scan configurations for a project.
    **/
    containeranalysisProjectsScanConfigsList(req: operations.ContaineranalysisProjectsScanConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsScanConfigsListResponse>;
}
