import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessqandaLocationsQuestionsAnswersDelete - Deletes the answer written by the current user to a question.
    **/
    mybusinessqandaLocationsQuestionsAnswersDelete(req: operations.MybusinessqandaLocationsQuestionsAnswersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsAnswersDeleteResponse>;
    /**
     * mybusinessqandaLocationsQuestionsAnswersList - Returns the paginated list of answers for a specified question.
    **/
    mybusinessqandaLocationsQuestionsAnswersList(req: operations.MybusinessqandaLocationsQuestionsAnswersListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsAnswersListResponse>;
    /**
     * mybusinessqandaLocationsQuestionsAnswersUpsert - Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
    **/
    mybusinessqandaLocationsQuestionsAnswersUpsert(req: operations.MybusinessqandaLocationsQuestionsAnswersUpsertRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsAnswersUpsertResponse>;
    /**
     * mybusinessqandaLocationsQuestionsCreate - Adds a question for the specified location.
    **/
    mybusinessqandaLocationsQuestionsCreate(req: operations.MybusinessqandaLocationsQuestionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsCreateResponse>;
    /**
     * mybusinessqandaLocationsQuestionsDelete - Deletes a specific question written by the current user.
    **/
    mybusinessqandaLocationsQuestionsDelete(req: operations.MybusinessqandaLocationsQuestionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsDeleteResponse>;
    /**
     * mybusinessqandaLocationsQuestionsList - Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.
    **/
    mybusinessqandaLocationsQuestionsList(req: operations.MybusinessqandaLocationsQuestionsListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsListResponse>;
    /**
     * mybusinessqandaLocationsQuestionsPatch - Updates a specific question written by the current user.
    **/
    mybusinessqandaLocationsQuestionsPatch(req: operations.MybusinessqandaLocationsQuestionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessqandaLocationsQuestionsPatchResponse>;
}
