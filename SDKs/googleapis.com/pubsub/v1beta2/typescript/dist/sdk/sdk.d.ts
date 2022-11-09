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
    PubsubProjectsSubscriptionsAcknowledge(req: operations.PubsubProjectsSubscriptionsAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsAcknowledgeResponse>;
    PubsubProjectsSubscriptionsDelete(req: operations.PubsubProjectsSubscriptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsDeleteResponse>;
    PubsubProjectsSubscriptionsGet(req: operations.PubsubProjectsSubscriptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsGetResponse>;
    PubsubProjectsSubscriptionsList(req: operations.PubsubProjectsSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsListResponse>;
    PubsubProjectsSubscriptionsModifyAckDeadline(req: operations.PubsubProjectsSubscriptionsModifyAckDeadlineRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsModifyAckDeadlineResponse>;
    PubsubProjectsSubscriptionsModifyPushConfig(req: operations.PubsubProjectsSubscriptionsModifyPushConfigRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsModifyPushConfigResponse>;
    PubsubProjectsSubscriptionsPull(req: operations.PubsubProjectsSubscriptionsPullRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsSubscriptionsPullResponse>;
    PubsubProjectsTopicsCreate(req: operations.PubsubProjectsTopicsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsCreateResponse>;
    PubsubProjectsTopicsDelete(req: operations.PubsubProjectsTopicsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsDeleteResponse>;
    PubsubProjectsTopicsGet(req: operations.PubsubProjectsTopicsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsGetResponse>;
    PubsubProjectsTopicsGetIamPolicy(req: operations.PubsubProjectsTopicsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsGetIamPolicyResponse>;
    PubsubProjectsTopicsList(req: operations.PubsubProjectsTopicsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsListResponse>;
    PubsubProjectsTopicsPublish(req: operations.PubsubProjectsTopicsPublishRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsPublishResponse>;
    PubsubProjectsTopicsSetIamPolicy(req: operations.PubsubProjectsTopicsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsSetIamPolicyResponse>;
    PubsubProjectsTopicsSubscriptionsList(req: operations.PubsubProjectsTopicsSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsSubscriptionsListResponse>;
    PubsubProjectsTopicsTestIamPermissions(req: operations.PubsubProjectsTopicsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PubsubProjectsTopicsTestIamPermissionsResponse>;
}
export {};
