package shared



type GoogleCloudMlV1ExplanationConfig struct {
    IntegratedGradientsAttribution *GoogleCloudMlV1IntegratedGradientsAttribution `json:"integratedGradientsAttribution,omitempty"`
    SampledShapleyAttribution *GoogleCloudMlV1SampledShapleyAttribution `json:"sampledShapleyAttribution,omitempty"`
    XraiAttribution *GoogleCloudMlV1XraiAttribution `json:"xraiAttribution,omitempty"`
    
}

