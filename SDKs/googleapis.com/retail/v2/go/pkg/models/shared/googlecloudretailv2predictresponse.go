package shared

// GoogleCloudRetailV2PredictResponse
// Response message for predict method.
type GoogleCloudRetailV2PredictResponse struct {
	AttributionToken *string                                              `json:"attributionToken,omitempty"`
	MissingIds       []string                                             `json:"missingIds,omitempty"`
	Results          []GoogleCloudRetailV2PredictResponsePredictionResult `json:"results,omitempty"`
	ValidateOnly     *bool                                                `json:"validateOnly,omitempty"`
}
