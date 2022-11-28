import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NumberGeneration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersRandom - Generate random number(s)
    **/
    getNumbersRandom(req: operations.GetNumbersRandomRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersRandomResponse>;
}
