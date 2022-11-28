import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.opendatanetwork.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createAMap - Create a map
    **/
    createAMap(req: operations.CreateAMapRequest, config?: AxiosRequestConfig): Promise<operations.CreateAMapResponse>;
    /**
     * findAllAvailableDataForSomeEntities - Find all available data for some entities
    **/
    findAllAvailableDataForSomeEntities(req: operations.FindAllAvailableDataForSomeEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.FindAllAvailableDataForSomeEntitiesResponse>;
    /**
     * findTheRelativesOfAnEntity - Find the relatives of an entity
    **/
    findTheRelativesOfAnEntity(req: operations.FindTheRelativesOfAnEntityRequest, config?: AxiosRequestConfig): Promise<operations.FindTheRelativesOfAnEntityResponse>;
    /**
     * getEntities - Get Entities
    **/
    getEntities(req: operations.GetEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitiesResponse>;
    /**
     * getConstraintPermutationsForEntities - Get constraint permutations for entities
    **/
    getConstraintPermutationsForEntities(req: operations.GetConstraintPermutationsForEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetConstraintPermutationsForEntitiesResponse>;
    /**
     * getDatasets - Get datasets
    **/
    getDatasets(req: operations.GetDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetsResponse>;
    /**
     * getQuestions - Get questions
    **/
    getQuestions(req: operations.GetQuestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetQuestionsResponse>;
    /**
     * getSuggestions - Get suggestions
    **/
    getSuggestions(req: operations.GetSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSuggestionsResponse>;
    /**
     * getValuesForVariables - Get values for variables
    **/
    getValuesForVariables(req: operations.GetValuesForVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetValuesForVariablesResponse>;
}
export {};
