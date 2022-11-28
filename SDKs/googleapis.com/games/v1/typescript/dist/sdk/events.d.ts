import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesEventsListByPlayer - Returns a list showing the current progress on events in this application for the currently authenticated user.
    **/
    gamesEventsListByPlayer(req: operations.GamesEventsListByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.GamesEventsListByPlayerResponse>;
    /**
     * gamesEventsListDefinitions - Returns a list of the event definitions in this application.
    **/
    gamesEventsListDefinitions(req: operations.GamesEventsListDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.GamesEventsListDefinitionsResponse>;
    /**
     * gamesEventsRecord - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
    **/
    gamesEventsRecord(req: operations.GamesEventsRecordRequest, config?: AxiosRequestConfig): Promise<operations.GamesEventsRecordResponse>;
}
