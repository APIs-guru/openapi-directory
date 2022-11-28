import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OperatingSystems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingOperatingSystemsGet - Gets one operating system by DART ID.
    **/
    dfareportingOperatingSystemsGet(req: operations.DfareportingOperatingSystemsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemsGetResponse>;
    /**
     * dfareportingOperatingSystemsList - Retrieves a list of operating systems.
    **/
    dfareportingOperatingSystemsList(req: operations.DfareportingOperatingSystemsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemsListResponse>;
}
