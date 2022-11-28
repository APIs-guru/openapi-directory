package shared

// GoogleCloudDiscoveryengineV1alphaRecommendResponse
// Response message for Recommend method.
type GoogleCloudDiscoveryengineV1alphaRecommendResponse struct {
	AttributionToken *string                                                                  `json:"attributionToken,omitempty"`
	MissingIds       []string                                                                 `json:"missingIds,omitempty"`
	Results          []GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult `json:"results,omitempty"`
	ValidateOnly     *bool                                                                    `json:"validateOnly,omitempty"`
}
