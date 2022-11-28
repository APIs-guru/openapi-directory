import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlayDtmf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * startDtmf - Play DTMF tones into a call
     *
     * Play DTMF tones into a call
    **/
    startDtmf(req: operations.StartDtmfRequest, config?: AxiosRequestConfig): Promise<operations.StartDtmfResponse>;
}
