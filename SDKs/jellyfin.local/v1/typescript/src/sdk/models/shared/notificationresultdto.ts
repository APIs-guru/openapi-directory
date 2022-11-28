import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationDto } from "./notificationdto";



// NotificationResultDto
/** 
 * A list of notifications with the total record count for pagination.
**/
export class NotificationResultDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notifications", elemType: NotificationDto })
  notifications?: NotificationDto[];

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
