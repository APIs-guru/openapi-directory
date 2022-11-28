import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Myconfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksMyconfigGetUserSettings - Gets the current settings for the user.
    **/
    booksMyconfigGetUserSettings(req: operations.BooksMyconfigGetUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigGetUserSettingsResponse>;
    /**
     * booksMyconfigReleaseDownloadAccess - Release downloaded content access restriction.
    **/
    booksMyconfigReleaseDownloadAccess(req: operations.BooksMyconfigReleaseDownloadAccessRequest, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigReleaseDownloadAccessResponse>;
    /**
     * booksMyconfigRequestAccess - Request concurrent and download access restrictions.
    **/
    booksMyconfigRequestAccess(req: operations.BooksMyconfigRequestAccessRequest, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigRequestAccessResponse>;
    /**
     * booksMyconfigSyncVolumeLicenses - Request downloaded content access for specified volumes on the My eBooks shelf.
    **/
    booksMyconfigSyncVolumeLicenses(req: operations.BooksMyconfigSyncVolumeLicensesRequest, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigSyncVolumeLicensesResponse>;
    /**
     * booksMyconfigUpdateUserSettings - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
    **/
    booksMyconfigUpdateUserSettings(req: operations.BooksMyconfigUpdateUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigUpdateUserSettingsResponse>;
}
