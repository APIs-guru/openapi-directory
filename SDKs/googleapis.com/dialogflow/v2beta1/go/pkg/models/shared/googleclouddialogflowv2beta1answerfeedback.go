package shared

type GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum string

const (
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumCorrectnessLevelUnspecified GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "CORRECTNESS_LEVEL_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumNotCorrect                  GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "NOT_CORRECT"
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumPartiallyCorrect            GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "PARTIALLY_CORRECT"
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumFullyCorrect                GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "FULLY_CORRECT"
)

// GoogleCloudDialogflowV2beta1AnswerFeedback
// Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.
type GoogleCloudDialogflowV2beta1AnswerFeedback struct {
	AgentAssistantDetailFeedback *GoogleCloudDialogflowV2beta1AgentAssistantFeedback             `json:"agentAssistantDetailFeedback,omitempty"`
	ClickTime                    *string                                                         `json:"clickTime,omitempty"`
	Clicked                      *bool                                                           `json:"clicked,omitempty"`
	CorrectnessLevel             *GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum `json:"correctnessLevel,omitempty"`
	DisplayTime                  *string                                                         `json:"displayTime,omitempty"`
	Displayed                    *bool                                                           `json:"displayed,omitempty"`
}
