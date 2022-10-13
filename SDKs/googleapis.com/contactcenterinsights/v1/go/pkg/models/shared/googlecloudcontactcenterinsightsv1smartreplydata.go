package shared

type GoogleCloudContactcenterinsightsV1SmartReplyData struct {
	ConfidenceScore *float64          `json:"confidenceScore"`
	Metadata        map[string]string `json:"metadata"`
	QueryRecord     *string           `json:"queryRecord"`
	Reply           *string           `json:"reply"`
}
