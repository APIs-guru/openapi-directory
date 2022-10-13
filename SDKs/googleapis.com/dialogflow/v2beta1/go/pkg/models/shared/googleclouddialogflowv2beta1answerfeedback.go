package shared

type GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum string

const (
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumCorrectnessLevelUnspecified GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "CORRECTNESS_LEVEL_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumNotCorrect                  GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "NOT_CORRECT"
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumPartiallyCorrect            GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "PARTIALLY_CORRECT"
	GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnumFullyCorrect                GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum = "FULLY_CORRECT"
)

type GoogleCloudDialogflowV2beta1AnswerFeedback struct {
	AgentAssistantDetailFeedback *GoogleCloudDialogflowV2beta1AgentAssistantFeedback             `json:"agentAssistantDetailFeedback"`
	ClickTime                    *string                                                         `json:"clickTime"`
	Clicked                      *bool                                                           `json:"clicked"`
	CorrectnessLevel             *GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum `json:"correctnessLevel"`
	DisplayTime                  *string                                                         `json:"displayTime"`
	Displayed                    *bool                                                           `json:"displayed"`
}
