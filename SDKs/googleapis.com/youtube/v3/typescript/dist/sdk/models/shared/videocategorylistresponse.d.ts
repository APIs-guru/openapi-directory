import { SpeakeasyBase } from "../../../internal/utils";
import { VideoCategory } from "./videocategory";
import { PageInfo } from "./pageinfo";
export declare class VideoCategoryListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: VideoCategory[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
