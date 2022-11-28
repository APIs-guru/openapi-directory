import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationLevelEnum } from "./notificationlevelenum";



// NotificationsSummaryDto
/** 
 * The notification summary DTO.
**/
export class NotificationsSummaryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxUnreadNotificationLevel" })
  maxUnreadNotificationLevel?: NotificationLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=UnreadCount" })
  unreadCount?: number;
}
