import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionContentDetails } from "./subscriptioncontentdetails";
import { SubscriptionSnippet } from "./subscriptionsnippet";
import { SubscriptionSubscriberSnippet } from "./subscriptionsubscribersnippet";


// Subscription
/** 
 * A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: SubscriptionContentDetails;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: SubscriptionSnippet;

  @Metadata({ data: "json, name=subscriberSnippet" })
  subscriberSnippet?: SubscriptionSubscriberSnippet;
}
