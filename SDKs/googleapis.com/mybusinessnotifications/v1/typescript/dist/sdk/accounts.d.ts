import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessnotificationsAccountsGetNotificationSetting - Returns the pubsub notification settings for the account.
    **/
    mybusinessnotificationsAccountsGetNotificationSetting(req: operations.MybusinessnotificationsAccountsGetNotificationSettingRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessnotificationsAccountsGetNotificationSettingResponse>;
    /**
     * mybusinessnotificationsAccountsUpdateNotificationSetting - Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types
    **/
    mybusinessnotificationsAccountsUpdateNotificationSetting(req: operations.MybusinessnotificationsAccountsUpdateNotificationSettingRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessnotificationsAccountsUpdateNotificationSettingResponse>;
}
