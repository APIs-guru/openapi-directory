import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Workers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * genomicsWorkersCheckIn - The worker uses this method to retrieve the assigned operation and provide periodic status updates.
    **/
    genomicsWorkersCheckIn(req: operations.GenomicsWorkersCheckInRequest, config?: AxiosRequestConfig): Promise<operations.GenomicsWorkersCheckInResponse>;
}
