import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Configuration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeAccountSettings - Change Account Settings
     *
     * Update the default webhook URLs associated with your account:
     *   * Callback URL for incoming SMS messages
     *   * Callback URL for delivery receipts
     *
     * Note that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.
    **/
    changeAccountSettings(req: operations.ChangeAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ChangeAccountSettingsResponse>;
    /**
     * registerSender - Register an email sender
     *
     * Register an email sender with an API Key for using email with Verify V2.
    **/
    registerSender(req: operations.RegisterSenderRequest, config?: AxiosRequestConfig): Promise<operations.RegisterSenderResponse>;
}
