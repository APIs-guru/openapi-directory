import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatInfo } from "./googlesecuritysafebrowsingv4threatinfo";
/**
 * Request to return full hashes matched by the provided hash prefixes.
**/
export declare class GoogleSecuritySafebrowsingV4FindFullHashesRequest extends SpeakeasyBase {
    apiClient?: GoogleSecuritySafebrowsingV4ClientInfo;
    client?: GoogleSecuritySafebrowsingV4ClientInfo;
    clientStates?: string[];
    threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}
