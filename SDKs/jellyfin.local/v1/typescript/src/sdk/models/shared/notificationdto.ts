import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationLevelEnum } from "./notificationlevelenum";


// NotificationDto
/** 
 * The notification DTO.
**/
export class NotificationDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IsRead" })
  isRead?: boolean;

  @Metadata({ data: "json, name=Level" })
  level?: NotificationLevelEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
