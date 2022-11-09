import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThumbnailDetails } from "./thumbnaildetails";

export enum ActivitySnippetTypeEnum {
    TypeUnspecified = "typeUnspecified"
,    Upload = "upload"
,    Like = "like"
,    Favorite = "favorite"
,    Comment = "comment"
,    Subscription = "subscription"
,    PlaylistItem = "playlistItem"
,    Recommendation = "recommendation"
,    Bulletin = "bulletin"
,    Social = "social"
,    ChannelItem = "channelItem"
,    PromotedItem = "promotedItem"
}


// ActivitySnippet
/** 
 * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
**/
export class ActivitySnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: ActivitySnippetTypeEnum;
}
