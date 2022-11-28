import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationLevelEnum } from "./notificationlevelenum";
/**
 * The notification DTO.
**/
export declare class NotificationDto extends SpeakeasyBase {
    date?: Date;
    description?: string;
    id?: string;
    isRead?: boolean;
    level?: NotificationLevelEnum;
    name?: string;
    url?: string;
    userId?: string;
}
