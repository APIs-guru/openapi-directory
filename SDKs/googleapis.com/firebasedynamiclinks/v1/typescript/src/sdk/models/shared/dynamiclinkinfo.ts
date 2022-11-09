import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsInfo } from "./analyticsinfo";
import { AndroidInfo } from "./androidinfo";
import { DesktopInfo } from "./desktopinfo";
import { IosInfo } from "./iosinfo";
import { NavigationInfo } from "./navigationinfo";
import { SocialMetaTagInfo } from "./socialmetataginfo";


// DynamicLinkInfo
/** 
 * Information about a Dynamic Link.
**/
export class DynamicLinkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsInfo" })
  analyticsInfo?: AnalyticsInfo;

  @Metadata({ data: "json, name=androidInfo" })
  androidInfo?: AndroidInfo;

  @Metadata({ data: "json, name=desktopInfo" })
  desktopInfo?: DesktopInfo;

  @Metadata({ data: "json, name=domainUriPrefix" })
  domainUriPrefix?: string;

  @Metadata({ data: "json, name=dynamicLinkDomain" })
  dynamicLinkDomain?: string;

  @Metadata({ data: "json, name=iosInfo" })
  iosInfo?: IosInfo;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=navigationInfo" })
  navigationInfo?: NavigationInfo;

  @Metadata({ data: "json, name=socialMetaTagInfo" })
  socialMetaTagInfo?: SocialMetaTagInfo;
}
