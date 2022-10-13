package shared

type GoogleCloudDialogflowV2ArticleAnswer struct {
	AnswerRecord *string           `json:"answerRecord"`
	Confidence   *float32          `json:"confidence"`
	Metadata     map[string]string `json:"metadata"`
	Snippets     []string          `json:"snippets"`
	Title        *string           `json:"title"`
	URI          *string           `json:"uri"`
}
