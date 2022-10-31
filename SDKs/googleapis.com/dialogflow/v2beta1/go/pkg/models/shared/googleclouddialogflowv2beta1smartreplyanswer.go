package shared

type GoogleCloudDialogflowV2beta1SmartReplyAnswer struct {
	AnswerRecord *string  `json:"answerRecord,omitempty"`
	Confidence   *float32 `json:"confidence,omitempty"`
	Reply        *string  `json:"reply,omitempty"`
}
