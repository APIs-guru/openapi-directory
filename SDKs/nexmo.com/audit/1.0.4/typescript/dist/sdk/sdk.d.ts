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
     * Get the specified audit event.
     *
    **/
    GetEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * Get a series of audit events describing changes made to your Vonage API account over time.
     *
    **/
    GetEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * Get audit event types.
     *
    **/
    GetEventsOptions(req: operations.GetEventsOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsOptionsResponse>;
}
export {};
