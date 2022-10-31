package shared



type GoogleCloudDialogflowV2SuggestArticlesResponse struct {
    ArticleAnswers []GoogleCloudDialogflowV2ArticleAnswer `json:"articleAnswers,omitempty"`
    ContextSize *int32 `json:"contextSize,omitempty"`
    LatestMessage *string `json:"latestMessage,omitempty"`
    
}

