package shared

type SuggestCommentScoreResponse struct {
	ClientToken        *string  `json:"clientToken,omitempty"`
	DetectedLanguages  []string `json:"detectedLanguages,omitempty"`
	RequestedLanguages []string `json:"requestedLanguages,omitempty"`
}
