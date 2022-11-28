import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveactivityActivityQuery - Query past activity in Google Drive.
    **/
    driveactivityActivityQuery(req: operations.DriveactivityActivityQueryRequest, config?: AxiosRequestConfig): Promise<operations.DriveactivityActivityQueryResponse>;
}
