import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudWebriskV1SubmissionThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED"
,    Malware = "MALWARE"
,    SocialEngineering = "SOCIAL_ENGINEERING"
,    UnwantedSoftware = "UNWANTED_SOFTWARE"
,    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}


// GoogleCloudWebriskV1Submission
/** 
 * Wraps a URI that might be displaying malicious content.
**/
export class GoogleCloudWebriskV1Submission extends SpeakeasyBase {
  @Metadata({ data: "json, name=threatTypes" })
  threatTypes?: GoogleCloudWebriskV1SubmissionThreatTypesEnum[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
