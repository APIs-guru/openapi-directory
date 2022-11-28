import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
**/
export declare class SubscriptionSnippet extends SpeakeasyBase {
    channelId?: string;
    channelTitle?: string;
    description?: string;
    publishedAt?: Date;
    resourceId?: ResourceId;
    thumbnails?: ThumbnailDetails;
    title?: string;
}
