import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
/**
 * Contains threat information on a matching uri.
**/
export declare class GoogleCloudWebriskV1SearchUrisResponseThreatUri extends SpeakeasyBase {
    expireTime?: string;
    threatTypes?: GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum[];
}
