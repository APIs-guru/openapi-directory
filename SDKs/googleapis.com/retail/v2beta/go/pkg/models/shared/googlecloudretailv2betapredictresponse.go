package shared

type GoogleCloudRetailV2betaPredictResponse struct {
	AttributionToken *string                                                  `json:"attributionToken"`
	MissingIds       []string                                                 `json:"missingIds"`
	Results          []GoogleCloudRetailV2betaPredictResponsePredictionResult `json:"results"`
	ValidateOnly     *bool                                                    `json:"validateOnly"`
}
