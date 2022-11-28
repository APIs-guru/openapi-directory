import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * trackJourneyEvent - Push event
     *
     * Endpoint used to push an event for a user or an account.
    **/
    trackJourneyEvent(req: operations.TrackJourneyEventRequest, config?: AxiosRequestConfig): Promise<operations.TrackJourneyEventResponse>;
}
