import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";



// SubscriptionSnippet
/** 
 * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
**/
export class SubscriptionSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelTitle" })
  channelTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: ResourceId;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
