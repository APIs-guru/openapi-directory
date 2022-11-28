import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesManagementApplicationsListHidden - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
    **/
    gamesManagementApplicationsListHidden(req: operations.GamesManagementApplicationsListHiddenRequest, config?: AxiosRequestConfig): Promise<operations.GamesManagementApplicationsListHiddenResponse>;
}
