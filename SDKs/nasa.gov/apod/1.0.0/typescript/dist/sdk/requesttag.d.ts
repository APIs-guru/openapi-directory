import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RequestTag {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApod - Returns images
     *
     * Returns the picture of the day
    **/
    getApod(req: operations.GetApodRequest, config?: AxiosRequestConfig): Promise<operations.GetApodResponse>;
}
