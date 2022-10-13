package shared

type GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData struct {
	ConfidenceScore *float64          `json:"confidenceScore"`
	Metadata        map[string]string `json:"metadata"`
	QueryRecord     *string           `json:"queryRecord"`
	Suggestion      *string           `json:"suggestion"`
}
