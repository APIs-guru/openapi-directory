package shared

type GoogleCloudDialogflowV2beta1AnswerRecord struct {
	AgentAssistantRecord *GoogleCloudDialogflowV2beta1AgentAssistantRecord `json:"agentAssistantRecord,omitempty"`
	AnswerFeedback       *GoogleCloudDialogflowV2beta1AnswerFeedback       `json:"answerFeedback,omitempty"`
	Name                 *string                                           `json:"name,omitempty"`
}
