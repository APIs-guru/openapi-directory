import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationRateLimit } from "./notificationratelimit";


// AlertStrategy
/** 
 * Control over how the notification channels in notification_channels are notified when this alert fires.
**/
export class AlertStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoClose" })
  autoClose?: string;

  @Metadata({ data: "json, name=notificationRateLimit" })
  notificationRateLimit?: NotificationRateLimit;
}
