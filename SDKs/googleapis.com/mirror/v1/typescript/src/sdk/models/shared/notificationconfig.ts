import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationConfig
/** 
 * Controls how notifications for a timeline item are presented to the user.
**/
export class NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryTime" })
  deliveryTime?: Date;

  @Metadata({ data: "json, name=level" })
  level?: string;
}
