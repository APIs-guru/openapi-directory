package shared

type GoogleCloudRetailV2alphaPredictResponse struct {
	AttributionToken *string                                                   `json:"attributionToken,omitempty"`
	MissingIds       []string                                                  `json:"missingIds,omitempty"`
	Results          []GoogleCloudRetailV2alphaPredictResponsePredictionResult `json:"results,omitempty"`
	ValidateOnly     *bool                                                     `json:"validateOnly,omitempty"`
}
