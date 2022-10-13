package shared

type SuggestCommentScoreResponse struct {
	ClientToken        *string  `json:"clientToken"`
	DetectedLanguages  []string `json:"detectedLanguages"`
	RequestedLanguages []string `json:"requestedLanguages"`
}
