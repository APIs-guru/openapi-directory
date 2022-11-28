import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";



// PlaylistItemSnippet
/** 
 * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
**/
export class PlaylistItemSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=playlistId" })
  playlistId?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=videoOwnerChannelId" })
  videoOwnerChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoOwnerChannelTitle" })
  videoOwnerChannelTitle?: string;
}
