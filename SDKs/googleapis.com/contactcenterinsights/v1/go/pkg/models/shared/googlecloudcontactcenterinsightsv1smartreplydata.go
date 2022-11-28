package shared

// GoogleCloudContactcenterinsightsV1SmartReplyData
// Agent Assist Smart Reply data.
type GoogleCloudContactcenterinsightsV1SmartReplyData struct {
	ConfidenceScore *float64          `json:"confidenceScore,omitempty"`
	Metadata        map[string]string `json:"metadata,omitempty"`
	QueryRecord     *string           `json:"queryRecord,omitempty"`
	Reply           *string           `json:"reply,omitempty"`
}
