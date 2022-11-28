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
     * gamesPlayersGet - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
    **/
    gamesPlayersGet(req: operations.GamesPlayersGetRequest, config?: AxiosRequestConfig): Promise<operations.GamesPlayersGetResponse>;
    /**
     * gamesPlayersGetScopedPlayerIds - Retrieves scoped player identifiers for currently authenticated user.
    **/
    gamesPlayersGetScopedPlayerIds(req: operations.GamesPlayersGetScopedPlayerIdsRequest, config?: AxiosRequestConfig): Promise<operations.GamesPlayersGetScopedPlayerIdsResponse>;
    /**
     * gamesPlayersList - Get the collection of players for the currently authenticated user.
    **/
    gamesPlayersList(req: operations.GamesPlayersListRequest, config?: AxiosRequestConfig): Promise<operations.GamesPlayersListResponse>;
}
