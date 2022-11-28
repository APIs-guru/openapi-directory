import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Private {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiDocs - Browse API documentation
     *
     * Access api docs as served by Redoc
    **/
    getApiDocs(config?: AxiosRequestConfig): Promise<operations.GetApiDocsResponse>;
    /**
     * getApiSwaggerUi - Browse interactive API documentation
     *
     * Interactive API docs using swagger-ui
    **/
    getApiSwaggerUi(config?: AxiosRequestConfig): Promise<operations.GetApiSwaggerUiResponse>;
    /**
     * getAutocomplete - Get `autocomplete` objects.
     *
     * Search for the closest term to autocomplete in the search box.
     *
    **/
    getAutocomplete(req: operations.GetAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetAutocompleteResponse>;
    /**
     * getDiseaseById - Find information about a disease
     *
     * Get `disease` objects.
     *
    **/
    getDiseaseById(req: operations.GetDiseaseByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseByIdResponse>;
    /**
     * getDrugById - Get drug by ID
     *
     * Get `drug` objects.
     *
    **/
    getDrugById(req: operations.GetDrugByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDrugByIdResponse>;
    /**
     * getEcObyId - Get evidence code by ID
     *
     * Get `ECO` objects.
     *
    **/
    getEcObyId(req: operations.GetEcObyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEcObyIdResponse>;
    /**
     * getQuickSearch - Search most relevant results
     *
     * Get `search-result` objects. Enables search bar functionality.
     *
    **/
    getQuickSearch(req: operations.GetQuickSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuickSearchResponse>;
    /**
     * getRelationByEfoid - Find related entities by disease
     *
     * Get `relation` objects starting from diseases.
     *
    **/
    getRelationByEfoid(req: operations.GetRelationByEfoidRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationByEfoidResponse>;
    /**
     * getRelationByEnsgid - Find related entities by target
     *
     * Get `relation` objects starting from diseases.
     *
    **/
    getRelationByEnsgid(req: operations.GetRelationByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationByEnsgidResponse>;
    /**
     * getSwagger - Get OpenAPI schema
     *
     * Get swagger.yaml specs for the API
    **/
    getSwagger(config?: AxiosRequestConfig): Promise<operations.GetSwaggerResponse>;
    /**
     * getTargetByEnsgid - Find information about a target
     *
     * Get `target` objects.
     *
    **/
    getTargetByEnsgid(req: operations.GetTargetByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetByEnsgidResponse>;
    /**
     * getTargetExpressionByEnsgid - Query expression levels
     *
     * Get `gene-expression` objects.
     *
    **/
    getTargetExpressionByEnsgid(req: operations.GetTargetExpressionByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetExpressionByEnsgidResponse>;
    /**
     * postBestHitSearch - Find the best hit
     *
     * Fire the search method for multiple strings
     *
    **/
    postBestHitSearch(req: operations.PostBestHitSearchRequest, config?: AxiosRequestConfig): Promise<operations.PostBestHitSearchResponse>;
    /**
     * postDiseaseById - Find information about a list of diseases
     *
     * Get `disease` objects.
     *
    **/
    postDiseaseById(req: operations.PostDiseaseByIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDiseaseByIdResponse>;
    /**
     * postEnrichmentTarget - Enrichment analysis
     *
     * Returns an enrichment analysis for a list of targets passed in the body
     *
    **/
    postEnrichmentTarget(req: operations.PostEnrichmentTargetRequest, config?: AxiosRequestConfig): Promise<operations.PostEnrichmentTargetResponse>;
    /**
     * postRelation - Find related entities
     *
     * Get `relation` objects.
     *
    **/
    postRelation(req: operations.PostRelationRequest, config?: AxiosRequestConfig): Promise<operations.PostRelationResponse>;
    /**
     * postTargetByEnsgid - Find information about a list of targets
     *
     * Get `target` objects. Used for the target profile page.
     *
    **/
    postTargetByEnsgid(req: operations.PostTargetByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetByEnsgidResponse>;
    /**
     * postTargetExpressionByEnsgid - Batch query expression levels
     *
     * Get `gene-expression` objects.
     *
    **/
    postTargetExpressionByEnsgid(req: operations.PostTargetExpressionByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetExpressionByEnsgidResponse>;
}
