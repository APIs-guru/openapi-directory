import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPlaylistsSortEnum {
    RecentAddedFirst = "recent_added_first",
    OldestAddedFirst = "oldest_added_first",
    NameAToZ = "name_a_to_z",
    NameZToA = "name_z_to_a"
}
export declare class GetPlaylistsQueryParams extends SpeakeasyBase {
    page?: number;
    sort?: GetPlaylistsSortEnum;
}
export declare class GetPlaylistsHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetPlaylistsRequest extends SpeakeasyBase {
    queryParams: GetPlaylistsQueryParams;
    headers: GetPlaylistsHeaders;
}
export declare class GetPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    playlistsResponse?: shared.PlaylistsResponse;
    statusCode: number;
}
