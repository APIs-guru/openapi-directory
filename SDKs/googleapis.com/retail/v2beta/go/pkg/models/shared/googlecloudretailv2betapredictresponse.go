package shared

// GoogleCloudRetailV2betaPredictResponse
// Response message for predict method.
type GoogleCloudRetailV2betaPredictResponse struct {
	AttributionToken *string                                                  `json:"attributionToken,omitempty"`
	MissingIds       []string                                                 `json:"missingIds,omitempty"`
	Results          []GoogleCloudRetailV2betaPredictResponsePredictionResult `json:"results,omitempty"`
	ValidateOnly     *bool                                                    `json:"validateOnly,omitempty"`
}
