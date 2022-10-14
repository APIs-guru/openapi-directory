package shared

type GoogleCloudDialogflowV2beta1SuggestionArticle struct {
	AnswerRecord *string           `json:"answerRecord,omitempty"`
	Metadata     map[string]string `json:"metadata,omitempty"`
	Snippets     []string          `json:"snippets,omitempty"`
	Title        *string           `json:"title,omitempty"`
	URI          *string           `json:"uri,omitempty"`
}
