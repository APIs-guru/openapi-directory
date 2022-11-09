import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoLocalization } from "./videolocalization";
import { ThumbnailDetails } from "./thumbnaildetails";

export enum VideoSnippetLiveBroadcastContentEnum {
    None = "none"
,    Upcoming = "upcoming"
,    Live = "live"
,    Completed = "completed"
}


// VideoSnippet
/** 
 * Basic details about a video, including title, description, uploader, thumbnails and category.
**/
export class VideoSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @Metadata({ data: "json, name=defaultAudioLanguage" })
  defaultAudioLanguage?: string;

  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=liveBroadcastContent" })
  liveBroadcastContent?: VideoSnippetLiveBroadcastContentEnum;

  @Metadata({ data: "json, name=localized" })
  localized?: VideoLocalization;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
