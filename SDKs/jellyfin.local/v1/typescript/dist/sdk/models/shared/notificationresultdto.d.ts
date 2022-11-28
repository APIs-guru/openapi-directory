import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationDto } from "./notificationdto";
/**
 * A list of notifications with the total record count for pagination.
**/
export declare class NotificationResultDto extends SpeakeasyBase {
    notifications?: NotificationDto[];
    totalRecordCount?: number;
}
