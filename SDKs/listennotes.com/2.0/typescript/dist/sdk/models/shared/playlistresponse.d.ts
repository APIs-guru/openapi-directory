import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistItem } from "./playlistitem";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";
export declare enum PlaylistResponseTypeEnum {
    EpisodeList = "episode_list",
    PodcastList = "podcast_list"
}
export declare class PlaylistResponse extends SpeakeasyBase {
    description?: string;
    id?: string;
    image?: string;
    items?: PlaylistItem[];
    lastTimestampMs?: number;
    listennotesUrl?: string;
    name?: string;
    thumbnail?: string;
    total?: number;
    type?: PlaylistResponseTypeEnum;
    visibility?: PlaylistVisibilityFieldEnum;
}
