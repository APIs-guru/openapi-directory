import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";
/**
 * A playlist
**/
export declare class PlaylistsResponsePlaylists extends SpeakeasyBase {
    description?: string;
    episodeCount?: number;
    id?: string;
    image?: string;
    lastTimestampMs?: number;
    listennotesUrl?: string;
    name?: string;
    podcastCount?: number;
    thumbnail?: string;
    visibility?: PlaylistVisibilityFieldEnum;
}
