package shared

type GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum string

const (
	GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnumCorrectnessLevelUnspecified GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum = "CORRECTNESS_LEVEL_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnumNotCorrect                  GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum = "NOT_CORRECT"
	GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnumPartiallyCorrect            GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum = "PARTIALLY_CORRECT"
	GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnumFullyCorrect                GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum = "FULLY_CORRECT"
)

// GoogleCloudContactcenterinsightsV1AnswerFeedback
// The feedback that the customer has about a certain answer in the conversation.
type GoogleCloudContactcenterinsightsV1AnswerFeedback struct {
	Clicked          *bool                                                                 `json:"clicked,omitempty"`
	CorrectnessLevel *GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum `json:"correctnessLevel,omitempty"`
	Displayed        *bool                                                                 `json:"displayed,omitempty"`
}
