import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fcmdataProjectsAndroidAppsDeliveryDataList - List aggregate delivery data for the given Android application.
    **/
    fcmdataProjectsAndroidAppsDeliveryDataList(req: operations.FcmdataProjectsAndroidAppsDeliveryDataListRequest, config?: AxiosRequestConfig): Promise<operations.FcmdataProjectsAndroidAppsDeliveryDataListResponse>;
}
