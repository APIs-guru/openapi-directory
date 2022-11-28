import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationLevelEnum } from "./notificationlevelenum";
/**
 * The notification summary DTO.
**/
export declare class NotificationsSummaryDto extends SpeakeasyBase {
    maxUnreadNotificationLevel?: NotificationLevelEnum;
    unreadCount?: number;
}
