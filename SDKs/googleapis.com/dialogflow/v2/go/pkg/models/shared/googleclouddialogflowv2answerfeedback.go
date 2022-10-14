package shared

type GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum string

const (
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumCorrectnessLevelUnspecified GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "CORRECTNESS_LEVEL_UNSPECIFIED"
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumNotCorrect                  GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "NOT_CORRECT"
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumPartiallyCorrect            GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "PARTIALLY_CORRECT"
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumFullyCorrect                GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "FULLY_CORRECT"
)

type GoogleCloudDialogflowV2AnswerFeedback struct {
	AgentAssistantDetailFeedback *GoogleCloudDialogflowV2AgentAssistantFeedback             `json:"agentAssistantDetailFeedback,omitempty"`
	ClickTime                    *string                                                    `json:"clickTime,omitempty"`
	Clicked                      *bool                                                      `json:"clicked,omitempty"`
	CorrectnessLevel             *GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum `json:"correctnessLevel,omitempty"`
	DisplayTime                  *string                                                    `json:"displayTime,omitempty"`
	Displayed                    *bool                                                      `json:"displayed,omitempty"`
}
