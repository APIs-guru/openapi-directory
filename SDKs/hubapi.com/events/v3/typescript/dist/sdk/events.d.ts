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
     * getEventsV3EventsGetPage - Returns a collection of events matching a query.
    **/
    getEventsV3EventsGetPage(req: operations.GetEventsV3EventsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsV3EventsGetPageResponse>;
}
