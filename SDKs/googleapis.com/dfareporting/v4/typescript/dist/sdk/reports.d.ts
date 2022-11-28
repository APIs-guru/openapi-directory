import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingReportsCompatibleFieldsQuery - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
    **/
    dfareportingReportsCompatibleFieldsQuery(req: operations.DfareportingReportsCompatibleFieldsQueryRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsCompatibleFieldsQueryResponse>;
    /**
     * dfareportingReportsDelete - Deletes a report by its ID.
    **/
    dfareportingReportsDelete(req: operations.DfareportingReportsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsDeleteResponse>;
    /**
     * dfareportingReportsFilesGet - Retrieves a report file by its report ID and file ID. This method supports media download.
    **/
    dfareportingReportsFilesGet(req: operations.DfareportingReportsFilesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsFilesGetResponse>;
    /**
     * dfareportingReportsFilesList - Lists files for a report.
    **/
    dfareportingReportsFilesList(req: operations.DfareportingReportsFilesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsFilesListResponse>;
    /**
     * dfareportingReportsGet - Retrieves a report by its ID.
    **/
    dfareportingReportsGet(req: operations.DfareportingReportsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsGetResponse>;
    /**
     * dfareportingReportsInsert - Creates a report.
    **/
    dfareportingReportsInsert(req: operations.DfareportingReportsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsInsertResponse>;
    /**
     * dfareportingReportsList - Retrieves list of reports.
    **/
    dfareportingReportsList(req: operations.DfareportingReportsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsListResponse>;
    /**
     * dfareportingReportsPatch - Updates an existing report. This method supports patch semantics.
    **/
    dfareportingReportsPatch(req: operations.DfareportingReportsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsPatchResponse>;
    /**
     * dfareportingReportsRun - Runs a report.
    **/
    dfareportingReportsRun(req: operations.DfareportingReportsRunRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsRunResponse>;
    /**
     * dfareportingReportsUpdate - Updates a report.
    **/
    dfareportingReportsUpdate(req: operations.DfareportingReportsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingReportsUpdateResponse>;
}
