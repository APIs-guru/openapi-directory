import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pubsubnotificationsettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentPubsubnotificationsettingsGet - Retrieves a Merchant Center account's pubsub notification settings.
    **/
    contentPubsubnotificationsettingsGet(req: operations.ContentPubsubnotificationsettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentPubsubnotificationsettingsGetResponse>;
    /**
     * contentPubsubnotificationsettingsUpdate - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.
    **/
    contentPubsubnotificationsettingsUpdate(req: operations.ContentPubsubnotificationsettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentPubsubnotificationsettingsUpdateResponse>;
}
