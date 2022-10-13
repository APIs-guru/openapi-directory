package shared

type GoogleCloudDialogflowV2beta1SuggestArticlesResponse struct {
	ArticleAnswers []GoogleCloudDialogflowV2beta1ArticleAnswer `json:"articleAnswers"`
	ContextSize    *int32                                      `json:"contextSize"`
	LatestMessage  *string                                     `json:"latestMessage"`
}
