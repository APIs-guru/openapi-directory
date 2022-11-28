import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionContentDetails } from "./subscriptioncontentdetails";
import { SubscriptionSnippet } from "./subscriptionsnippet";
import { SubscriptionSubscriberSnippet } from "./subscriptionsubscribersnippet";
/**
 * A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
**/
export declare class Subscription extends SpeakeasyBase {
    contentDetails?: SubscriptionContentDetails;
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: SubscriptionSnippet;
    subscriberSnippet?: SubscriptionSubscriberSnippet;
}
