package shared

type WriteControl struct {
	RequiredRevisionID *string `json:"requiredRevisionId"`
	TargetRevisionID   *string `json:"targetRevisionId"`
}
