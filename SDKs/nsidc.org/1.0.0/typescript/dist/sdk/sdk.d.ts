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
     * In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.
    **/
    Facets(req: operations.FacetsRequest, config?: AxiosRequestConfig): Promise<operations.FacetsResponse>;
    /**
     * In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.
    **/
    Id(req: operations.IdRequest, config?: AxiosRequestConfig): Promise<operations.IdResponse>;
    /**
     * This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.
    **/
    OpenSearch(req: operations.OpenSearchRequest, config?: AxiosRequestConfig): Promise<operations.OpenSearchResponse>;
    OpensearchDescription(config?: AxiosRequestConfig): Promise<operations.OpensearchDescriptionResponse>;
}
export {};
