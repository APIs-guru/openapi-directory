package shared

// GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel
// An individual panel with a list of ServingConfigs to consider for it.
type GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel struct {
	Candidates       []GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate `json:"candidates,omitempty"`
	DefaultCandidate *GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate  `json:"defaultCandidate,omitempty"`
	DisplayName      *string                                                        `json:"displayName,omitempty"`
}
