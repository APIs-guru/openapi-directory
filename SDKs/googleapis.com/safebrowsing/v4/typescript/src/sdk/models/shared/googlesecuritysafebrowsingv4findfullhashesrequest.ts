import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatInfo } from "./googlesecuritysafebrowsingv4threatinfo";


// GoogleSecuritySafebrowsingV4FindFullHashesRequest
/** 
 * Request to return full hashes matched by the provided hash prefixes.
**/
export class GoogleSecuritySafebrowsingV4FindFullHashesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiClient" })
  apiClient?: GoogleSecuritySafebrowsingV4ClientInfo;

  @Metadata({ data: "json, name=client" })
  client?: GoogleSecuritySafebrowsingV4ClientInfo;

  @Metadata({ data: "json, name=clientStates" })
  clientStates?: string[];

  @Metadata({ data: "json, name=threatInfo" })
  threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}
