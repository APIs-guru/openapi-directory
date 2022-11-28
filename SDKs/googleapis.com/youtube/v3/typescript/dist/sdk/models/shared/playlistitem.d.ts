import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistItemContentDetails } from "./playlistitemcontentdetails";
import { PlaylistItemSnippet } from "./playlistitemsnippet";
import { PlaylistItemStatus } from "./playlistitemstatus";
/**
 * A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.
**/
export declare class PlaylistItem extends SpeakeasyBase {
    contentDetails?: PlaylistItemContentDetails;
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: PlaylistItemSnippet;
    status?: PlaylistItemStatus;
}
