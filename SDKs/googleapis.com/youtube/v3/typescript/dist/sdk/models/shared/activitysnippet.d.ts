import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
export declare enum ActivitySnippetTypeEnum {
    TypeUnspecified = "typeUnspecified",
    Upload = "upload",
    Like = "like",
    Favorite = "favorite",
    Comment = "comment",
    Subscription = "subscription",
    PlaylistItem = "playlistItem",
    Recommendation = "recommendation",
    Bulletin = "bulletin",
    Social = "social",
    ChannelItem = "channelItem",
    PromotedItem = "promotedItem"
}
/**
 * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
**/
export declare class ActivitySnippet extends SpeakeasyBase {
    channelId?: string;
    channelTitle?: string;
    description?: string;
    groupId?: string;
    publishedAt?: Date;
    thumbnails?: ThumbnailDetails;
    title?: string;
    type?: ActivitySnippetTypeEnum;
}
