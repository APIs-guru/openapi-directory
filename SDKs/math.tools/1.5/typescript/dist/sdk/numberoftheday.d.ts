import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NumberOfTheDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersNod - Get the number of the day for current day
    **/
    getNumbersNod(req: operations.GetNumbersNodRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersNodResponse>;
}
