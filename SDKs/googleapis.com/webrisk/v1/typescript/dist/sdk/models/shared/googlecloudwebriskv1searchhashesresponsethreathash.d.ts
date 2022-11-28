import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
/**
 * Contains threat information on a matching hash.
**/
export declare class GoogleCloudWebriskV1SearchHashesResponseThreatHash extends SpeakeasyBase {
    expireTime?: string;
    hash?: string;
    threatTypes?: GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum[];
}
