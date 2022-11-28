package shared

// GoogleCloudMlV1IntegratedGradientsAttribution
// Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
type GoogleCloudMlV1IntegratedGradientsAttribution struct {
	NumIntegralSteps *int32 `json:"numIntegralSteps,omitempty"`
}
