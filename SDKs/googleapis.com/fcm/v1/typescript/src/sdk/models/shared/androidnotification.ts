import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LightSettings } from "./lightsettings";

export enum AndroidNotificationNotificationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED"
,    PriorityMin = "PRIORITY_MIN"
,    PriorityLow = "PRIORITY_LOW"
,    PriorityDefault = "PRIORITY_DEFAULT"
,    PriorityHigh = "PRIORITY_HIGH"
,    PriorityMax = "PRIORITY_MAX"
}

export enum AndroidNotificationVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED"
,    Private = "PRIVATE"
,    Public = "PUBLIC"
,    Secret = "SECRET"
}


// AndroidNotification
/** 
 * Notification to send to android devices.
**/
export class AndroidNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=bodyLocArgs" })
  bodyLocArgs?: string[];

  @Metadata({ data: "json, name=bodyLocKey" })
  bodyLocKey?: string;

  @Metadata({ data: "json, name=bypassProxyNotification" })
  bypassProxyNotification?: boolean;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=clickAction" })
  clickAction?: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=defaultLightSettings" })
  defaultLightSettings?: boolean;

  @Metadata({ data: "json, name=defaultSound" })
  defaultSound?: boolean;

  @Metadata({ data: "json, name=defaultVibrateTimings" })
  defaultVibrateTimings?: boolean;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=lightSettings" })
  lightSettings?: LightSettings;

  @Metadata({ data: "json, name=localOnly" })
  localOnly?: boolean;

  @Metadata({ data: "json, name=notificationCount" })
  notificationCount?: number;

  @Metadata({ data: "json, name=notificationPriority" })
  notificationPriority?: AndroidNotificationNotificationPriorityEnum;

  @Metadata({ data: "json, name=sound" })
  sound?: string;

  @Metadata({ data: "json, name=sticky" })
  sticky?: boolean;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=ticker" })
  ticker?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=titleLocArgs" })
  titleLocArgs?: string[];

  @Metadata({ data: "json, name=titleLocKey" })
  titleLocKey?: string;

  @Metadata({ data: "json, name=vibrateTimings" })
  vibrateTimings?: string[];

  @Metadata({ data: "json, name=visibility" })
  visibility?: AndroidNotificationVisibilityEnum;
}
