import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
**/
export declare class PlaylistItemSnippet extends SpeakeasyBase {
    channelId?: string;
    channelTitle?: string;
    description?: string;
    playlistId?: string;
    position?: number;
    publishedAt?: Date;
    resourceId?: ResourceId;
    thumbnails?: ThumbnailDetails;
    title?: string;
    videoOwnerChannelId?: string;
    videoOwnerChannelTitle?: string;
}
