package shared

type GoogleCloudDialogflowV2beta1SuggestionArticle struct {
	AnswerRecord *string           `json:"answerRecord"`
	Metadata     map[string]string `json:"metadata"`
	Snippets     []string          `json:"snippets"`
	Title        *string           `json:"title"`
	URI          *string           `json:"uri"`
}
