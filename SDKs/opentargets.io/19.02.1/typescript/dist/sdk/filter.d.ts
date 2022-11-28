import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Filter {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * postAssociationFilter - Batch query available associations
     *
     * Complex queries and filters for association objects can also be submitted using a JSON
     * object and the equivalent POST method.
     *
    **/
    postAssociationFilter(req: operations.PostAssociationFilterRequest, config?: AxiosRequestConfig): Promise<operations.PostAssociationFilterResponse>;
    /**
     * postEvidenceFilter - Batch filter available evidence
     *
     * POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
     * Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
     *
    **/
    postEvidenceFilter(req: operations.PostEvidenceFilterRequest, config?: AxiosRequestConfig): Promise<operations.PostEvidenceFilterResponse>;
}
