import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationChannel } from "./notificationchannel";


// ListNotificationChannelsResponse
/** 
 * The ListNotificationChannels response.
**/
export class ListNotificationChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=notificationChannels", elemType: shared.NotificationChannel })
  notificationChannels?: NotificationChannel[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
