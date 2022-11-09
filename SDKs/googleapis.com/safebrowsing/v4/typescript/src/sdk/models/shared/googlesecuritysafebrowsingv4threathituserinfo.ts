import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSecuritySafebrowsingV4ThreatHitUserInfo
/** 
 * Details about the user that encountered the threat.
**/
export class GoogleSecuritySafebrowsingV4ThreatHitUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
