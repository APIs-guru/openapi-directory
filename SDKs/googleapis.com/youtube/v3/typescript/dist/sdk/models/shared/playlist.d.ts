import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistContentDetails } from "./playlistcontentdetails";
import { PlaylistLocalization } from "./playlistlocalization";
import { PlaylistPlayer } from "./playlistplayer";
import { PlaylistSnippet } from "./playlistsnippet";
import { PlaylistStatus } from "./playliststatus";
/**
 * A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.
**/
export declare class Playlist extends SpeakeasyBase {
    contentDetails?: PlaylistContentDetails;
    etag?: string;
    id?: string;
    kind?: string;
    localizations?: Map<string, PlaylistLocalization>;
    player?: PlaylistPlayer;
    snippet?: PlaylistSnippet;
    status?: PlaylistStatus;
}
