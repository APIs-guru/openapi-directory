import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * solrqueryGet - Apache Solr powered search
     *
     * GET is simpler to use, but imposes restrictions on the complexity and the lenght of the parameters.
    **/
    solrqueryGet(req: operations.SolrqueryGetRequest, config?: AxiosRequestConfig): Promise<operations.SolrqueryGetResponse>;
    /**
     * solrqueryPost - Apache Solr powered search
     *
     * POST is more complex to use, but also allows for much for complex and lengthy queries.
    **/
    solrqueryPost(req: operations.SolrqueryPostRequest, config?: AxiosRequestConfig): Promise<operations.SolrqueryPostResponse>;
}
