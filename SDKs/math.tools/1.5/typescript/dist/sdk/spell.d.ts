import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Spell {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersCardinal - Get the cardinal of the given number
    **/
    getNumbersCardinal(req: operations.GetNumbersCardinalRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersCardinalResponse>;
    /**
     * getNumbersCurrency - Spells out the number as a currency
    **/
    getNumbersCurrency(req: operations.GetNumbersCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersCurrencyResponse>;
    /**
     * getNumbersOrdinal - Get the ordinal of the given number
    **/
    getNumbersOrdinal(req: operations.GetNumbersOrdinalRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersOrdinalResponse>;
}
