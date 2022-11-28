import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Structures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * searchByIdentifier - Exact chemical structure search
     *
     * Returns compounds found
     *
     * http://ambit.sf.net - Learn more about operations provided by this API.
    **/
    searchByIdentifier(req: operations.SearchByIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.SearchByIdentifierResponse>;
    /**
     * searchBySimilarity - Exact similarity search
     *
     * Returns similar compounds
     *
     * http://ambit.sf.net - Learn more about operations provided by this API.
    **/
    searchBySimilarity(req: operations.SearchBySimilarityRequest, config?: AxiosRequestConfig): Promise<operations.SearchBySimilarityResponse>;
    /**
     * searchBySmarts - Substructure search
     *
     * Returns compounds with the specified substructure
     *
     * http://ambit.sf.net - Learn more about operations provided by this API.
    **/
    searchBySmarts(req: operations.SearchBySmartsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBySmartsResponse>;
}
