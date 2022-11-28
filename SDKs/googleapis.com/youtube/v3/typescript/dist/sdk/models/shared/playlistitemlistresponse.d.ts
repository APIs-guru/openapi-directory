import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistItem } from "./playlistitem";
import { PageInfo } from "./pageinfo";
export declare class PlaylistItemListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: PlaylistItem[];
    kind?: string;
    nextPageToken?: string;
    pageInfo?: PageInfo;
    prevPageToken?: string;
    tokenPagination?: Map<string, any>;
    visitorId?: string;
}
