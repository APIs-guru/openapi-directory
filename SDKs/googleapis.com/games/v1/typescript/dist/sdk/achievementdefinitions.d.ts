import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AchievementDefinitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesAchievementDefinitionsList - Lists all the achievement definitions for your application.
    **/
    gamesAchievementDefinitionsList(req: operations.GamesAchievementDefinitionsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementDefinitionsListResponse>;
}
