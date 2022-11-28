import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Speech {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * speechSpeechLongrunningrecognize - Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
    **/
    speechSpeechLongrunningrecognize(req: operations.SpeechSpeechLongrunningrecognizeRequest, config?: AxiosRequestConfig): Promise<operations.SpeechSpeechLongrunningrecognizeResponse>;
    /**
     * speechSpeechRecognize - Performs synchronous speech recognition: receive results after all audio has been sent and processed.
    **/
    speechSpeechRecognize(req: operations.SpeechSpeechRecognizeRequest, config?: AxiosRequestConfig): Promise<operations.SpeechSpeechRecognizeResponse>;
}
