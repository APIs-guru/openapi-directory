import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Players {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesManagementPlayersHide - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
    **/
    gamesManagementPlayersHide(req: operations.GamesManagementPlayersHideRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementPlayersHideResponse>;
    /**
     * gamesManagementPlayersUnhide - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
    **/
    gamesManagementPlayersUnhide(req: operations.GamesManagementPlayersUnhideRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementPlayersUnhideResponse>;
}
