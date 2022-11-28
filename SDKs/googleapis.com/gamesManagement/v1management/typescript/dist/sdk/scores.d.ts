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
     * gamesManagementScoresReset - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
    **/
    gamesManagementScoresReset(req: operations.GamesManagementScoresResetRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementScoresResetResponse>;
    /**
     * gamesManagementScoresResetAll - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
    **/
    gamesManagementScoresResetAll(req: operations.GamesManagementScoresResetAllRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementScoresResetAllResponse>;
    /**
     * gamesManagementScoresResetAllForAllPlayers - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
    **/
    gamesManagementScoresResetAllForAllPlayers(req: operations.GamesManagementScoresResetAllForAllPlayersRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementScoresResetAllForAllPlayersResponse>;
    /**
     * gamesManagementScoresResetForAllPlayers - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
    **/
    gamesManagementScoresResetForAllPlayers(req: operations.GamesManagementScoresResetForAllPlayersRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementScoresResetForAllPlayersResponse>;
    /**
     * gamesManagementScoresResetMultipleForAllPlayers - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
    **/
    gamesManagementScoresResetMultipleForAllPlayers(req: operations.GamesManagementScoresResetMultipleForAllPlayersRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementScoresResetMultipleForAllPlayersResponse>;
}
