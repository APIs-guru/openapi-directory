import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Public {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAssociationById - Get association by id
     *
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
    getAssociationById(req: operations.GetAssociationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationByIdResponse>;
    /**
     * getAssociationFilter - Filter available associations
     *
     * More complex queries for associations scores and objects can be done using
     * this method, which allows to sort in different order, restrict to a specific class
     * of diseases or targets, as well as filtering results by score and associated pathways.
     *
    **/
    getAssociationFilter(req: operations.GetAssociationFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationFilterResponse>;
    /**
     * getDataMetrics - Get metrics about the current data release
     *
     * Returns the metrics about associations and evidences, divided by datasource, genes and so on.
     *
    **/
    getDataMetrics(config?: AxiosRequestConfig): Promise<operations.GetDataMetricsResponse>;
    /**
     * getDataStats - Get statistics about the current data release
     *
     * Returns the number of associations and evidences, divided by datasource.
     *
    **/
    getDataStats(config?: AxiosRequestConfig): Promise<operations.GetDataStatsResponse>;
    /**
     * getEvidenceById - Get evidence by ID
     *
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
    getEvidenceById(req: operations.GetEvidenceByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceByIdResponse>;
    /**
     * getEvidenceFilter - Filter available evidence
     *
     * The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
     * Filters can be used to restrict the results by source and type of data,
     * or limit results to targets which are part of a particular pathway.
     * Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
     * **Note** that multiple genes and diseases can be specified in the same request.
     *
    **/
    getEvidenceFilter(req: operations.GetEvidenceFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFilterResponse>;
    /**
     * getPing - Ping service
     *
     * Check if the API is up
     *
    **/
    getPing(config?: AxiosRequestConfig): Promise<operations.GetPingResponse>;
    /**
     * getSearch - Search for a disease or a target
     *
     * This method allows you to look for gene or diseases of interest using a free text search,
     * replicating the functionality of the search box on our homepage. It should be used to identify
     * the best match for a disease or target of interest, rather than gathering a specific set of evidence.
     *
    **/
    getSearch(req: operations.GetSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchResponse>;
    /**
     * getTherapeuticAreas - Get the list of therapeutic areas about the current data release
     *
     * Returns the list of therapeutic areas for the current data release
     *
    **/
    getTherapeuticAreas(config?: AxiosRequestConfig): Promise<operations.GetTherapeuticAreasResponse>;
    /**
     * getVersion - Get API version
     *
     * Returns current API version.
     *
    **/
    getVersion(config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * postAssociationFilter - Batch query available associations
     *
     * Complex queries and filters for association objects can also be submitted using a JSON
     * object and the equivalent POST method.
     *
    **/
    postAssociationFilter(req: operations.PostAssociationFilterRequest, config?: AxiosRequestConfig): Promise<operations.PostAssociationFilterResponse>;
    /**
     * postEvidenceById - Get evidence for a list of IDs
     *
     * This is the POST version of [/public/evidence](#!/public/get_public_evidence).
     * It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.
     *
    **/
    postEvidenceById(req: operations.PostEvidenceByIdRequest, config?: AxiosRequestConfig): Promise<operations.PostEvidenceByIdResponse>;
    /**
     * postEvidenceFilter - Batch filter available evidence
     *
     * POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
     * Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
     *
    **/
    postEvidenceFilter(req: operations.PostEvidenceFilterRequest, config?: AxiosRequestConfig): Promise<operations.PostEvidenceFilterResponse>;
}
