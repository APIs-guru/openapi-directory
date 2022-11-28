import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";


export enum ActivitySnippetTypeEnum {
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


// ActivitySnippet
/** 
 * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
**/
export class ActivitySnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ActivitySnippetTypeEnum;
}
