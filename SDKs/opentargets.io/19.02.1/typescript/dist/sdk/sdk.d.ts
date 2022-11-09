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
     * Access api docs as served by Redoc
    **/
    GetApiDocs(config?: AxiosRequestConfig): Promise<operations.GetApiDocsResponse>;
    /**
     * Interactive API docs using swagger-ui
    **/
    GetApiSwaggerUi(config?: AxiosRequestConfig): Promise<operations.GetApiSwaggerUiResponse>;
    /**
     * Once we integrate all evidence connecting a target to a specific disease, we
     *  compute an association score by the means of an harmonic sum. This *association score* provides
     *  an indication of how strong the evidence behind each connection is and can be
     *  used to rank genes in order of likelihood as drug targets.
     *  The association ID is constructed by using the Ensembl ID of the gene and the
     *  EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
     *  The method returns an association object, which contains the data and summary
     *  on each evidence type included in the calculation of the score, as well as the score itself.
     *
    **/
    GetAssociationById(req: operations.GetAssociationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationByIdResponse>;
    /**
     * More complex queries for associations scores and objects can be done using
     * this method, which allows to sort in different order, restrict to a specific class
     * of diseases or targets, as well as filtering results by score and associated pathways.
     *
    **/
    GetAssociationFilter(req: operations.GetAssociationFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationFilterResponse>;
    /**
     * Search for the closest term to autocomplete in the search box.
     *
    **/
    GetAutocomplete(req: operations.GetAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetAutocompleteResponse>;
    /**
     * Returns the metrics about associations and evidences, divided by datasource, genes and so on.
     *
    **/
    GetDataMetrics(config?: AxiosRequestConfig): Promise<operations.GetDataMetricsResponse>;
    /**
     * Returns the number of associations and evidences, divided by datasource.
     *
    **/
    GetDataStats(config?: AxiosRequestConfig): Promise<operations.GetDataStatsResponse>;
    /**
     * Get `disease` objects.
     *
    **/
    GetDiseaseById(req: operations.GetDiseaseByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseByIdResponse>;
    /**
     * Get `drug` objects.
     *
    **/
    GetDrugById(req: operations.GetDrugByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDrugByIdResponse>;
    /**
     * Get `ECO` objects.
     *
    **/
    GetEcObyId(req: operations.GetEcObyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEcObyIdResponse>;
    /**
     * We call **evidence** a unit of data that support a connection between a target and a disease.
     * The Open Targets Platform integrates multiple types of evidence including genetic associations,
     * somatic mutations, RNA expression and target-disease associations mined from the literature.
     * This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
     * targetvalidation.org ID.
     *
     * Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
     * You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).
     *
     * **Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.
     *
    **/
    GetEvidenceById(req: operations.GetEvidenceByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceByIdResponse>;
    /**
     * The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
     * Filters can be used to restrict the results by source and type of data,
     * or limit results to targets which are part of a particular pathway.
     * Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
     * **Note** that multiple genes and diseases can be specified in the same request.
     *
    **/
    GetEvidenceFilter(req: operations.GetEvidenceFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFilterResponse>;
    /**
     * Check if the API is up
     *
    **/
    GetPing(config?: AxiosRequestConfig): Promise<operations.GetPingResponse>;
    /**
     * Get `search-result` objects. Enables search bar functionality.
     *
    **/
    GetQuickSearch(req: operations.GetQuickSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuickSearchResponse>;
    /**
     * Get `relation` objects starting from diseases.
     *
    **/
    GetRelationByEfoid(req: operations.GetRelationByEfoidRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationByEfoidResponse>;
    /**
     * Get `relation` objects starting from diseases.
     *
    **/
    GetRelationByEnsgid(req: operations.GetRelationByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationByEnsgidResponse>;
    /**
     * This method allows you to look for gene or diseases of interest using a free text search,
     * replicating the functionality of the search box on our homepage. It should be used to identify
     * the best match for a disease or target of interest, rather than gathering a specific set of evidence.
     *
    **/
    GetSearch(req: operations.GetSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchResponse>;
    /**
     * Get swagger.yaml specs for the API
    **/
    GetSwagger(config?: AxiosRequestConfig): Promise<operations.GetSwaggerResponse>;
    /**
     * Get `target` objects.
     *
    **/
    GetTargetByEnsgid(req: operations.GetTargetByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetByEnsgidResponse>;
    /**
     * Get `gene-expression` objects.
     *
    **/
    GetTargetExpressionByEnsgid(req: operations.GetTargetExpressionByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetExpressionByEnsgidResponse>;
    /**
     * Returns the list of therapeutic areas for the current data release
     *
    **/
    GetTherapeuticAreas(config?: AxiosRequestConfig): Promise<operations.GetTherapeuticAreasResponse>;
    /**
     * Returns current API version.
     *
    **/
    GetVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * Complex queries and filters for association objects can also be submitted using a JSON
     * object and the equivalent POST method.
     *
    **/
    PostAssociationFilter(req: operations.PostAssociationFilterRequest, config?: AxiosRequestConfig): Promise<operations.PostAssociationFilterResponse>;
    /**
     * Fire the search method for multiple strings
     *
    **/
    PostBestHitSearch(req: operations.PostBestHitSearchRequest, config?: AxiosRequestConfig): Promise<operations.PostBestHitSearchResponse>;
    /**
     * Get `disease` objects.
     *
    **/
    PostDiseaseById(req: operations.PostDiseaseByIdRequest, config?: AxiosRequestConfig): Promise<operations.PostDiseaseByIdResponse>;
    /**
     * Returns an enrichment analysis for a list of targets passed in the body
     *
    **/
    PostEnrichmentTarget(req: operations.PostEnrichmentTargetRequest, config?: AxiosRequestConfig): Promise<operations.PostEnrichmentTargetResponse>;
    /**
     * This is the POST version of [/public/evidence](#!/public/get_public_evidence).
     * It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.
     *
    **/
    PostEvidenceById(req: operations.PostEvidenceByIdRequest, config?: AxiosRequestConfig): Promise<operations.PostEvidenceByIdResponse>;
    /**
     * POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
     * Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
     *
    **/
    PostEvidenceFilter(req: operations.PostEvidenceFilterRequest, config?: AxiosRequestConfig): Promise<operations.PostEvidenceFilterResponse>;
    /**
     * Get `relation` objects.
     *
    **/
    PostRelation(req: operations.PostRelationRequest, config?: AxiosRequestConfig): Promise<operations.PostRelationResponse>;
    /**
     * Get `target` objects. Used for the target profile page.
     *
    **/
    PostTargetByEnsgid(req: operations.PostTargetByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetByEnsgidResponse>;
    /**
     * Get `gene-expression` objects.
     *
    **/
    PostTargetExpressionByEnsgid(req: operations.PostTargetExpressionByEnsgidRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetExpressionByEnsgidResponse>;
}
export {};
