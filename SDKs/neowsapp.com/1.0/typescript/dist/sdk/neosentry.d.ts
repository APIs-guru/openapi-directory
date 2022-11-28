import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Neosentry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * retrieveSentryRiskData - Retrieve Sentry (Impact Risk ) Near Earth Objects
     *
     * Retrieves Near Earth Objects listed in the NASA sentry data set
    **/
    retrieveSentryRiskData(req: operations.RetrieveSentryRiskDataRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSentryRiskDataResponse>;
    /**
     * retrieveSentryRiskDataById - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID
     *
     * Retrieves Sentry Near Earth Object by ID
    **/
    retrieveSentryRiskDataById(req: operations.RetrieveSentryRiskDataByIdRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSentryRiskDataByIdResponse>;
}
