package shared

// GoogleCloudRecaptchaenterpriseV1Metrics
// Metrics for a single Key.
type GoogleCloudRecaptchaenterpriseV1Metrics struct {
	ChallengeMetrics []GoogleCloudRecaptchaenterpriseV1ChallengeMetrics `json:"challengeMetrics,omitempty"`
	Name             *string                                            `json:"name,omitempty"`
	ScoreMetrics     []GoogleCloudRecaptchaenterpriseV1ScoreMetrics     `json:"scoreMetrics,omitempty"`
	StartTime        *string                                            `json:"startTime,omitempty"`
}
