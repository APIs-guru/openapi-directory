package shared



type GoogleCloudDialogflowV2ArticleAnswer struct {
    AnswerRecord *string `json:"answerRecord,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Snippets []string `json:"snippets,omitempty"`
    Title *string `json:"title,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

