import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AchievementConfigurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesConfigurationAchievementConfigurationsDelete - Delete the achievement configuration with the given ID.
    **/
    gamesConfigurationAchievementConfigurationsDelete(req: operations.GamesConfigurationAchievementConfigurationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsDeleteResponse>;
    /**
     * gamesConfigurationAchievementConfigurationsGet - Retrieves the metadata of the achievement configuration with the given ID.
    **/
    gamesConfigurationAchievementConfigurationsGet(req: operations.GamesConfigurationAchievementConfigurationsGetRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsGetResponse>;
    /**
     * gamesConfigurationAchievementConfigurationsInsert - Insert a new achievement configuration in this application.
    **/
    gamesConfigurationAchievementConfigurationsInsert(req: operations.GamesConfigurationAchievementConfigurationsInsertRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsInsertResponse>;
    /**
     * gamesConfigurationAchievementConfigurationsList - Returns a list of the achievement configurations in this application.
    **/
    gamesConfigurationAchievementConfigurationsList(req: operations.GamesConfigurationAchievementConfigurationsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsListResponse>;
    /**
     * gamesConfigurationAchievementConfigurationsUpdate - Update the metadata of the achievement configuration with the given ID.
    **/
    gamesConfigurationAchievementConfigurationsUpdate(req: operations.GamesConfigurationAchievementConfigurationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsUpdateResponse>;
}
