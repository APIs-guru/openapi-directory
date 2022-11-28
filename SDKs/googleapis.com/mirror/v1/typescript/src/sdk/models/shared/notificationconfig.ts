import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfig
/** 
 * Controls how notifications for a timeline item are presented to the user.
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryTime" })
  deliveryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;
}
