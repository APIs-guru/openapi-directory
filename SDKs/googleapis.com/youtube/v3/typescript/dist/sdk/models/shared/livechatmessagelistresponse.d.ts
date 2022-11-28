import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatMessage } from "./livechatmessage";
import { PageInfo } from "./pageinfo";
export declare class LiveChatMessageListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: LiveChatMessage[];
    kind?: string;
    nextPageToken?: string;
    offlineAt?: Date;
    pageInfo?: PageInfo;
    pollingIntervalMillis?: number;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
