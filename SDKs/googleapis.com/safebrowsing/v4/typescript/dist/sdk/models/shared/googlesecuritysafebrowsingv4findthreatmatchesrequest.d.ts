import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatInfo } from "./googlesecuritysafebrowsingv4threatinfo";
/**
 * Request to check entries against lists.
**/
export declare class GoogleSecuritySafebrowsingV4FindThreatMatchesRequest extends SpeakeasyBase {
    client?: GoogleSecuritySafebrowsingV4ClientInfo;
    threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}
