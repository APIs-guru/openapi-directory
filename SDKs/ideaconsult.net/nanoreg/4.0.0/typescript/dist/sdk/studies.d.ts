import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Studies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEndpointSummary - Search endpoint summary
     *
     * Returns endpoint summary
    **/
    getEndpointSummary(req: operations.GetEndpointSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetEndpointSummaryResponse>;
    /**
     * getInvestigationResults - Details of multiple studies
     *
     * Multiple studies in tabular form
    **/
    getInvestigationResults(req: operations.GetInvestigationResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetInvestigationResultsResponse>;
    /**
     * getSubstanceStudy - get substance study
     *
     * Returns substance study representation
    **/
    getSubstanceStudy(req: operations.GetSubstanceStudyRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceStudyResponse>;
    /**
     * getSubstanceStudySummary - Get study summary for the substance
     *
     * Study summary
    **/
    getSubstanceStudySummary(req: operations.GetSubstanceStudySummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceStudySummaryResponse>;
}
