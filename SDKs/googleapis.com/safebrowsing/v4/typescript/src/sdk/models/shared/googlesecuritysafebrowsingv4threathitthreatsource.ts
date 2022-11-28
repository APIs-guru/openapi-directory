import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum {
    ThreatSourceTypeUnspecified = "THREAT_SOURCE_TYPE_UNSPECIFIED",
    MatchingUrl = "MATCHING_URL",
    TabUrl = "TAB_URL",
    TabRedirect = "TAB_REDIRECT",
    TabResource = "TAB_RESOURCE"
}


// GoogleSecuritySafebrowsingV4ThreatHitThreatSource
/** 
 * A single resource related to a threat hit.
**/
export class GoogleSecuritySafebrowsingV4ThreatHitThreatSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteIp" })
  remoteIp?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
