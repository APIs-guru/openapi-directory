import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Feed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * retrieveNeoFeedToday - Find Near Earth Objects for today
     *
     * Get a list of Near Earth Objects for today
    **/
    retrieveNeoFeedToday(req: operations.RetrieveNeoFeedTodayRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveNeoFeedTodayResponse>;
    /**
     * retrieveNearEarthObjectFeed - Find Near Earth Objects by date
     *
     * Get a list of Near Earth Objects within a date range, The max range in one query is 7 days
    **/
    retrieveNearEarthObjectFeed(req: operations.RetrieveNearEarthObjectFeedRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveNearEarthObjectFeedResponse>;
}
