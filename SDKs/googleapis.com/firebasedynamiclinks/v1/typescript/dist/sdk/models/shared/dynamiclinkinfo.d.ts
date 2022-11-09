import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsInfo } from "./analyticsinfo";
import { AndroidInfo } from "./androidinfo";
import { DesktopInfo } from "./desktopinfo";
import { IosInfo } from "./iosinfo";
import { NavigationInfo } from "./navigationinfo";
import { SocialMetaTagInfo } from "./socialmetataginfo";
/**
 * Information about a Dynamic Link.
**/
export declare class DynamicLinkInfo extends SpeakeasyBase {
    analyticsInfo?: AnalyticsInfo;
    androidInfo?: AndroidInfo;
    desktopInfo?: DesktopInfo;
    domainUriPrefix?: string;
    dynamicLinkDomain?: string;
    iosInfo?: IosInfo;
    link?: string;
    navigationInfo?: NavigationInfo;
    socialMetaTagInfo?: SocialMetaTagInfo;
}
