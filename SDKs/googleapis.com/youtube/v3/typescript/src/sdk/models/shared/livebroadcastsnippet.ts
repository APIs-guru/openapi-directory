import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThumbnailDetails } from "./thumbnaildetails";


// LiveBroadcastSnippet
/** 
 * Basic broadcast information.
**/
export class LiveBroadcastSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=actualEndTime" })
  actualEndTime?: Date;

  @Metadata({ data: "json, name=actualStartTime" })
  actualStartTime?: Date;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=isDefaultBroadcast" })
  isDefaultBroadcast?: boolean;

  @Metadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=scheduledEndTime" })
  scheduledEndTime?: Date;

  @Metadata({ data: "json, name=scheduledStartTime" })
  scheduledStartTime?: Date;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
