import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannelDescriptor } from "./notificationchanneldescriptor";
/**
 * The ListNotificationChannelDescriptors response.
**/
export declare class ListNotificationChannelDescriptorsResponse extends SpeakeasyBase {
    channelDescriptors?: NotificationChannelDescriptor[];
    nextPageToken?: string;
}
