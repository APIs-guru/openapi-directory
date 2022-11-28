import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
import { PageInfo } from "./pageinfo";
export declare class SubscriptionListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Subscription[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
