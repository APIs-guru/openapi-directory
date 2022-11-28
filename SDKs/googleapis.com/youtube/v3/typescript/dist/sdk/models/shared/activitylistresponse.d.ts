import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { PageInfo } from "./pageinfo";
export declare class ActivityListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Activity[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
