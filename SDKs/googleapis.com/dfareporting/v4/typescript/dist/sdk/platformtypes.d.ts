import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlatformTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingPlatformTypesGet - Gets one platform type by ID.
    **/
    dfareportingPlatformTypesGet(req: operations.DfareportingPlatformTypesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlatformTypesGetResponse>;
    /**
     * dfareportingPlatformTypesList - Retrieves a list of platform types.
    **/
    dfareportingPlatformTypesList(req: operations.DfareportingPlatformTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingPlatformTypesListResponse>;
}
