import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";
/**
 * The ListNotificationChannels response.
**/
export declare class ListNotificationChannelsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    notificationChannels?: NotificationChannel[];
    totalSize?: number;
}
