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
    PubsubSubscriptionsAcknowledge(req: operations.PubsubSubscriptionsAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsAcknowledgeResponse>;
    PubsubSubscriptionsCreate(req: operations.PubsubSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsCreateResponse>;
    PubsubSubscriptionsDelete(req: operations.PubsubSubscriptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsDeleteResponse>;
    PubsubSubscriptionsGet(req: operations.PubsubSubscriptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsGetResponse>;
    PubsubSubscriptionsList(req: operations.PubsubSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsListResponse>;
    PubsubSubscriptionsModifyAckDeadline(req: operations.PubsubSubscriptionsModifyAckDeadlineRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsModifyAckDeadlineResponse>;
    PubsubSubscriptionsModifyPushConfig(req: operations.PubsubSubscriptionsModifyPushConfigRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsModifyPushConfigResponse>;
    PubsubSubscriptionsPull(req: operations.PubsubSubscriptionsPullRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsPullResponse>;
    PubsubSubscriptionsPullBatch(req: operations.PubsubSubscriptionsPullBatchRequest, config?: AxiosRequestConfig): Promise<operations.PubsubSubscriptionsPullBatchResponse>;
    PubsubTopicsCreate(req: operations.PubsubTopicsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsCreateResponse>;
    PubsubTopicsDelete(req: operations.PubsubTopicsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsDeleteResponse>;
    PubsubTopicsGet(req: operations.PubsubTopicsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsGetResponse>;
    PubsubTopicsList(req: operations.PubsubTopicsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsListResponse>;
    PubsubTopicsPublish(req: operations.PubsubTopicsPublishRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsPublishResponse>;
    PubsubTopicsPublishBatch(req: operations.PubsubTopicsPublishBatchRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsPublishBatchResponse>;
}
export {};
