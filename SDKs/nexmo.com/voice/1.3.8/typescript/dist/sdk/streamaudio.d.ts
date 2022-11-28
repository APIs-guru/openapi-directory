import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StreamAudio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * startStream - Play an audio file into a call
     *
     * Play an audio file into a call
    **/
    startStream(req: operations.StartStreamRequest, config?: AxiosRequestConfig): Promise<operations.StartStreamResponse>;
    /**
     * stopStream - Stop playing an audio file into a call
     *
     * Stop playing an audio file into a call
    **/
    stopStream(req: operations.StopStreamRequest, config?: AxiosRequestConfig): Promise<operations.StopStreamResponse>;
}
