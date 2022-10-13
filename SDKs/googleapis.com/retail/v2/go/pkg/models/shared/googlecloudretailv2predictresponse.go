package shared

type GoogleCloudRetailV2PredictResponse struct {
	AttributionToken *string                                              `json:"attributionToken"`
	MissingIds       []string                                             `json:"missingIds"`
	Results          []GoogleCloudRetailV2PredictResponsePredictionResult `json:"results"`
	ValidateOnly     *bool                                                `json:"validateOnly"`
}
