import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationLevelEnum } from "./notificationlevelenum";


// NotificationsSummaryDto
/** 
 * The notification summary DTO.
**/
export class NotificationsSummaryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxUnreadNotificationLevel" })
  maxUnreadNotificationLevel?: NotificationLevelEnum;

  @Metadata({ data: "json, name=UnreadCount" })
  unreadCount?: number;
}
