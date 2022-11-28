import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetPlaylistByIdSortEnum {
    RecentAddedFirst = "recent_added_first",
    OldestAddedFirst = "oldest_added_first",
    RecentPublishedFirst = "recent_published_first",
    OldestPublishedFirst = "oldest_published_first"
}
export declare enum GetPlaylistByIdTypeEnum {
    EpisodeList = "episode_list",
    PodcastList = "podcast_list"
}
export declare class GetPlaylistByIdQueryParams extends SpeakeasyBase {
    lastTimestampMs?: number;
    sort?: GetPlaylistByIdSortEnum;
    type?: GetPlaylistByIdTypeEnum;
}
export declare class GetPlaylistByIdHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetPlaylistByIdRequest extends SpeakeasyBase {
    pathParams: GetPlaylistByIdPathParams;
    queryParams: GetPlaylistByIdQueryParams;
    headers: GetPlaylistByIdHeaders;
}
export declare class GetPlaylistByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    playlistResponse?: shared.PlaylistResponse;
    statusCode: number;
}
