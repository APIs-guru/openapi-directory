import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistsResponsePlaylists } from "./playlistsresponseplaylists";
export declare class PlaylistsResponse extends SpeakeasyBase {
    hasNext?: boolean;
    hasPrevious?: boolean;
    nextPageNumber?: number;
    pageNumber?: number;
    playlists?: PlaylistsResponsePlaylists[];
    previousPageNumber?: number;
    total?: number;
}
