import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * calendarSettingsGet - Returns a single user setting.
    **/
    calendarSettingsGet(req: operations.CalendarSettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.CalendarSettingsGetResponse>;
    /**
     * calendarSettingsList - Returns all user settings for the authenticated user.
    **/
    calendarSettingsList(req: operations.CalendarSettingsListRequest, config?: AxiosRequestConfig): Promise<operations.CalendarSettingsListResponse>;
    /**
     * calendarSettingsWatch - Watch for changes to Settings resources.
    **/
    calendarSettingsWatch(req: operations.CalendarSettingsWatchRequest, config?: AxiosRequestConfig): Promise<operations.CalendarSettingsWatchResponse>;
}
