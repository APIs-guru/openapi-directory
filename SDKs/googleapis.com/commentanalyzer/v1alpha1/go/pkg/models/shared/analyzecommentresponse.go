package shared

type AnalyzeCommentResponse struct {
	AttributeScores   map[string]AttributeScores `json:"attributeScores"`
	ClientToken       *string                    `json:"clientToken"`
	DetectedLanguages []string                   `json:"detectedLanguages"`
	Languages         []string                   `json:"languages"`
}
