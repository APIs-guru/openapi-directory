import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesStatsGet - Returns engagement and spend statistics in this application for the currently authenticated user.
    **/
    gamesStatsGet(req: operations.GamesStatsGetRequest, config?: AxiosRequestConfig): Promise<operations.GamesStatsGetResponse>;
}
