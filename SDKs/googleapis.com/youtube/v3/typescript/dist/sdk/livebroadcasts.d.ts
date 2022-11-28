import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LiveBroadcasts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeLiveBroadcastsBind - Bind a broadcast to a stream.
    **/
    youtubeLiveBroadcastsBind(req: operations.YoutubeLiveBroadcastsBindRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsBindResponse>;
    /**
     * youtubeLiveBroadcastsDelete - Delete a given broadcast.
    **/
    youtubeLiveBroadcastsDelete(req: operations.YoutubeLiveBroadcastsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsDeleteResponse>;
    /**
     * youtubeLiveBroadcastsInsert - Inserts a new stream for the authenticated user.
    **/
    youtubeLiveBroadcastsInsert(req: operations.YoutubeLiveBroadcastsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsInsertResponse>;
    /**
     * youtubeLiveBroadcastsInsertCuepoint - Insert cuepoints in a broadcast
    **/
    youtubeLiveBroadcastsInsertCuepoint(req: operations.YoutubeLiveBroadcastsInsertCuepointRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsInsertCuepointResponse>;
    /**
     * youtubeLiveBroadcastsList - Retrieve the list of broadcasts associated with the given channel.
    **/
    youtubeLiveBroadcastsList(req: operations.YoutubeLiveBroadcastsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsListResponse>;
    /**
     * youtubeLiveBroadcastsTransition - Transition a broadcast to a given status.
    **/
    youtubeLiveBroadcastsTransition(req: operations.YoutubeLiveBroadcastsTransitionRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsTransitionResponse>;
    /**
     * youtubeLiveBroadcastsUpdate - Updates an existing broadcast for the authenticated user.
    **/
    youtubeLiveBroadcastsUpdate(req: operations.YoutubeLiveBroadcastsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveBroadcastsUpdateResponse>;
}
