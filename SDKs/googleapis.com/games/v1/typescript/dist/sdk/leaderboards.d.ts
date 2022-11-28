import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Leaderboards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesLeaderboardsGet - Retrieves the metadata of the leaderboard with the given ID.
    **/
    gamesLeaderboardsGet(req: operations.GamesLeaderboardsGetRequest, config?: AxiosRequestConfig): Promise<operations.GamesLeaderboardsGetResponse>;
    /**
     * gamesLeaderboardsList - Lists all the leaderboard metadata for your application.
    **/
    gamesLeaderboardsList(req: operations.GamesLeaderboardsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesLeaderboardsListResponse>;
}
