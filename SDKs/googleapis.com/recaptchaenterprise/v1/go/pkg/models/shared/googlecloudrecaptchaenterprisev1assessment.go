package shared

type GoogleCloudRecaptchaenterpriseV1Assessment struct {
	AccountDefenderAssessment       *GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment       `json:"accountDefenderAssessment,omitempty"`
	Event                           *GoogleCloudRecaptchaenterpriseV1Event                           `json:"event,omitempty"`
	Name                            *string                                                          `json:"name,omitempty"`
	PrivatePasswordLeakVerification *GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification `json:"privatePasswordLeakVerification,omitempty"`
	RiskAnalysis                    *GoogleCloudRecaptchaenterpriseV1RiskAnalysis                    `json:"riskAnalysis,omitempty"`
	TokenProperties                 *GoogleCloudRecaptchaenterpriseV1TokenProperties                 `json:"tokenProperties,omitempty"`
}
