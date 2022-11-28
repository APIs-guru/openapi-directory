import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationRateLimit } from "./notificationratelimit";
/**
 * Control over how the notification channels in notification_channels are notified when this alert fires.
**/
export declare class AlertStrategy extends SpeakeasyBase {
    autoClose?: string;
    notificationRateLimit?: NotificationRateLimit;
}
