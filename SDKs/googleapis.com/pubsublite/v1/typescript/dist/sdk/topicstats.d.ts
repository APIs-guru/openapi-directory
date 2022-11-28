import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TopicStats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursor - Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
    **/
    pubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursor(req: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse>;
    /**
     * pubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStats - Compute statistics about a range of messages in a given topic and partition.
    **/
    pubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStats(req: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse>;
    /**
     * pubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursor - Compute the corresponding cursor for a publish or event time in a topic partition.
    **/
    pubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursor(req: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest, config?: AxiosRequestConfig): Promise<operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse>;
}
