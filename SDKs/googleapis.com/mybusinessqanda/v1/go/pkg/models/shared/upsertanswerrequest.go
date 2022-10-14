package shared

type UpsertAnswerRequest struct {
	Answer *Answer `json:"answer,omitempty"`
}
