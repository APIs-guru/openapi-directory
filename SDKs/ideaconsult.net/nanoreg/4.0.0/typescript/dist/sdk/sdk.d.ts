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
     * Returns endpoint summary
    **/
    GetEndpointSummary(req: operations.GetEndpointSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetEndpointSummaryResponse>;
    /**
     * Multiple studies in tabular form
    **/
    GetInvestigationResults(req: operations.GetInvestigationResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetInvestigationResultsResponse>;
    /**
     * Returns substance representation
    **/
    GetSubstanceByUuid(req: operations.GetSubstanceByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceByUuidResponse>;
    /**
     * Returns substance composition
    **/
    GetSubstanceComposition(req: operations.GetSubstanceCompositionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceCompositionResponse>;
    /**
     * Returns substance composition
    **/
    GetSubstanceStructures(req: operations.GetSubstanceStructuresRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceStructuresResponse>;
    /**
     * Returns substance study representation
    **/
    GetSubstanceStudy(req: operations.GetSubstanceStudyRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceStudyResponse>;
    /**
     * Study summary
    **/
    GetSubstanceStudySummary(req: operations.GetSubstanceStudySummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstanceStudySummaryResponse>;
    /**
     * Returns a list of substances, according to the search criteria
    **/
    GetSubstances(req: operations.GetSubstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetSubstancesResponse>;
    /**
     * Returns compounds found
     * http://ambit.sf.net - Learn more about operations provided by this API.
    **/
    SearchByIdentifier(req: operations.SearchByIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.SearchByIdentifierResponse>;
    /**
     * Returns similar compounds
     * http://ambit.sf.net - Learn more about operations provided by this API.
    **/
    SearchBySimilarity(req: operations.SearchBySimilarityRequest, config?: AxiosRequestConfig): Promise<operations.SearchBySimilarityResponse>;
    /**
     * Returns compounds with the specified substructure
     * http://ambit.sf.net - Learn more about operations provided by this API.
    **/
    SearchBySmarts(req: operations.SearchBySmartsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBySmartsResponse>;
    /**
     * GET is simpler to use, but imposes restrictions on the complexity and the lenght of the parameters.
    **/
    SolrqueryGet(req: operations.SolrqueryGetRequest, config?: AxiosRequestConfig): Promise<operations.SolrqueryGetResponse>;
    /**
     * POST is more complex to use, but also allows for much for complex and lengthy queries.
    **/
    SolrqueryPost(req: operations.SolrqueryPostRequest, config?: AxiosRequestConfig): Promise<operations.SolrqueryPostResponse>;
}
export {};
