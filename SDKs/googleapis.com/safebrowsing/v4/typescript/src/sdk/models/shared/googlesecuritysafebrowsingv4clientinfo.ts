import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSecuritySafebrowsingV4ClientInfo
/** 
 * The client metadata associated with Safe Browsing API requests.
**/
export class GoogleSecuritySafebrowsingV4ClientInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientVersion" })
  clientVersion?: string;
}
