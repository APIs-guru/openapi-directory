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
     * postV05SubscriptionRequestsHiuNotify - Notification for subscription grant/deny/revoke
     *
     * This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed.
     *
    **/
    postV05SubscriptionRequestsHiuNotify(req: operations.PostV05SubscriptionRequestsHiuNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuNotifyResponse>;
    /**
     * postV05SubscriptionRequestsHiuOnInit - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
     *
     * This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription.
     *
    **/
    postV05SubscriptionRequestsHiuOnInit(req: operations.PostV05SubscriptionRequestsHiuOnInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuOnInitResponse>;
    /**
     * postV05SubscriptionsHiuNotify - Notification to HIU on basis of a granted subscription
     *
     * This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context.
     * 1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient.
     * 2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context
     *
    **/
    postV05SubscriptionsHiuNotify(req: operations.PostV05SubscriptionsHiuNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuNotifyResponse>;
}
