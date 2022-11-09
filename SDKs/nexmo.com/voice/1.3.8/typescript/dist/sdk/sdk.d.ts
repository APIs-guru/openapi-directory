import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Create an outbound Call
    **/
    CreateCall(req: operations.CreateCallRequest, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    /**
     * Get detail of a specific call
    **/
    GetCall(req: operations.GetCallRequest, config?: AxiosRequestConfig): Promise<operations.GetCallResponse>;
    /**
     * Get details of your calls
    **/
    GetCalls(req: operations.GetCallsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallsResponse>;
    /**
     * Play DTMF tones into a call
    **/
    StartDtmf(req: operations.StartDtmfRequest, config?: AxiosRequestConfig): Promise<operations.StartDtmfResponse>;
    /**
     * Play an audio file into a call
    **/
    StartStream(req: operations.StartStreamRequest, config?: AxiosRequestConfig): Promise<operations.StartStreamResponse>;
    /**
     * Play text to speech into a call
    **/
    StartTalk(req: operations.StartTalkRequest, config?: AxiosRequestConfig): Promise<operations.StartTalkResponse>;
    /**
     * Stop playing an audio file into a call
    **/
    StopStream(req: operations.StopStreamRequest, config?: AxiosRequestConfig): Promise<operations.StopStreamResponse>;
    /**
     * Stop text to speech in a call
    **/
    StopTalk(req: operations.StopTalkRequest, config?: AxiosRequestConfig): Promise<operations.StopTalkResponse>;
    /**
     * Modify an in progress call
    **/
    UpdateCall(req: operations.UpdateCallRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCallResponse>;
}
export {};
