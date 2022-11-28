import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scores {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesScoresGet - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
    **/
    gamesScoresGet(req: operations.GamesScoresGetRequest, config?: AxiosRequestConfig): Promise<operations.GamesScoresGetResponse>;
    /**
     * gamesScoresList - Lists the scores in a leaderboard, starting from the top.
    **/
    gamesScoresList(req: operations.GamesScoresListRequest, config?: AxiosRequestConfig): Promise<operations.GamesScoresListResponse>;
    /**
     * gamesScoresListWindow - Lists the scores in a leaderboard around (and including) a player's score.
    **/
    gamesScoresListWindow(req: operations.GamesScoresListWindowRequest, config?: AxiosRequestConfig): Promise<operations.GamesScoresListWindowResponse>;
    /**
     * gamesScoresSubmit - Submits a score to the specified leaderboard.
    **/
    gamesScoresSubmit(req: operations.GamesScoresSubmitRequest, config?: AxiosRequestConfig): Promise<operations.GamesScoresSubmitResponse>;
    /**
     * gamesScoresSubmitMultiple - Submits multiple scores to leaderboards.
    **/
    gamesScoresSubmitMultiple(req: operations.GamesScoresSubmitMultipleRequest, config?: AxiosRequestConfig): Promise<operations.GamesScoresSubmitMultipleResponse>;
}
