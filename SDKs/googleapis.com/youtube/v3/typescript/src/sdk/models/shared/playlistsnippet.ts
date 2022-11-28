import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaylistLocalization } from "./playlistlocalization";
import { ThumbnailDetails } from "./thumbnaildetails";



// PlaylistSnippet
/** 
 * Basic details about a playlist, including title, description and thumbnails.
**/
export class PlaylistSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=localized" })
  localized?: PlaylistLocalization;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumbnailVideoId" })
  thumbnailVideoId?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
