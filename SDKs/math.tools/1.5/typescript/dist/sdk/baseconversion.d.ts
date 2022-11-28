import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BaseConversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNumbersBase - Convert a given number from one base to another base
    **/
    getNumbersBase(req: operations.GetNumbersBaseRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseResponse>;
    /**
     * getNumbersBaseBinary - Convert a given number to binary
    **/
    getNumbersBaseBinary(req: operations.GetNumbersBaseBinaryRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseBinaryResponse>;
    /**
     * getNumbersBaseHex - Convert a given number to hexadecimal
    **/
    getNumbersBaseHex(req: operations.GetNumbersBaseHexRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseHexResponse>;
    /**
     * getNumbersBaseOctal - Convert a given number to octal
    **/
    getNumbersBaseOctal(req: operations.GetNumbersBaseOctalRequest, config?: AxiosRequestConfig): Promise<operations.GetNumbersBaseOctalResponse>;
}
