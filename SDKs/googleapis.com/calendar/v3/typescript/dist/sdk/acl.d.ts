import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Acl {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * calendarAclDelete - Deletes an access control rule.
    **/
    calendarAclDelete(req: operations.CalendarAclDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CalendarAclDeleteResponse>;
    /**
     * calendarAclGet - Returns an access control rule.
    **/
    calendarAclGet(req: operations.CalendarAclGetRequest, config?: AxiosRequestConfig): Promise<operations.CalendarAclGetResponse>;
    /**
     * calendarAclInsert - Creates an access control rule.
    **/
    calendarAclInsert(req: operations.CalendarAclInsertRequest, config?: AxiosRequestConfig): Promise<operations.CalendarAclInsertResponse>;
    /**
     * calendarAclList - Returns the rules in the access control list for the calendar.
    **/
    calendarAclList(req: operations.CalendarAclListRequest, config?: AxiosRequestConfig): Promise<operations.CalendarAclListResponse>;
    /**
     * calendarAclPatch - Updates an access control rule. This method supports patch semantics.
    **/
    calendarAclPatch(req: operations.CalendarAclPatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarAclPatchResponse>;
    /**
     * calendarAclUpdate - Updates an access control rule.
    **/
    calendarAclUpdate(req: operations.CalendarAclUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CalendarAclUpdateResponse>;
    /**
     * calendarAclWatch - Watch for changes to ACL resources.
    **/
    calendarAclWatch(req: operations.CalendarAclWatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarAclWatchResponse>;
}
