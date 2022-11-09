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
    DeleteWebhooksV3AppIdSettingsClear(req: operations.DeleteWebhooksV3AppIdSettingsClearRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksV3AppIdSettingsClearResponse>;
    DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive(req: operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse>;
    GetWebhooksV3AppIdSettingsGetAll(req: operations.GetWebhooksV3AppIdSettingsGetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSettingsGetAllResponse>;
    GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetById(req: operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse>;
    GetWebhooksV3AppIdSubscriptionsGetAll(req: operations.GetWebhooksV3AppIdSubscriptionsGetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSubscriptionsGetAllResponse>;
    PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate(req: operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse>;
    PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch(req: operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse>;
    PostWebhooksV3AppIdSubscriptionsCreate(req: operations.PostWebhooksV3AppIdSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksV3AppIdSubscriptionsCreateResponse>;
    PutWebhooksV3AppIdSettingsConfigure(req: operations.PutWebhooksV3AppIdSettingsConfigureRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksV3AppIdSettingsConfigureResponse>;
}
export {};
