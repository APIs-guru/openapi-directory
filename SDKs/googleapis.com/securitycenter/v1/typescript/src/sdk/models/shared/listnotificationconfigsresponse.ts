import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationConfig } from "./notificationconfig";


// ListNotificationConfigsResponse
/** 
 * Response message for listing notification configs.
**/
export class ListNotificationConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=notificationConfigs", elemType: shared.NotificationConfig })
  notificationConfigs?: NotificationConfig[];
}
