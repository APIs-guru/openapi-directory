import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Calls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createCall - Create an outbound call
     *
     * Create an outbound Call
    **/
    createCall(req: operations.CreateCallRequest, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    /**
     * getCall - Get detail of a specific call
     *
     * Get detail of a specific call
    **/
    getCall(req: operations.GetCallRequest, config?: AxiosRequestConfig): Promise<operations.GetCallResponse>;
    /**
     * getCalls - Get details of your calls
     *
     * Get details of your calls
    **/
    getCalls(req: operations.GetCallsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallsResponse>;
    /**
     * updateCall - Modify an in progress call
     *
     * Modify an in progress call
    **/
    updateCall(req: operations.UpdateCallRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCallResponse>;
}
