package shared

// GoogleCloudDialogflowV2SuggestArticlesResponse
// The response message for Participants.SuggestArticles.
type GoogleCloudDialogflowV2SuggestArticlesResponse struct {
	ArticleAnswers []GoogleCloudDialogflowV2ArticleAnswer `json:"articleAnswers,omitempty"`
	ContextSize    *int32                                 `json:"contextSize,omitempty"`
	LatestMessage  *string                                `json:"latestMessage,omitempty"`
}
