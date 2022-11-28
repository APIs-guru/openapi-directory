import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlayTts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * startTalk - Play text to speech into a call
     *
     * Play text to speech into a call
    **/
    startTalk(req: operations.StartTalkRequest, config?: AxiosRequestConfig): Promise<operations.StartTalkResponse>;
    /**
     * stopTalk - Stop text to speech in a call
     *
     * Stop text to speech in a call
    **/
    stopTalk(req: operations.StopTalkRequest, config?: AxiosRequestConfig): Promise<operations.StopTalkResponse>;
}
