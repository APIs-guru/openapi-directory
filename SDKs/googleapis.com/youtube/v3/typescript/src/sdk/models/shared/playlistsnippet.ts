import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlaylistLocalization } from "./playlistlocalization";
import { ThumbnailDetails } from "./thumbnaildetails";


// PlaylistSnippet
/** 
 * Basic details about a playlist, including title, description and thumbnails.
**/
export class PlaylistSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=localized" })
  localized?: PlaylistLocalization;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=thumbnailVideoId" })
  thumbnailVideoId?: string;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
