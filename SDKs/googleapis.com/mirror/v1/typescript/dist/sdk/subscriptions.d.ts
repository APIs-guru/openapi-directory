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
     * mirrorSubscriptionsDelete - Deletes a subscription.
    **/
    mirrorSubscriptionsDelete(req: operations.MirrorSubscriptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsDeleteResponse>;
    /**
     * mirrorSubscriptionsInsert - Creates a new subscription.
    **/
    mirrorSubscriptionsInsert(req: operations.MirrorSubscriptionsInsertRequest, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsInsertResponse>;
    /**
     * mirrorSubscriptionsList - Retrieves a list of subscriptions for the authenticated user and service.
    **/
    mirrorSubscriptionsList(req: operations.MirrorSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsListResponse>;
    /**
     * mirrorSubscriptionsUpdate - Updates an existing subscription in place.
    **/
    mirrorSubscriptionsUpdate(req: operations.MirrorSubscriptionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsUpdateResponse>;
}
