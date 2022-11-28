import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Callbacks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAutomationV4ActionsCallbacksCompleteCompleteBatch - Complete a batch of callbacks
     *
     * Completes the given action callbacks.
    **/
    postAutomationV4ActionsCallbacksCompleteCompleteBatch(req: operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse>;
    /**
     * postAutomationV4ActionsCallbacksCallbackIdCompleteComplete - Complete a callback
     *
     * Completes the given action callback.
    **/
    postAutomationV4ActionsCallbacksCallbackIdCompleteComplete(req: operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse>;
}
