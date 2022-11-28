package shared

// GoogleCloudDialogflowV2beta1SuggestArticlesResponse
// The response message for Participants.SuggestArticles.
type GoogleCloudDialogflowV2beta1SuggestArticlesResponse struct {
	ArticleAnswers []GoogleCloudDialogflowV2beta1ArticleAnswer `json:"articleAnswers,omitempty"`
	ContextSize    *int32                                      `json:"contextSize,omitempty"`
	LatestMessage  *string                                     `json:"latestMessage,omitempty"`
}
