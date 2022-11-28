import { SpeakeasyBase } from "../../../internal/utils";
import { LiveBroadcast } from "./livebroadcast";
import { PageInfo } from "./pageinfo";
export declare class LiveBroadcastListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: LiveBroadcast[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
