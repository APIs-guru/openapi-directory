package shared

type TextDetectionParams struct {
	AdvancedOcrOptions                 []string `json:"advancedOcrOptions"`
	EnableTextDetectionConfidenceScore *bool    `json:"enableTextDetectionConfidenceScore"`
}
