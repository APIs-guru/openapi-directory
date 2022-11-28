import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class About {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveAboutGet - Gets the information about the current user along with Drive API settings
    **/
    driveAboutGet(req: operations.DriveAboutGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveAboutGetResponse>;
}
