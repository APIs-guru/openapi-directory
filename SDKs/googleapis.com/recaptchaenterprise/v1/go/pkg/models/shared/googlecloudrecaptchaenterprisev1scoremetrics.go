package shared

// GoogleCloudRecaptchaenterpriseV1ScoreMetrics
// Metrics related to scoring.
type GoogleCloudRecaptchaenterpriseV1ScoreMetrics struct {
	ActionMetrics  map[string]GoogleCloudRecaptchaenterpriseV1ScoreDistribution `json:"actionMetrics,omitempty"`
	OverallMetrics *GoogleCloudRecaptchaenterpriseV1ScoreDistribution           `json:"overallMetrics,omitempty"`
}
