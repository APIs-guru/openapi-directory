import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationLevelEnum } from "./notificationlevelenum";



// NotificationDto
/** 
 * The notification DTO.
**/
export class NotificationDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsRead" })
  isRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Level" })
  level?: NotificationLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
