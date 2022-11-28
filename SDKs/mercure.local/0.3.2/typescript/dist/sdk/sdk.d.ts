import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://mercure.local"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getWellKnownMercure - Subscribe to updates
     *
     * https://mercure.rocks/spec#subscription - Subscription specification
    **/
    getWellKnownMercure(req: operations.GetWellKnownMercureRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureResponse>;
    /**
     * getWellKnownMercureSubscriptions - Active subscriptions
     *
     * https://mercure.rocks/spec#subscription-api - Subscription API
    **/
    getWellKnownMercureSubscriptions(config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsResponse>;
    /**
     * getWellKnownMercureSubscriptionsTopic - Active subscriptions for the given topic
     *
     * https://mercure.rocks/spec#subscription-api - Subscription API
    **/
    getWellKnownMercureSubscriptionsTopic(req: operations.GetWellKnownMercureSubscriptionsTopicRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsTopicResponse>;
    /**
     * getWellKnownMercureSubscriptionsTopicSubscriber - Active subscription for the given topic and subscriber
     *
     * https://mercure.rocks/spec#active-subscriptions - Subscription API
    **/
    getWellKnownMercureSubscriptionsTopicSubscriber(req: operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse>;
    /**
     * postWellKnownMercure - Publish an update
     *
     * https://mercure.rocks/spec#publication - Publishing specification
    **/
    postWellKnownMercure(req: operations.PostWellKnownMercureRequest, config?: AxiosRequestConfig): Promise<operations.PostWellKnownMercureResponse>;
}
export {};
