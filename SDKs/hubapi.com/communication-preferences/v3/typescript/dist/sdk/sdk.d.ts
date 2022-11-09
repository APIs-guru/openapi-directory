import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Get a list of all subscription definitions for the portal
    **/
    GetCommunicationPreferencesV3DefinitionsGetPage(req: operations.GetCommunicationPreferencesV3DefinitionsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationPreferencesV3DefinitionsGetPageResponse>;
    /**
     * Returns a list of subscriptions and their status for a given contact.
    **/
    GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatus(req: operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse>;
    /**
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
    **/
    PostCommunicationPreferencesV3SubscribeSubscribe(req: operations.PostCommunicationPreferencesV3SubscribeSubscribeRequest, config?: AxiosRequestConfig): Promise<operations.PostCommunicationPreferencesV3SubscribeSubscribeResponse>;
    /**
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
    **/
    PostCommunicationPreferencesV3UnsubscribeUnsubscribe(req: operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse>;
}
export {};
