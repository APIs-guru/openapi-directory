import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApplicationDetailService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * testingApplicationDetailServiceGetApkDetails - Gets the details of an Android application APK.
    **/
    testingApplicationDetailServiceGetApkDetails(req: operations.TestingApplicationDetailServiceGetApkDetailsRequest, config?: AxiosRequestConfig): Promise<operations.TestingApplicationDetailServiceGetApkDetailsResponse>;
}
