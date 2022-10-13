package shared

type GoogleCloudRetailV2alphaPredictResponse struct {
	AttributionToken *string                                                   `json:"attributionToken"`
	MissingIds       []string                                                  `json:"missingIds"`
	Results          []GoogleCloudRetailV2alphaPredictResponsePredictionResult `json:"results"`
	ValidateOnly     *bool                                                     `json:"validateOnly"`
}
