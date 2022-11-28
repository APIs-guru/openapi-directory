package shared

// GoogleCloudContactcenterinsightsV1FaqAnswerData
// Agent Assist frequently-asked-question answer data.
type GoogleCloudContactcenterinsightsV1FaqAnswerData struct {
	Answer          *string           `json:"answer,omitempty"`
	ConfidenceScore *float32          `json:"confidenceScore,omitempty"`
	Metadata        map[string]string `json:"metadata,omitempty"`
	QueryRecord     *string           `json:"queryRecord,omitempty"`
	Question        *string           `json:"question,omitempty"`
	Source          *string           `json:"source,omitempty"`
}
