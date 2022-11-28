package shared

// GoogleCloudRecaptchaenterpriseV1ChallengeMetrics
// Metrics related to challenges.
type GoogleCloudRecaptchaenterpriseV1ChallengeMetrics struct {
	FailedCount    *string `json:"failedCount,omitempty"`
	NocaptchaCount *string `json:"nocaptchaCount,omitempty"`
	PageloadCount  *string `json:"pageloadCount,omitempty"`
	PassedCount    *string `json:"passedCount,omitempty"`
}
