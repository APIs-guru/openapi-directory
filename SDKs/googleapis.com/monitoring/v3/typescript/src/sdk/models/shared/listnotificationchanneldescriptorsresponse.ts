import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannelDescriptor } from "./notificationchanneldescriptor";



// ListNotificationChannelDescriptorsResponse
/** 
 * The ListNotificationChannelDescriptors response.
**/
export class ListNotificationChannelDescriptorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelDescriptors", elemType: NotificationChannelDescriptor })
  channelDescriptors?: NotificationChannelDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
