import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThumbnailDetails } from "./thumbnaildetails";


// SubscriptionSubscriberSnippet
/** 
 * Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
**/
export class SubscriptionSubscriberSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
