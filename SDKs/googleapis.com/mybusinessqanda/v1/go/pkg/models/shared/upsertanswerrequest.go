package shared

// UpsertAnswerRequestInput
// Request message for QuestionsAndAnswers.UpsertAnswer
type UpsertAnswerRequestInput struct {
	Answer *AnswerInput `json:"answer,omitempty"`
}
