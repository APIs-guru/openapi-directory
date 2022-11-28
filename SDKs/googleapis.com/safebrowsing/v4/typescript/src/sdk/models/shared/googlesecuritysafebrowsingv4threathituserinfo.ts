import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSecuritySafebrowsingV4ThreatHitUserInfo
/** 
 * Details about the user that encountered the threat.
**/
export class GoogleSecuritySafebrowsingV4ThreatHitUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
