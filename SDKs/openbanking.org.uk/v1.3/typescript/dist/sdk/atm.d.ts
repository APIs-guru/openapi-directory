import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Atm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAtms - Gets a list of all `ATM` objects.
    **/
    getAtms(req: operations.GetAtmsRequest, config?: AxiosRequestConfig): Promise<operations.GetAtmsResponse>;
    /**
     * headAtms - Gets header information on the current set of `ATM` data
    **/
    headAtms(req: operations.HeadAtmsRequest, config?: AxiosRequestConfig): Promise<operations.HeadAtmsResponse>;
}
