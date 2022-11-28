package shared

// GoogleCloudDiscoveryengineV1betaRecommendResponse
// Response message for Recommend method.
type GoogleCloudDiscoveryengineV1betaRecommendResponse struct {
	AttributionToken *string                                                                 `json:"attributionToken,omitempty"`
	MissingIds       []string                                                                `json:"missingIds,omitempty"`
	Results          []GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult `json:"results,omitempty"`
	ValidateOnly     *bool                                                                   `json:"validateOnly,omitempty"`
}
