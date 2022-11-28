import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
**/
export declare class SubscriptionSubscriberSnippet extends SpeakeasyBase {
    channelId?: string;
    description?: string;
    thumbnails?: ThumbnailDetails;
    title?: string;
}
