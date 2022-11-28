import { SpeakeasyBase } from "../../../internal/utils";
import { CommentThread } from "./commentthread";
import { PageInfo } from "./pageinfo";
export declare class CommentThreadListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: CommentThread[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
