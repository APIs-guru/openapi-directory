import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Validation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBadge - Return a redirect to a badge svg file depending on a source definition's validity
    **/
    getBadge(req: operations.GetBadgeRequest, config?: AxiosRequestConfig): Promise<operations.GetBadgeResponse>;
    /**
     * validate - Validate an OpenAPI 3.0.x definition supplied in the body of the request
    **/
    validate(req: operations.ValidateRequest, config?: AxiosRequestConfig): Promise<operations.ValidateResponse>;
    /**
     * validateUrl - Validate an OpenAPI 3.0.x definition
    **/
    validateUrl(req: operations.ValidateUrlRequest, config?: AxiosRequestConfig): Promise<operations.ValidateUrlResponse>;
}
