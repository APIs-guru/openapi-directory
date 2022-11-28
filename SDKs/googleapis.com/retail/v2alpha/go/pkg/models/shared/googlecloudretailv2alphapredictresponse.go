package shared

// GoogleCloudRetailV2alphaPredictResponse
// Response message for predict method.
type GoogleCloudRetailV2alphaPredictResponse struct {
	AttributionToken *string                                                   `json:"attributionToken,omitempty"`
	MissingIds       []string                                                  `json:"missingIds,omitempty"`
	Results          []GoogleCloudRetailV2alphaPredictResponsePredictionResult `json:"results,omitempty"`
	ValidateOnly     *bool                                                     `json:"validateOnly,omitempty"`
}
