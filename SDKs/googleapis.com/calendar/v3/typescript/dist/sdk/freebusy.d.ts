import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Freebusy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * calendarFreebusyQuery - Returns free/busy information for a set of calendars.
    **/
    calendarFreebusyQuery(req: operations.CalendarFreebusyQueryRequest, config?: AxiosRequestConfig): Promise<operations.CalendarFreebusyQueryResponse>;
}
