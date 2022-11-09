import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";


// SubscriptionSnippet
/** 
 * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
**/
export class SubscriptionSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
