import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NumberSystemsConversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersNumeralChinese - Convert base 10 representation of a given number to chinese numeral.
    **/
    getNumbersNumeralChinese(req: operations.GetNumbersNumeralChineseRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersNumeralChineseResponse>;
    /**
     * getNumbersNumeralEgyptian - Convert base 10 representation of a given number to egyptian numeral.
    **/
    getNumbersNumeralEgyptian(req: operations.GetNumbersNumeralEgyptianRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersNumeralEgyptianResponse>;
    /**
     * getNumbersNumeralRoman - Convert base 10 representation of a given number to roman numeral.
    **/
    getNumbersNumeralRoman(req: operations.GetNumbersNumeralRomanRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersNumeralRomanResponse>;
}
