package shared

type GoogleCloudDialogflowV2SmartReplyAnswer struct {
	AnswerRecord *string  `json:"answerRecord"`
	Confidence   *float32 `json:"confidence"`
	Reply        *string  `json:"reply"`
}
