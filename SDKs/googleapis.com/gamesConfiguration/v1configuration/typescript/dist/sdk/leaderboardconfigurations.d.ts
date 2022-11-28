import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LeaderboardConfigurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesConfigurationLeaderboardConfigurationsDelete - Delete the leaderboard configuration with the given ID.
    **/
    gamesConfigurationLeaderboardConfigurationsDelete(req: operations.GamesConfigurationLeaderboardConfigurationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse>;
    /**
     * gamesConfigurationLeaderboardConfigurationsGet - Retrieves the metadata of the leaderboard configuration with the given ID.
    **/
    gamesConfigurationLeaderboardConfigurationsGet(req: operations.GamesConfigurationLeaderboardConfigurationsGetRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsGetResponse>;
    /**
     * gamesConfigurationLeaderboardConfigurationsInsert - Insert a new leaderboard configuration in this application.
    **/
    gamesConfigurationLeaderboardConfigurationsInsert(req: operations.GamesConfigurationLeaderboardConfigurationsInsertRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsInsertResponse>;
    /**
     * gamesConfigurationLeaderboardConfigurationsList - Returns a list of the leaderboard configurations in this application.
    **/
    gamesConfigurationLeaderboardConfigurationsList(req: operations.GamesConfigurationLeaderboardConfigurationsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsListResponse>;
    /**
     * gamesConfigurationLeaderboardConfigurationsUpdate - Update the metadata of the leaderboard configuration with the given ID.
    **/
    gamesConfigurationLeaderboardConfigurationsUpdate(req: operations.GamesConfigurationLeaderboardConfigurationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse>;
}
