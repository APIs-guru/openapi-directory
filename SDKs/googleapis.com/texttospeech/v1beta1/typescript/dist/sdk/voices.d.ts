import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Voices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * texttospeechVoicesList - Returns a list of Voice supported for synthesis.
    **/
    texttospeechVoicesList(req: operations.TexttospeechVoicesListRequest, config?: AxiosRequestConfig): Promise<operations.TexttospeechVoicesListResponse>;
}
