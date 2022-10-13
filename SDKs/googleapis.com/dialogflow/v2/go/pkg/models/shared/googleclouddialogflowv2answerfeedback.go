package shared

type GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum string

const (
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumCorrectnessLevelUnspecified GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "CORRECTNESS_LEVEL_UNSPECIFIED"
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumNotCorrect                  GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "NOT_CORRECT"
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumPartiallyCorrect            GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "PARTIALLY_CORRECT"
	GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnumFullyCorrect                GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = "FULLY_CORRECT"
)

type GoogleCloudDialogflowV2AnswerFeedback struct {
	AgentAssistantDetailFeedback *GoogleCloudDialogflowV2AgentAssistantFeedback             `json:"agentAssistantDetailFeedback"`
	ClickTime                    *string                                                    `json:"clickTime"`
	Clicked                      *bool                                                      `json:"clicked"`
	CorrectnessLevel             *GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum `json:"correctnessLevel"`
	DisplayTime                  *string                                                    `json:"displayTime"`
	Displayed                    *bool                                                      `json:"displayed"`
}
