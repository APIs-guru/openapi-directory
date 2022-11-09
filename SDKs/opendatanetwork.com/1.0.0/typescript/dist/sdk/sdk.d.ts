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
    CreateAMap(req: operations.CreateAMapRequest, config?: AxiosRequestConfig): Promise<operations.CreateAMapResponse>;
    FindAllAvailableDataForSomeEntities(req: operations.FindAllAvailableDataForSomeEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.FindAllAvailableDataForSomeEntitiesResponse>;
    FindTheRelativesOfAnEntity(req: operations.FindTheRelativesOfAnEntityRequest, config?: AxiosRequestConfig): Promise<operations.FindTheRelativesOfAnEntityResponse>;
    GetEntities(req: operations.GetEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitiesResponse>;
    GetConstraintPermutationsForEntities(req: operations.GetConstraintPermutationsForEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetConstraintPermutationsForEntitiesResponse>;
    GetDatasets(req: operations.GetDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetsResponse>;
    GetQuestions(req: operations.GetQuestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetQuestionsResponse>;
    GetSuggestions(req: operations.GetSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSuggestionsResponse>;
    GetValuesForVariables(req: operations.GetValuesForVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetValuesForVariablesResponse>;
}
export {};
