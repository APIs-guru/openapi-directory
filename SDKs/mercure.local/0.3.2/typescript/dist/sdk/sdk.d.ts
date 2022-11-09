import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * https://mercure.rocks/spec#subscription - Subscription specification
    **/
    GetWellKnownMercure(req: operations.GetWellKnownMercureRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureResponse>;
    /**
     * https://mercure.rocks/spec#subscription-api - Subscription API
    **/
    GetWellKnownMercureSubscriptions(config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsResponse>;
    /**
     * https://mercure.rocks/spec#subscription-api - Subscription API
    **/
    GetWellKnownMercureSubscriptionsTopic(req: operations.GetWellKnownMercureSubscriptionsTopicRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsTopicResponse>;
    /**
     * https://mercure.rocks/spec#active-subscriptions - Subscription API
    **/
    GetWellKnownMercureSubscriptionsTopicSubscriber(req: operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse>;
    /**
     * https://mercure.rocks/spec#publication - Publishing specification
    **/
    PostWellKnownMercure(req: operations.PostWellKnownMercureRequest, config?: AxiosRequestConfig): Promise<operations.PostWellKnownMercureResponse>;
}
export {};
