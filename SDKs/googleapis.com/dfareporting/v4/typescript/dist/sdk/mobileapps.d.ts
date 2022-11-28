import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MobileApps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingMobileAppsGet - Gets one mobile app by ID.
    **/
    dfareportingMobileAppsGet(req: operations.DfareportingMobileAppsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileAppsGetResponse>;
    /**
     * dfareportingMobileAppsList - Retrieves list of available mobile apps.
    **/
    dfareportingMobileAppsList(req: operations.DfareportingMobileAppsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileAppsListResponse>;
}
