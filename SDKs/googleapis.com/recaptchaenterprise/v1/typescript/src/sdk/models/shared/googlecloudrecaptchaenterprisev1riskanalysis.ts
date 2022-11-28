import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum {
    ClassificationReasonUnspecified = "CLASSIFICATION_REASON_UNSPECIFIED",
    Automation = "AUTOMATION",
    UnexpectedEnvironment = "UNEXPECTED_ENVIRONMENT",
    TooMuchTraffic = "TOO_MUCH_TRAFFIC",
    UnexpectedUsagePatterns = "UNEXPECTED_USAGE_PATTERNS",
    LowConfidenceScore = "LOW_CONFIDENCE_SCORE"
}


// GoogleCloudRecaptchaenterpriseV1RiskAnalysis
/** 
 * Risk analysis result for an event.
**/
export class GoogleCloudRecaptchaenterpriseV1RiskAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reasons" })
  reasons?: GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
