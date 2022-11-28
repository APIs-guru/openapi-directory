import { SpeakeasyBase } from "../../../internal/utils";
import { UrlNotification } from "./urlnotification";
/**
 * Summary of the most recent Indexing API notifications successfully received, for a given URL.
**/
export declare class UrlNotificationMetadata extends SpeakeasyBase {
    latestRemove?: UrlNotification;
    latestUpdate?: UrlNotification;
    url?: string;
}
