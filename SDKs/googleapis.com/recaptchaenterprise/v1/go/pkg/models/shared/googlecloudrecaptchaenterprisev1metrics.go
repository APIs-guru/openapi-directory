package shared

type GoogleCloudRecaptchaenterpriseV1Metrics struct {
	ChallengeMetrics []GoogleCloudRecaptchaenterpriseV1ChallengeMetrics `json:"challengeMetrics"`
	Name             *string                                            `json:"name"`
	ScoreMetrics     []GoogleCloudRecaptchaenterpriseV1ScoreMetrics     `json:"scoreMetrics"`
	StartTime        *string                                            `json:"startTime"`
}
