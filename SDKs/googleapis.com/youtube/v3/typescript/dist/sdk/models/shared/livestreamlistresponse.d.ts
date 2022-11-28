import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStream } from "./livestream";
import { PageInfo } from "./pageinfo";
export declare class LiveStreamListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: LiveStream[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
