package shared

// AnalyzeCommentResponse
// The comment analysis response message.
type AnalyzeCommentResponse struct {
	AttributeScores   map[string]AttributeScores `json:"attributeScores,omitempty"`
	ClientToken       *string                    `json:"clientToken,omitempty"`
	DetectedLanguages []string                   `json:"detectedLanguages,omitempty"`
	Languages         []string                   `json:"languages,omitempty"`
}
