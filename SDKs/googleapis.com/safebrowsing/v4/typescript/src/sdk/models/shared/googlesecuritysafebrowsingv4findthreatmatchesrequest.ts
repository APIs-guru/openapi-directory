import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatInfo } from "./googlesecuritysafebrowsingv4threatinfo";


// GoogleSecuritySafebrowsingV4FindThreatMatchesRequest
/** 
 * Request to check entries against lists.
**/
export class GoogleSecuritySafebrowsingV4FindThreatMatchesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: GoogleSecuritySafebrowsingV4ClientInfo;

  @Metadata({ data: "json, name=threatInfo" })
  threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}
