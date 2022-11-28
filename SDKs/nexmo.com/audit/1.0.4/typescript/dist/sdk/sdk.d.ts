import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/beta/audit"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getEvent - Retrieve individual audit event
     *
     * Get the specified audit event.
     *
    **/
    getEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * getEvents - Retrieve audit events
     *
     * Get a series of audit events describing changes made to your Vonage API account over time.
     *
    **/
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * getEventsOptions - Retrieve audit event types
     *
     * Get audit event types.
     *
    **/
    getEventsOptions(req: operations.GetEventsOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsOptionsResponse>;
}
export {};
