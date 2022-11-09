import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSecuritySafebrowsingV4ThreatEntry
/** 
 * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
**/
export class GoogleSecuritySafebrowsingV4ThreatEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
