import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BehavioralEventsTracking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postEventsV3Send - Sends Custom Behavioral Event
     *
     * Endpoint to send an instance of a behavioral event
    **/
    postEventsV3Send(req: operations.PostEventsV3SendRequest, config?: AxiosRequestConfig): Promise<operations.PostEventsV3SendResponse>;
}
