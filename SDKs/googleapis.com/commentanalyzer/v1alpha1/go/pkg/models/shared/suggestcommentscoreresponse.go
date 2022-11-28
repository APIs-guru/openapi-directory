package shared

// SuggestCommentScoreResponse
// The comment score suggestion response message.
type SuggestCommentScoreResponse struct {
	ClientToken        *string  `json:"clientToken,omitempty"`
	DetectedLanguages  []string `json:"detectedLanguages,omitempty"`
	RequestedLanguages []string `json:"requestedLanguages,omitempty"`
}
