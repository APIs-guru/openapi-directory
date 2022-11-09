import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationDto } from "./notificationdto";


// NotificationResultDto
/** 
 * A list of notifications with the total record count for pagination.
**/
export class NotificationResultDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notifications", elemType: shared.NotificationDto })
  notifications?: NotificationDto[];

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
