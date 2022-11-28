import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SwaggerDoc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSwaggerDocFormat - Swagger compatible API description
    **/
    getSwaggerDocFormat(config?: AxiosRequestConfig): Promise<operations.GetSwaggerDocFormatResponse>;
    /**
     * getSwaggerDocNameFormat - Swagger compatible API description for specific API
    **/
    getSwaggerDocNameFormat(req: operations.GetSwaggerDocNameFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSwaggerDocNameFormatResponse>;
}
