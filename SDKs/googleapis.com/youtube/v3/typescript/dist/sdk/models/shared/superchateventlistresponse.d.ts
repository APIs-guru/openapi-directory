import { SpeakeasyBase } from "../../../internal/utils";
import { SuperChatEvent } from "./superchatevent";
import { PageInfo } from "./pageinfo";
export declare class SuperChatEventListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: SuperChatEvent[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
