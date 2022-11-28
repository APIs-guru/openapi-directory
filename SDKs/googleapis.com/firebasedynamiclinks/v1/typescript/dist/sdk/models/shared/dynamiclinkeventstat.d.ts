import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DynamicLinkEventStatEventEnum {
    DynamicLinkEventUnspecified = "DYNAMIC_LINK_EVENT_UNSPECIFIED",
    Click = "CLICK",
    Redirect = "REDIRECT",
    AppInstall = "APP_INSTALL",
    AppFirstOpen = "APP_FIRST_OPEN",
    AppReOpen = "APP_RE_OPEN"
}
export declare enum DynamicLinkEventStatPlatformEnum {
    DynamicLinkPlatformUnspecified = "DYNAMIC_LINK_PLATFORM_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    Desktop = "DESKTOP",
    Other = "OTHER"
}
/**
 * Dynamic Link event stat.
**/
export declare class DynamicLinkEventStat extends SpeakeasyBase {
    count?: string;
    event?: DynamicLinkEventStatEventEnum;
    platform?: DynamicLinkEventStatPlatformEnum;
}
