import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=analyticsInfo" })
  analyticsInfo?: AnalyticsInfo;

  @SpeakeasyMetadata({ data: "json, name=androidInfo" })
  androidInfo?: AndroidInfo;

  @SpeakeasyMetadata({ data: "json, name=desktopInfo" })
  desktopInfo?: DesktopInfo;

  @SpeakeasyMetadata({ data: "json, name=domainUriPrefix" })
  domainUriPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicLinkDomain" })
  dynamicLinkDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=iosInfo" })
  iosInfo?: IosInfo;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=navigationInfo" })
  navigationInfo?: NavigationInfo;

  @SpeakeasyMetadata({ data: "json, name=socialMetaTagInfo" })
  socialMetaTagInfo?: SocialMetaTagInfo;
}
