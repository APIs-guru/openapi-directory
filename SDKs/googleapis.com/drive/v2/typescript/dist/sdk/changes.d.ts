import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Changes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveChangesGet - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
    **/
    driveChangesGet(req: operations.DriveChangesGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveChangesGetResponse>;
    /**
     * driveChangesGetStartPageToken - Gets the starting pageToken for listing future changes.
    **/
    driveChangesGetStartPageToken(req: operations.DriveChangesGetStartPageTokenRequest, config?: AxiosRequestConfig): Promise<operations.DriveChangesGetStartPageTokenResponse>;
    /**
     * driveChangesList - Lists the changes for a user or shared drive.
    **/
    driveChangesList(req: operations.DriveChangesListRequest, config?: AxiosRequestConfig): Promise<operations.DriveChangesListResponse>;
    /**
     * driveChangesWatch - Subscribe to changes for a user.
    **/
    driveChangesWatch(req: operations.DriveChangesWatchRequest, config?: AxiosRequestConfig): Promise<operations.DriveChangesWatchResponse>;
}
