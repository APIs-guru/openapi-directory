import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResult } from "./searchresult";
import { PageInfo } from "./pageinfo";
export declare class SearchListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: SearchResult[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    regionCode?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
