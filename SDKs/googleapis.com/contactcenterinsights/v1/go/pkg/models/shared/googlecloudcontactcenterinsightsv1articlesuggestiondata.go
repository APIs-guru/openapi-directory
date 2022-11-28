package shared

// GoogleCloudContactcenterinsightsV1ArticleSuggestionData
// Agent Assist Article Suggestion data.
type GoogleCloudContactcenterinsightsV1ArticleSuggestionData struct {
	ConfidenceScore *float32          `json:"confidenceScore,omitempty"`
	Metadata        map[string]string `json:"metadata,omitempty"`
	QueryRecord     *string           `json:"queryRecord,omitempty"`
	Source          *string           `json:"source,omitempty"`
	Title           *string           `json:"title,omitempty"`
	URI             *string           `json:"uri,omitempty"`
}
