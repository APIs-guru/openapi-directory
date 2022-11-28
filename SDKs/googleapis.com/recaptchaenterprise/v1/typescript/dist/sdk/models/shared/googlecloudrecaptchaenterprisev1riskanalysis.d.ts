import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum {
    ClassificationReasonUnspecified = "CLASSIFICATION_REASON_UNSPECIFIED",
    Automation = "AUTOMATION",
    UnexpectedEnvironment = "UNEXPECTED_ENVIRONMENT",
    TooMuchTraffic = "TOO_MUCH_TRAFFIC",
    UnexpectedUsagePatterns = "UNEXPECTED_USAGE_PATTERNS",
    LowConfidenceScore = "LOW_CONFIDENCE_SCORE"
}
/**
 * Risk analysis result for an event.
**/
export declare class GoogleCloudRecaptchaenterpriseV1RiskAnalysis extends SpeakeasyBase {
    reasons?: GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum[];
    score?: number;
}
