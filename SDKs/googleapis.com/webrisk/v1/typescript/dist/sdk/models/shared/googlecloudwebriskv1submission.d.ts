import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudWebriskV1SubmissionThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
/**
 * Wraps a URI that might be displaying malicious content.
**/
export declare class GoogleCloudWebriskV1Submission extends SpeakeasyBase {
    threatTypes?: GoogleCloudWebriskV1SubmissionThreatTypesEnum[];
    uri?: string;
}
