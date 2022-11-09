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
    MybusinessqandaLocationsQuestionsAnswersDelete(req: operations.MybusinessqandaLocationsQuestionsAnswersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsAnswersDeleteResponse>;
    MybusinessqandaLocationsQuestionsAnswersList(req: operations.MybusinessqandaLocationsQuestionsAnswersListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsAnswersListResponse>;
    MybusinessqandaLocationsQuestionsAnswersUpsert(req: operations.MybusinessqandaLocationsQuestionsAnswersUpsertRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsAnswersUpsertResponse>;
    MybusinessqandaLocationsQuestionsCreate(req: operations.MybusinessqandaLocationsQuestionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsCreateResponse>;
    MybusinessqandaLocationsQuestionsDelete(req: operations.MybusinessqandaLocationsQuestionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsDeleteResponse>;
    MybusinessqandaLocationsQuestionsList(req: operations.MybusinessqandaLocationsQuestionsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsListResponse>;
    MybusinessqandaLocationsQuestionsPatch(req: operations.MybusinessqandaLocationsQuestionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsPatchResponse>;
}
export {};
