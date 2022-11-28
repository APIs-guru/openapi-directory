import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSecuritySafebrowsingV4ThreatEntry
/** 
 * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
