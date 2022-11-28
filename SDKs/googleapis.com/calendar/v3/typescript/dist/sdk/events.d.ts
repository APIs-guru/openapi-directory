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
     * calendarEventsDelete - Deletes an event.
    **/
    calendarEventsDelete(req: operations.CalendarEventsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsDeleteResponse>;
    /**
     * calendarEventsGet - Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
    **/
    calendarEventsGet(req: operations.CalendarEventsGetRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsGetResponse>;
    /**
     * calendarEventsImport - Imports an event. This operation is used to add a private copy of an existing event to a calendar.
    **/
    calendarEventsImport(req: operations.CalendarEventsImportRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsImportResponse>;
    /**
     * calendarEventsInsert - Creates an event.
    **/
    calendarEventsInsert(req: operations.CalendarEventsInsertRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsInsertResponse>;
    /**
     * calendarEventsInstances - Returns instances of the specified recurring event.
    **/
    calendarEventsInstances(req: operations.CalendarEventsInstancesRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsInstancesResponse>;
    /**
     * calendarEventsList - Returns events on the specified calendar.
    **/
    calendarEventsList(req: operations.CalendarEventsListRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsListResponse>;
    /**
     * calendarEventsMove - Moves an event to another calendar, i.e. changes an event's organizer.
    **/
    calendarEventsMove(req: operations.CalendarEventsMoveRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsMoveResponse>;
    /**
     * calendarEventsPatch - Updates an event. This method supports patch semantics.
    **/
    calendarEventsPatch(req: operations.CalendarEventsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsPatchResponse>;
    /**
     * calendarEventsQuickAdd - Creates an event based on a simple text string.
    **/
    calendarEventsQuickAdd(req: operations.CalendarEventsQuickAddRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsQuickAddResponse>;
    /**
     * calendarEventsUpdate - Updates an event.
    **/
    calendarEventsUpdate(req: operations.CalendarEventsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsUpdateResponse>;
    /**
     * calendarEventsWatch - Watch for changes to Events resources.
    **/
    calendarEventsWatch(req: operations.CalendarEventsWatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarEventsWatchResponse>;
}
