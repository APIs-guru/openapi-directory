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
    DeleteMarketingV3MarketingEventsEventsExternalEventIdArchive(req: operations.DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse>;
    GetMarketingV3MarketingEventsEventsSearchDoSearch(req: operations.GetMarketingV3MarketingEventsEventsSearchDoSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketingV3MarketingEventsEventsSearchDoSearchResponse>;
    GetMarketingV3MarketingEventsEventsExternalEventIdGetById(req: operations.GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse>;
    GetMarketingV3MarketingEventsAppIdSettingsGetAll(req: operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse>;
    PatchMarketingV3MarketingEventsEventsExternalEventIdUpdate(req: operations.PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse>;
    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
    **/
    PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreate(req: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateResponse>;
    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params
    **/
    PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreate(req: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse>;
    PostMarketingV3MarketingEventsEventsDeleteArchive(req: operations.PostMarketingV3MarketingEventsEventsDeleteArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsEventsDeleteArchiveResponse>;
    PostMarketingV3MarketingEventsEventsUpsertDoUpsert(req: operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse>;
    PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel(req: operations.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse>;
    PostMarketingV3MarketingEventsEventsExternalEventIdComplete(req: operations.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse>;
    PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById(req: operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse>;
    PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById(req: operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse>;
    PostMarketingV3MarketingEventsEventsCreate(req: operations.PostMarketingV3MarketingEventsEventsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsEventsCreateResponse>;
    PostMarketingV3MarketingEventsAppIdSettingsCreate(req: operations.PostMarketingV3MarketingEventsAppIdSettingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsAppIdSettingsCreateResponse>;
    PutMarketingV3MarketingEventsEventsExternalEventIdReplace(req: operations.PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse>;
}
export {};
