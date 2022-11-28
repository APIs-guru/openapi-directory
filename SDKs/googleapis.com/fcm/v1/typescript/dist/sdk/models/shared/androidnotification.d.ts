import { SpeakeasyBase } from "../../../internal/utils";
import { LightSettings } from "./lightsettings";
export declare enum AndroidNotificationNotificationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    PriorityMin = "PRIORITY_MIN",
    PriorityLow = "PRIORITY_LOW",
    PriorityDefault = "PRIORITY_DEFAULT",
    PriorityHigh = "PRIORITY_HIGH",
    PriorityMax = "PRIORITY_MAX"
}
export declare enum AndroidNotificationVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Private = "PRIVATE",
    Public = "PUBLIC",
    Secret = "SECRET"
}
/**
 * Notification to send to android devices.
**/
export declare class AndroidNotification extends SpeakeasyBase {
    body?: string;
    bodyLocArgs?: string[];
    bodyLocKey?: string;
    bypassProxyNotification?: boolean;
    channelId?: string;
    clickAction?: string;
    color?: string;
    defaultLightSettings?: boolean;
    defaultSound?: boolean;
    defaultVibrateTimings?: boolean;
    eventTime?: string;
    icon?: string;
    image?: string;
    lightSettings?: LightSettings;
    localOnly?: boolean;
    notificationCount?: number;
    notificationPriority?: AndroidNotificationNotificationPriorityEnum;
    sound?: string;
    sticky?: boolean;
    tag?: string;
    ticker?: string;
    title?: string;
    titleLocArgs?: string[];
    titleLocKey?: string;
    vibrateTimings?: string[];
    visibility?: AndroidNotificationVisibilityEnum;
}
