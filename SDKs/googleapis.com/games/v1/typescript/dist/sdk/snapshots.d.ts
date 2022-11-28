import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Snapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesSnapshotsGet - Retrieves the metadata for a given snapshot ID.
    **/
    gamesSnapshotsGet(req: operations.GamesSnapshotsGetRequest, config?: AxiosRequestConfig): Promise<operations.GamesSnapshotsGetResponse>;
    /**
     * gamesSnapshotsList - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
    **/
    gamesSnapshotsList(req: operations.GamesSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesSnapshotsListResponse>;
}
