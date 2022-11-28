import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
import { PageInfo } from "./pageinfo";
export declare class MemberListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Member[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
