import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";


// PlaylistItemSnippet
/** 
 * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
**/
export class PlaylistItemSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=playlistId" })
  playlistId?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=videoOwnerChannelId" })
  videoOwnerChannelId?: string;

  @Metadata({ data: "json, name=videoOwnerChannelTitle" })
  videoOwnerChannelTitle?: string;
}
