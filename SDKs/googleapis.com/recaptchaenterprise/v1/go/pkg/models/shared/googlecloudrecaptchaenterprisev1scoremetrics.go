package shared

type GoogleCloudRecaptchaenterpriseV1ScoreMetrics struct {
	ActionMetrics  map[string]GoogleCloudRecaptchaenterpriseV1ScoreDistribution `json:"actionMetrics"`
	OverallMetrics *GoogleCloudRecaptchaenterpriseV1ScoreDistribution           `json:"overallMetrics"`
}
