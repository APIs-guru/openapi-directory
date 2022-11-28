import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metagame {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesMetagameGetMetagameConfig - Return the metagame configuration data for the calling application.
    **/
    gamesMetagameGetMetagameConfig(req: operations.GamesMetagameGetMetagameConfigRequest, config?: AxiosRequestConfig): Promise<operations.GamesMetagameGetMetagameConfigResponse>;
    /**
     * gamesMetagameListCategoriesByPlayer - List play data aggregated per category for the player corresponding to `playerId`.
    **/
    gamesMetagameListCategoriesByPlayer(req: operations.GamesMetagameListCategoriesByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.GamesMetagameListCategoriesByPlayerResponse>;
}
