import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveAppsGet - Gets a specific app.
    **/
    driveAppsGet(req: operations.DriveAppsGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveAppsGetResponse>;
    /**
     * driveAppsList - Lists a user's installed apps.
    **/
    driveAppsList(req: operations.DriveAppsListRequest, config?: AxiosRequestConfig): Promise<operations.DriveAppsListResponse>;
}
