package shared

type GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum string

const (
	GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumClassificationReasonUnspecified GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum = "CLASSIFICATION_REASON_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumAutomation                      GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum = "AUTOMATION"
	GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumUnexpectedEnvironment           GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum = "UNEXPECTED_ENVIRONMENT"
	GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumTooMuchTraffic                  GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum = "TOO_MUCH_TRAFFIC"
	GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumUnexpectedUsagePatterns         GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum = "UNEXPECTED_USAGE_PATTERNS"
	GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnumLowConfidenceScore              GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum = "LOW_CONFIDENCE_SCORE"
)

type GoogleCloudRecaptchaenterpriseV1RiskAnalysis struct {
	Reasons []GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum `json:"reasons"`
	Score   *float32                                                  `json:"score"`
}
