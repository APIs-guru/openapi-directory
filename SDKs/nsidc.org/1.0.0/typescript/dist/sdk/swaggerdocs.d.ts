import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SwaggerDocs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * facets - View the facet information corresponding to a search
     *
     * In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.
    **/
    facets(req: operations.FacetsRequest, config?: AxiosRequestConfig): Promise<operations.FacetsResponse>;
    /**
     * id - Suggest search terms based on a partial query
     *
     * In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.
    **/
    id(req: operations.IdRequest, config?: AxiosRequestConfig): Promise<operations.IdResponse>;
    /**
     * openSearch - Search documents using the OpenSearch 1.1 Specification
     *
     * This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.
    **/
    openSearch(req: operations.OpenSearchRequest, config?: AxiosRequestConfig): Promise<operations.OpenSearchResponse>;
    /**
     * opensearchDescription - Describes the web interface of NSIDC's data search engine
    **/
    opensearchDescription(config?: AxiosRequestConfig): Promise<operations.OpensearchDescriptionResponse>;
}
