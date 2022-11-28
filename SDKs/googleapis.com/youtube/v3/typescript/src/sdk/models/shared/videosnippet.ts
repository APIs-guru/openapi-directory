import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoLocalization } from "./videolocalization";
import { ThumbnailDetails } from "./thumbnaildetails";


export enum VideoSnippetLiveBroadcastContentEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}


// VideoSnippet
/** 
 * Basic details about a video, including title, description, uploader, thumbnails and category.
**/
export class VideoSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultAudioLanguage" })
  defaultAudioLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=liveBroadcastContent" })
  liveBroadcastContent?: VideoSnippetLiveBroadcastContentEnum;

  @SpeakeasyMetadata({ data: "json, name=localized" })
  localized?: VideoLocalization;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
