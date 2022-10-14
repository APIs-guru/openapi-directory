package shared

type GoogleCloudDialogflowV2beta1SuggestArticlesResponse struct {
	ArticleAnswers []GoogleCloudDialogflowV2beta1ArticleAnswer `json:"articleAnswers,omitempty"`
	ContextSize    *int32                                      `json:"contextSize,omitempty"`
	LatestMessage  *string                                     `json:"latestMessage,omitempty"`
}
