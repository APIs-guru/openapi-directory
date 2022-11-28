import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { PageInfo } from "./pageinfo";
export declare class CommentListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Comment[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
