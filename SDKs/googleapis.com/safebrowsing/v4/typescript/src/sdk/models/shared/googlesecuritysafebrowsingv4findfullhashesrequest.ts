import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatInfo } from "./googlesecuritysafebrowsingv4threatinfo";



// GoogleSecuritySafebrowsingV4FindFullHashesRequest
/** 
 * Request to return full hashes matched by the provided hash prefixes.
**/
export class GoogleSecuritySafebrowsingV4FindFullHashesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiClient" })
  apiClient?: GoogleSecuritySafebrowsingV4ClientInfo;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: GoogleSecuritySafebrowsingV4ClientInfo;

  @SpeakeasyMetadata({ data: "json, name=clientStates" })
  clientStates?: string[];

  @SpeakeasyMetadata({ data: "json, name=threatInfo" })
  threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}
