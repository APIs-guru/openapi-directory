import { SpeakeasyBase } from "../../../internal/utils";
import { LiveBroadcastContentDetails } from "./livebroadcastcontentdetails";
import { LiveBroadcastSnippet } from "./livebroadcastsnippet";
import { LiveBroadcastStatistics } from "./livebroadcaststatistics";
import { LiveBroadcastStatus } from "./livebroadcaststatus";
/**
 * A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
**/
export declare class LiveBroadcast extends SpeakeasyBase {
    contentDetails?: LiveBroadcastContentDetails;
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: LiveBroadcastSnippet;
    statistics?: LiveBroadcastStatistics;
    status?: LiveBroadcastStatus;
}
