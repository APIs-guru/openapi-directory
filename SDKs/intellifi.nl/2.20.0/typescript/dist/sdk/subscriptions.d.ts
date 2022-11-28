import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addSubscription - Create subscription
    **/
    addSubscription(req: operations.AddSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.AddSubscriptionResponse>;
    /**
     * deleteSubscription - Delete subscription
    **/
    deleteSubscription(req: operations.DeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionResponse>;
    /**
     * getEventsForSubscriptionById - Get subscription events
    **/
    getEventsForSubscriptionById(req: operations.GetEventsForSubscriptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsForSubscriptionByIdResponse>;
    /**
     * getSubscriptionById - Get subscription
    **/
    getSubscriptionById(req: operations.GetSubscriptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionByIdResponse>;
    /**
     * getSubscriptions - Get all subscriptions
    **/
    getSubscriptions(req: operations.GetSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsResponse>;
    /**
     * updateSubscription - Update existing subscription
    **/
    updateSubscription(req: operations.UpdateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
}
