import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";



// ListNotificationChannelsResponse
/** 
 * The ListNotificationChannels response.
**/
export class ListNotificationChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationChannels", elemType: NotificationChannel })
  notificationChannels?: NotificationChannel[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
