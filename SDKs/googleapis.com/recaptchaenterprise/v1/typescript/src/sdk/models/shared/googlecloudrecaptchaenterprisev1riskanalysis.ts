import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum {
    ClassificationReasonUnspecified = "CLASSIFICATION_REASON_UNSPECIFIED"
,    Automation = "AUTOMATION"
,    UnexpectedEnvironment = "UNEXPECTED_ENVIRONMENT"
,    TooMuchTraffic = "TOO_MUCH_TRAFFIC"
,    UnexpectedUsagePatterns = "UNEXPECTED_USAGE_PATTERNS"
,    LowConfidenceScore = "LOW_CONFIDENCE_SCORE"
}


// GoogleCloudRecaptchaenterpriseV1RiskAnalysis
/** 
 * Risk analysis result for an event.
**/
export class GoogleCloudRecaptchaenterpriseV1RiskAnalysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=reasons" })
  reasons?: GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum[];

  @Metadata({ data: "json, name=score" })
  score?: number;
}
