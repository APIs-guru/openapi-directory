package shared

type GoogleCloudDialogflowV2beta1SuggestionFaqAnswer struct {
	Answer       *string           `json:"answer"`
	AnswerRecord *string           `json:"answerRecord"`
	Confidence   *float32          `json:"confidence"`
	Metadata     map[string]string `json:"metadata"`
	Question     *string           `json:"question"`
	Source       *string           `json:"source"`
}
