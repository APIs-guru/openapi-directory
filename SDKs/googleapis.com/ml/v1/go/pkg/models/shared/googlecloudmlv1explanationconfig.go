package shared

type GoogleCloudMlV1ExplanationConfig struct {
	IntegratedGradientsAttribution *GoogleCloudMlV1IntegratedGradientsAttribution `json:"integratedGradientsAttribution"`
	SampledShapleyAttribution      *GoogleCloudMlV1SampledShapleyAttribution      `json:"sampledShapleyAttribution"`
	XraiAttribution                *GoogleCloudMlV1XraiAttribution                `json:"xraiAttribution"`
}
