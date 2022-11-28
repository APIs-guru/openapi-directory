import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OperatingSystemVersions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingOperatingSystemVersionsGet - Gets one operating system version by ID.
    **/
    dfareportingOperatingSystemVersionsGet(req: operations.DfareportingOperatingSystemVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemVersionsGetResponse>;
    /**
     * dfareportingOperatingSystemVersionsList - Retrieves a list of operating system versions.
    **/
    dfareportingOperatingSystemVersionsList(req: operations.DfareportingOperatingSystemVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemVersionsListResponse>;
}
