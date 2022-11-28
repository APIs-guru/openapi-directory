package shared

// GoogleCloudMlV1ExplanationConfig
// Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
type GoogleCloudMlV1ExplanationConfig struct {
	IntegratedGradientsAttribution *GoogleCloudMlV1IntegratedGradientsAttribution `json:"integratedGradientsAttribution,omitempty"`
	SampledShapleyAttribution      *GoogleCloudMlV1SampledShapleyAttribution      `json:"sampledShapleyAttribution,omitempty"`
	XraiAttribution                *GoogleCloudMlV1XraiAttribution                `json:"xraiAttribution,omitempty"`
}
