package shared

type GoogleCloudRecaptchaenterpriseV1Assessment struct {
	AccountDefenderAssessment       *GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment       `json:"accountDefenderAssessment"`
	Event                           *GoogleCloudRecaptchaenterpriseV1Event                           `json:"event"`
	Name                            *string                                                          `json:"name"`
	PrivatePasswordLeakVerification *GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification `json:"privatePasswordLeakVerification"`
	RiskAnalysis                    *GoogleCloudRecaptchaenterpriseV1RiskAnalysis                    `json:"riskAnalysis"`
	TokenProperties                 *GoogleCloudRecaptchaenterpriseV1TokenProperties                 `json:"tokenProperties"`
}
