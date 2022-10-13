package shared

type GoogleCloudDialogflowV2SuggestArticlesResponse struct {
	ArticleAnswers []GoogleCloudDialogflowV2ArticleAnswer `json:"articleAnswers"`
	ContextSize    *int32                                 `json:"contextSize"`
	LatestMessage  *string                                `json:"latestMessage"`
}
