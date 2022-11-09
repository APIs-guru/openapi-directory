import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSecuritySafebrowsingV4ClientInfo
/** 
 * The client metadata associated with Safe Browsing API requests.
**/
export class GoogleSecuritySafebrowsingV4ClientInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientVersion" })
  clientVersion?: string;
}
