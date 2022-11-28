package shared

// UpsertAnswerRequest
// Request message for QuestionsAndAnswers.UpsertAnswer
type UpsertAnswerRequest struct {
	Answer *Answer `json:"answer,omitempty"`
}
