package shared

// GoogleCloudDialogflowV2beta1ArticleAnswer
// Represents article answer.
type GoogleCloudDialogflowV2beta1ArticleAnswer struct {
	AnswerRecord *string           `json:"answerRecord,omitempty"`
	Metadata     map[string]string `json:"metadata,omitempty"`
	Snippets     []string          `json:"snippets,omitempty"`
	Title        *string           `json:"title,omitempty"`
	URI          *string           `json:"uri,omitempty"`
}
