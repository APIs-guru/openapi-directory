import { SpeakeasyBase } from "../../../internal/utils";
import { VideoLocalization } from "./videolocalization";
import { ThumbnailDetails } from "./thumbnaildetails";
export declare enum VideoSnippetLiveBroadcastContentEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}
/**
 * Basic details about a video, including title, description, uploader, thumbnails and category.
**/
export declare class VideoSnippet extends SpeakeasyBase {
    categoryId?: string;
    channelId?: string;
    channelTitle?: string;
    defaultAudioLanguage?: string;
    defaultLanguage?: string;
    description?: string;
    liveBroadcastContent?: VideoSnippetLiveBroadcastContentEnum;
    localized?: VideoLocalization;
    publishedAt?: Date;
    tags?: string[];
    thumbnails?: ThumbnailDetails;
    title?: string;
}
