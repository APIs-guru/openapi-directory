import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CalendarList {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * calendarCalendarListDelete - Removes a calendar from the user's calendar list.
    **/
    calendarCalendarListDelete(req: operations.CalendarCalendarListDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListDeleteResponse>;
    /**
     * calendarCalendarListGet - Returns a calendar from the user's calendar list.
    **/
    calendarCalendarListGet(req: operations.CalendarCalendarListGetRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListGetResponse>;
    /**
     * calendarCalendarListInsert - Inserts an existing calendar into the user's calendar list.
    **/
    calendarCalendarListInsert(req: operations.CalendarCalendarListInsertRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListInsertResponse>;
    /**
     * calendarCalendarListList - Returns the calendars on the user's calendar list.
    **/
    calendarCalendarListList(req: operations.CalendarCalendarListListRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListListResponse>;
    /**
     * calendarCalendarListPatch - Updates an existing calendar on the user's calendar list. This method supports patch semantics.
    **/
    calendarCalendarListPatch(req: operations.CalendarCalendarListPatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListPatchResponse>;
    /**
     * calendarCalendarListUpdate - Updates an existing calendar on the user's calendar list.
    **/
    calendarCalendarListUpdate(req: operations.CalendarCalendarListUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListUpdateResponse>;
    /**
     * calendarCalendarListWatch - Watch for changes to CalendarList resources.
    **/
    calendarCalendarListWatch(req: operations.CalendarCalendarListWatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListWatchResponse>;
}
