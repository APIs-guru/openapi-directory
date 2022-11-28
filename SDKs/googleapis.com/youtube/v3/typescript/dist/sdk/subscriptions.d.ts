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
     * youtubeSubscriptionsDelete - Deletes a resource.
    **/
    youtubeSubscriptionsDelete(req: operations.YoutubeSubscriptionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeSubscriptionsDeleteResponse>;
    /**
     * youtubeSubscriptionsInsert - Inserts a new resource into this collection.
    **/
    youtubeSubscriptionsInsert(req: operations.YoutubeSubscriptionsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeSubscriptionsInsertResponse>;
    /**
     * youtubeSubscriptionsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeSubscriptionsList(req: operations.YoutubeSubscriptionsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeSubscriptionsListResponse>;
}
