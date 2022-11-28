import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LightSettings } from "./lightsettings";


export enum AndroidNotificationNotificationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    PriorityMin = "PRIORITY_MIN",
    PriorityLow = "PRIORITY_LOW",
    PriorityDefault = "PRIORITY_DEFAULT",
    PriorityHigh = "PRIORITY_HIGH",
    PriorityMax = "PRIORITY_MAX"
}

export enum AndroidNotificationVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Private = "PRIVATE",
    Public = "PUBLIC",
    Secret = "SECRET"
}


// AndroidNotification
/** 
 * Notification to send to android devices.
**/
export class AndroidNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=bodyLocArgs" })
  bodyLocArgs?: string[];

  @SpeakeasyMetadata({ data: "json, name=bodyLocKey" })
  bodyLocKey?: string;

  @SpeakeasyMetadata({ data: "json, name=bypassProxyNotification" })
  bypassProxyNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=clickAction" })
  clickAction?: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLightSettings" })
  defaultLightSettings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultSound" })
  defaultSound?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultVibrateTimings" })
  defaultVibrateTimings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=lightSettings" })
  lightSettings?: LightSettings;

  @SpeakeasyMetadata({ data: "json, name=localOnly" })
  localOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notificationCount" })
  notificationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=notificationPriority" })
  notificationPriority?: AndroidNotificationNotificationPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=sound" })
  sound?: string;

  @SpeakeasyMetadata({ data: "json, name=sticky" })
  sticky?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=ticker" })
  ticker?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=titleLocArgs" })
  titleLocArgs?: string[];

  @SpeakeasyMetadata({ data: "json, name=titleLocKey" })
  titleLocKey?: string;

  @SpeakeasyMetadata({ data: "json, name=vibrateTimings" })
  vibrateTimings?: string[];

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: AndroidNotificationVisibilityEnum;
}
