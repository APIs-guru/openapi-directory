package shared

// GoogleCloudRecaptchaenterpriseV1Assessment
// A recaptcha assessment resource.
type GoogleCloudRecaptchaenterpriseV1Assessment struct {
	AccountDefenderAssessment       *GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment       `json:"accountDefenderAssessment,omitempty"`
	Event                           *GoogleCloudRecaptchaenterpriseV1Event                           `json:"event,omitempty"`
	Name                            *string                                                          `json:"name,omitempty"`
	PrivatePasswordLeakVerification *GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification `json:"privatePasswordLeakVerification,omitempty"`
	RiskAnalysis                    *GoogleCloudRecaptchaenterpriseV1RiskAnalysis                    `json:"riskAnalysis,omitempty"`
	TokenProperties                 *GoogleCloudRecaptchaenterpriseV1TokenProperties                 `json:"tokenProperties,omitempty"`
}

// GoogleCloudRecaptchaenterpriseV1AssessmentInput
// A recaptcha assessment resource.
type GoogleCloudRecaptchaenterpriseV1AssessmentInput struct {
	AccountDefenderAssessment       *GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment            `json:"accountDefenderAssessment,omitempty"`
	Event                           *GoogleCloudRecaptchaenterpriseV1Event                                `json:"event,omitempty"`
	PrivatePasswordLeakVerification *GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput `json:"privatePasswordLeakVerification,omitempty"`
	RiskAnalysis                    *GoogleCloudRecaptchaenterpriseV1RiskAnalysis                         `json:"riskAnalysis,omitempty"`
	TokenProperties                 *GoogleCloudRecaptchaenterpriseV1TokenProperties                      `json:"tokenProperties,omitempty"`
}
