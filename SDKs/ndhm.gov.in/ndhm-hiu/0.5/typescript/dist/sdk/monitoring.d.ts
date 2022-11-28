import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Monitoring {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV05Heartbeat - Get consent request status
    **/
    getV05Heartbeat(req: operations.GetV05HeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.GetV05HeartbeatResponse>;
}
