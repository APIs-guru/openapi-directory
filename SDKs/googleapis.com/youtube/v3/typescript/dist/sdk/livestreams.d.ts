import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LiveStreams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeLiveStreamsDelete - Deletes an existing stream for the authenticated user.
    **/
    youtubeLiveStreamsDelete(req: operations.YoutubeLiveStreamsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsDeleteResponse>;
    /**
     * youtubeLiveStreamsInsert - Inserts a new stream for the authenticated user.
    **/
    youtubeLiveStreamsInsert(req: operations.YoutubeLiveStreamsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsInsertResponse>;
    /**
     * youtubeLiveStreamsList - Retrieve the list of streams associated with the given channel. --
    **/
    youtubeLiveStreamsList(req: operations.YoutubeLiveStreamsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsListResponse>;
    /**
     * youtubeLiveStreamsUpdate - Updates an existing stream for the authenticated user.
    **/
    youtubeLiveStreamsUpdate(req: operations.YoutubeLiveStreamsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeLiveStreamsUpdateResponse>;
}
