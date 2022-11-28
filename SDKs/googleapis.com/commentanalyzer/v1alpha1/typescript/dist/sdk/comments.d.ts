import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * commentanalyzerCommentsAnalyze - Analyzes the provided text and returns scores for requested attributes.
    **/
    commentanalyzerCommentsAnalyze(req: operations.CommentanalyzerCommentsAnalyzeRequest, config?: AxiosRequestConfig): Promise<operations.CommentanalyzerCommentsAnalyzeResponse>;
    /**
     * commentanalyzerCommentsSuggestscore - Suggest comment scores as training data.
    **/
    commentanalyzerCommentsSuggestscore(req: operations.CommentanalyzerCommentsSuggestscoreRequest, config?: AxiosRequestConfig): Promise<operations.CommentanalyzerCommentsSuggestscoreResponse>;
}
