import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Limits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * drivelabelsLimitsGetLabel - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
    **/
    drivelabelsLimitsGetLabel(req: operations.DrivelabelsLimitsGetLabelRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLimitsGetLabelResponse>;
}
