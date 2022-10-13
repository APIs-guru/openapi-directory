package shared

type GoogleCloudContactcenterinsightsV1ArticleSuggestionData struct {
	ConfidenceScore *float32          `json:"confidenceScore"`
	Metadata        map[string]string `json:"metadata"`
	QueryRecord     *string           `json:"queryRecord"`
	Source          *string           `json:"source"`
	Title           *string           `json:"title"`
	URI             *string           `json:"uri"`
}
