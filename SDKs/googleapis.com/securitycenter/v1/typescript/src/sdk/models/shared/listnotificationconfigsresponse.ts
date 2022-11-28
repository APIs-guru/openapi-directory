import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";



// ListNotificationConfigsResponse
/** 
 * Response message for listing notification configs.
**/
export class ListNotificationConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationConfigs", elemType: NotificationConfig })
  notificationConfigs?: NotificationConfig[];
}
