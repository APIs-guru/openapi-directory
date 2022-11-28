import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MobileCarriers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingMobileCarriersGet - Gets one mobile carrier by ID.
    **/
    dfareportingMobileCarriersGet(req: operations.DfareportingMobileCarriersGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileCarriersGetResponse>;
    /**
     * dfareportingMobileCarriersList - Retrieves a list of mobile carriers.
    **/
    dfareportingMobileCarriersList(req: operations.DfareportingMobileCarriersListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileCarriersListResponse>;
}
