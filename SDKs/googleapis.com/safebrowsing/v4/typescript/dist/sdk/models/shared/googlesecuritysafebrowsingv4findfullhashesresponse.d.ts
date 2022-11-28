import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatMatch } from "./googlesecuritysafebrowsingv4threatmatch";
export declare class GoogleSecuritySafebrowsingV4FindFullHashesResponse extends SpeakeasyBase {
    matches?: GoogleSecuritySafebrowsingV4ThreatMatch[];
    minimumWaitDuration?: string;
    negativeCacheDuration?: string;
}
