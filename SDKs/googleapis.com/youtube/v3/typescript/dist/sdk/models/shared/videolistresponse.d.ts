import { SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
import { PageInfo } from "./pageinfo";
export declare class VideoListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: Video[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
