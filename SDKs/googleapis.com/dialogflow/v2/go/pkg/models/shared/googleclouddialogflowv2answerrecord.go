package shared

// GoogleCloudDialogflowV2AnswerRecord
// Answer records are records to manage answer history and feedbacks for Dialogflow. Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - `DetectIntent` intent matching - `DetectIntent` knowledge Answer records are not related to the conversation history in the Dialogflow Console. A Record is generated even when the end-user disables conversation history in the console. Records are created when there's a human agent assistant suggestion generated. A typical workflow for customers provide feedback to an answer is: 1. For human agent assistant, customers get suggestion via ListSuggestions API. Together with the answers, AnswerRecord.name are returned to the customers. 2. The customer uses the AnswerRecord.name to call the UpdateAnswerRecord method to send feedback about a specific answer that they believe is wrong.
type GoogleCloudDialogflowV2AnswerRecord struct {
	AgentAssistantRecord *GoogleCloudDialogflowV2AgentAssistantRecord `json:"agentAssistantRecord,omitempty"`
	AnswerFeedback       *GoogleCloudDialogflowV2AnswerFeedback       `json:"answerFeedback,omitempty"`
	Name                 *string                                      `json:"name,omitempty"`
}
