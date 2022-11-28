import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PostalCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingPostalCodesGet - Gets one postal code by ID.
    **/
    dfareportingPostalCodesGet(req: operations.DfareportingPostalCodesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPostalCodesGetResponse>;
    /**
     * dfareportingPostalCodesList - Retrieves a list of postal codes.
    **/
    dfareportingPostalCodesList(req: operations.DfareportingPostalCodesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPostalCodesListResponse>;
}
