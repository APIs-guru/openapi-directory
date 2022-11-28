import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Substances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSubstanceByUuid - Get a substance
     *
     * Returns substance representation
    **/
    getSubstanceByUuid(req: operations.GetSubstanceByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceByUuidResponse>;
    /**
     * getSubstanceComposition - Substance composition
     *
     * Returns substance composition
    **/
    getSubstanceComposition(req: operations.GetSubstanceCompositionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceCompositionResponse>;
    /**
     * getSubstanceStructures - Get substance composition as a dataset
     *
     * Returns substance composition
    **/
    getSubstanceStructures(req: operations.GetSubstanceStructuresRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceStructuresResponse>;
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
    /**
     * getSubstances - List substances
     *
     * Returns a list of substances, according to the search criteria
    **/
    getSubstances(req: operations.GetSubstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstancesResponse>;
}
