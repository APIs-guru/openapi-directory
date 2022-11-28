import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationRateLimit } from "./notificationratelimit";



// AlertStrategy
/** 
 * Control over how the notification channels in notification_channels are notified when this alert fires.
**/
export class AlertStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoClose" })
  autoClose?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationRateLimit" })
  notificationRateLimit?: NotificationRateLimit;
}
