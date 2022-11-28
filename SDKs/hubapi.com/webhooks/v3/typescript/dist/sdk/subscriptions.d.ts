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
    deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive(req: operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse>;
    getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById(req: operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse>;
    getWebhooksV3AppIdSubscriptionsGetAll(req: operations.GetWebhooksV3AppIdSubscriptionsGetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSubscriptionsGetAllResponse>;
    patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate(req: operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse>;
    postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch(req: operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse>;
    postWebhooksV3AppIdSubscriptionsCreate(req: operations.PostWebhooksV3AppIdSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksV3AppIdSubscriptionsCreateResponse>;
}
