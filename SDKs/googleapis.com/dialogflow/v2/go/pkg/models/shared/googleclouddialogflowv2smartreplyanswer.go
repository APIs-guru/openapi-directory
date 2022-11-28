package shared

// GoogleCloudDialogflowV2SmartReplyAnswer
// Represents a smart reply answer.
type GoogleCloudDialogflowV2SmartReplyAnswer struct {
	AnswerRecord *string  `json:"answerRecord,omitempty"`
	Confidence   *float32 `json:"confidence,omitempty"`
	Reply        *string  `json:"reply,omitempty"`
}
