import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageNotificationsDelete - Permanently deletes a notification subscription.
    **/
    storageNotificationsDelete(req: operations.StorageNotificationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsDeleteResponse>;
    /**
     * storageNotificationsGet - View a notification configuration.
    **/
    storageNotificationsGet(req: operations.StorageNotificationsGetRequest, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsGetResponse>;
    /**
     * storageNotificationsInsert - Creates a notification subscription for a given bucket.
    **/
    storageNotificationsInsert(req: operations.StorageNotificationsInsertRequest, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsInsertResponse>;
    /**
     * storageNotificationsList - Retrieves a list of notification subscriptions for a given bucket.
    **/
    storageNotificationsList(req: operations.StorageNotificationsListRequest, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsListResponse>;
}
