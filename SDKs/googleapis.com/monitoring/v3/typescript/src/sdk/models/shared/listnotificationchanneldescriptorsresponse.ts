import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationChannelDescriptor } from "./notificationchanneldescriptor";


// ListNotificationChannelDescriptorsResponse
/** 
 * The ListNotificationChannelDescriptors response.
**/
export class ListNotificationChannelDescriptorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelDescriptors", elemType: shared.NotificationChannelDescriptor })
  channelDescriptors?: NotificationChannelDescriptor[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
