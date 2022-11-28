import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersPi - Get digits of pi (Ï€)
    **/
    getNumbersPi(req: operations.GetNumbersPiRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersPiResponse>;
}
