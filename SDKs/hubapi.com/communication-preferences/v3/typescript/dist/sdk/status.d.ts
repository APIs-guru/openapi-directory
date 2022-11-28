import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Status {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus - Get subscription statuses for a contact
     *
     * Returns a list of subscriptions and their status for a given contact.
    **/
    getCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus(req: operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse>;
    /**
     * postCommunicationPreferencesV3SubscribeSubscribe - Subscribe a contact
     *
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
    **/
    postCommunicationPreferencesV3SubscribeSubscribe(req: operations.PostCommunicationPreferencesV3SubscribeSubscribeRequest, config?: AxiosRequestConfig): Promise<operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse>;
    /**
     * postCommunicationPreferencesV3UnsubscribeUnsubscribe - Unsubscribe a contact
     *
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
    **/
    postCommunicationPreferencesV3UnsubscribeUnsubscribe(req: operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse>;
}
