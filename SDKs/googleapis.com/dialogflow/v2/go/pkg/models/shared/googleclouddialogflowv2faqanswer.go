package shared

type GoogleCloudDialogflowV2FaqAnswer struct {
	Answer       *string           `json:"answer,omitempty"`
	AnswerRecord *string           `json:"answerRecord,omitempty"`
	Confidence   *float32          `json:"confidence,omitempty"`
	Metadata     map[string]string `json:"metadata,omitempty"`
	Question     *string           `json:"question,omitempty"`
	Source       *string           `json:"source,omitempty"`
}
