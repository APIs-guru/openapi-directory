import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Videos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeVideosDelete - Deletes a resource.
    **/
    youtubeVideosDelete(req: operations.YoutubeVideosDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosDeleteResponse>;
    /**
     * youtubeVideosGetRating - Retrieves the ratings that the authorized user gave to a list of specified videos.
    **/
    youtubeVideosGetRating(req: operations.YoutubeVideosGetRatingRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosGetRatingResponse>;
    /**
     * youtubeVideosInsert - Inserts a new resource into this collection.
    **/
    youtubeVideosInsert(req: operations.YoutubeVideosInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosInsertResponse>;
    /**
     * youtubeVideosList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeVideosList(req: operations.YoutubeVideosListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosListResponse>;
    /**
     * youtubeVideosRate - Adds a like or dislike rating to a video or removes a rating from a video.
    **/
    youtubeVideosRate(req: operations.YoutubeVideosRateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosRateResponse>;
    /**
     * youtubeVideosReportAbuse - Report abuse for a video.
    **/
    youtubeVideosReportAbuse(req: operations.YoutubeVideosReportAbuseRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosReportAbuseResponse>;
    /**
     * youtubeVideosUpdate - Updates an existing resource.
    **/
    youtubeVideosUpdate(req: operations.YoutubeVideosUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosUpdateResponse>;
}
