import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Event {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createEvent - Create an event
    **/
    createEvent(req: operations.CreateEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventResponse>;
    /**
     * deleteEvent - Delete an event
    **/
    deleteEvent(req: operations.DeleteEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventResponse>;
    /**
     * getEvent - Retrieve an event
    **/
    getEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * getEvents - List events
     *
     * This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).
    **/
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
}
