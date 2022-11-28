import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum {
    ThreatSourceTypeUnspecified = "THREAT_SOURCE_TYPE_UNSPECIFIED",
    MatchingUrl = "MATCHING_URL",
    TabUrl = "TAB_URL",
    TabRedirect = "TAB_REDIRECT",
    TabResource = "TAB_RESOURCE"
}
/**
 * A single resource related to a threat hit.
**/
export declare class GoogleSecuritySafebrowsingV4ThreatHitThreatSource extends SpeakeasyBase {
    referrer?: string;
    remoteIp?: string;
    type?: GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum;
    url?: string;
}
