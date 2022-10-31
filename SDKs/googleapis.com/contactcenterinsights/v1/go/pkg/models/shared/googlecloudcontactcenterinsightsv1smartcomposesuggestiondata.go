package shared

type GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData struct {
	ConfidenceScore *float64          `json:"confidenceScore,omitempty"`
	Metadata        map[string]string `json:"metadata,omitempty"`
	QueryRecord     *string           `json:"queryRecord,omitempty"`
	Suggestion      *string           `json:"suggestion,omitempty"`
}
