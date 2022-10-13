package shared

type GoogleCloudContactcenterinsightsV1FaqAnswerData struct {
	Answer          *string           `json:"answer"`
	ConfidenceScore *float32          `json:"confidenceScore"`
	Metadata        map[string]string `json:"metadata"`
	QueryRecord     *string           `json:"queryRecord"`
	Question        *string           `json:"question"`
	Source          *string           `json:"source"`
}
