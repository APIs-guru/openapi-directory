package shared

type GoogleCloudDialogflowV2beta1AnswerRecord struct {
	AgentAssistantRecord *GoogleCloudDialogflowV2beta1AgentAssistantRecord `json:"agentAssistantRecord"`
	AnswerFeedback       *GoogleCloudDialogflowV2beta1AnswerFeedback       `json:"answerFeedback"`
	Name                 *string                                           `json:"name"`
}
