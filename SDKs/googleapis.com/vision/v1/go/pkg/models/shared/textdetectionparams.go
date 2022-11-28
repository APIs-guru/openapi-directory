package shared

// TextDetectionParams
// Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
type TextDetectionParams struct {
	AdvancedOcrOptions                 []string `json:"advancedOcrOptions,omitempty"`
	EnableTextDetectionConfidenceScore *bool    `json:"enableTextDetectionConfidenceScore,omitempty"`
}
