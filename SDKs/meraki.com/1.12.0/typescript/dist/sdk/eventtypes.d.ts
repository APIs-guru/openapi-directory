import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EventTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkEventsEventTypes - List the event type to human-readable description
     *
     * List the event type to human-readable description
    **/
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
}
