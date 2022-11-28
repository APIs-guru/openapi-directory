import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";



// LiveBroadcastSnippet
/** 
 * Basic broadcast information.
**/
export class LiveBroadcastSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actualEndTime" })
  actualEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=actualStartTime" })
  actualStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefaultBroadcast" })
  isDefaultBroadcast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduledEndTime" })
  scheduledEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduledStartTime" })
  scheduledStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
