import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cursor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pubsubliteCursorProjectsLocationsSubscriptionsCommitCursor - Updates the committed cursor.
    **/
    pubsubliteCursorProjectsLocationsSubscriptionsCommitCursor(req: operations.PubsubliteCursorProjectsLocationsSubscriptionsCommitCursorRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteCursorProjectsLocationsSubscriptionsCommitCursorResponse>;
    /**
     * pubsubliteCursorProjectsLocationsSubscriptionsCursorsList - Returns all committed cursor information for a subscription.
    **/
    pubsubliteCursorProjectsLocationsSubscriptionsCursorsList(req: operations.PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse>;
}
