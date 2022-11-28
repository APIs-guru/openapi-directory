import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { PageInfo } from "./pageinfo";
export declare class ChannelListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Channel[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
