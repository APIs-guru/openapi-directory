import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Calendars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * calendarCalendarsClear - Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
    **/
    calendarCalendarsClear(req: operations.CalendarCalendarsClearRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsClearResponse>;
    /**
     * calendarCalendarsDelete - Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
    **/
    calendarCalendarsDelete(req: operations.CalendarCalendarsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsDeleteResponse>;
    /**
     * calendarCalendarsGet - Returns metadata for a calendar.
    **/
    calendarCalendarsGet(req: operations.CalendarCalendarsGetRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsGetResponse>;
    /**
     * calendarCalendarsInsert - Creates a secondary calendar.
    **/
    calendarCalendarsInsert(req: operations.CalendarCalendarsInsertRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsInsertResponse>;
    /**
     * calendarCalendarsPatch - Updates metadata for a calendar. This method supports patch semantics.
    **/
    calendarCalendarsPatch(req: operations.CalendarCalendarsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsPatchResponse>;
    /**
     * calendarCalendarsUpdate - Updates metadata for a calendar.
    **/
    calendarCalendarsUpdate(req: operations.CalendarCalendarsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsUpdateResponse>;
}
