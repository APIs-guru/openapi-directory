package shared

type GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel struct {
	Candidates       []GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate `json:"candidates"`
	DefaultCandidate *GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate  `json:"defaultCandidate"`
	DisplayName      *string                                                        `json:"displayName"`
}
