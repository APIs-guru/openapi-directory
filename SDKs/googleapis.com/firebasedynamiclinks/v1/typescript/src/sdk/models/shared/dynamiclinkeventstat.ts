import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DynamicLinkEventStatEventEnum {
    DynamicLinkEventUnspecified = "DYNAMIC_LINK_EVENT_UNSPECIFIED"
,    Click = "CLICK"
,    Redirect = "REDIRECT"
,    AppInstall = "APP_INSTALL"
,    AppFirstOpen = "APP_FIRST_OPEN"
,    AppReOpen = "APP_RE_OPEN"
}

export enum DynamicLinkEventStatPlatformEnum {
    DynamicLinkPlatformUnspecified = "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
,    Android = "ANDROID"
,    Ios = "IOS"
,    Desktop = "DESKTOP"
,    Other = "OTHER"
}


// DynamicLinkEventStat
/** 
 * Dynamic Link event stat.
**/
export class DynamicLinkEventStat extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=event" })
  event?: DynamicLinkEventStatEventEnum;

  @Metadata({ data: "json, name=platform" })
  platform?: DynamicLinkEventStatPlatformEnum;
}
