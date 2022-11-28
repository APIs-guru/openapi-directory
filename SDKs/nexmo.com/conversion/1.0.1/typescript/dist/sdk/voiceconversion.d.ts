import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VoiceConversion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * voiceConversion - Tell Nexmo if your voice call was successful
     *
     * Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.
    **/
    voiceConversion(req: operations.VoiceConversionRequest, config?: AxiosRequestConfig): Promise<operations.VoiceConversionResponse>;
}
