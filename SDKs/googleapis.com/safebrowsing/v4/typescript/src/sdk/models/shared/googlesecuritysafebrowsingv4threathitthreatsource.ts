import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum {
    ThreatSourceTypeUnspecified = "THREAT_SOURCE_TYPE_UNSPECIFIED"
,    MatchingUrl = "MATCHING_URL"
,    TabUrl = "TAB_URL"
,    TabRedirect = "TAB_REDIRECT"
,    TabResource = "TAB_RESOURCE"
}


// GoogleSecuritySafebrowsingV4ThreatHitThreatSource
/** 
 * A single resource related to a threat hit.
**/
export class GoogleSecuritySafebrowsingV4ThreatHitThreatSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=referrer" })
  referrer?: string;

  @Metadata({ data: "json, name=remoteIp" })
  remoteIp?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
