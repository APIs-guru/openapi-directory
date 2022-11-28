import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Conversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * convert - Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x
    **/
    convert(req: operations.ConvertRequest, config?: AxiosRequestConfig): Promise<operations.ConvertResponse>;
    /**
     * convertUrl - Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL
    **/
    convertUrl(req: operations.ConvertUrlRequest, config?: AxiosRequestConfig): Promise<operations.ConvertUrlResponse>;
}
