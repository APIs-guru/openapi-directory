import { SpeakeasyBase } from "../../../internal/utils";
import { PlaylistLocalization } from "./playlistlocalization";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a playlist, including title, description and thumbnails.
**/
export declare class PlaylistSnippet extends SpeakeasyBase {
    channelId?: string;
    channelTitle?: string;
    defaultLanguage?: string;
    description?: string;
    localized?: PlaylistLocalization;
    publishedAt?: Date;
    tags?: string[];
    thumbnailVideoId?: string;
    thumbnails?: ThumbnailDetails;
    title?: string;
}
