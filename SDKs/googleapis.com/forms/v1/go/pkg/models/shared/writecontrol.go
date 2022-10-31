package shared

type WriteControl struct {
	RequiredRevisionID *string `json:"requiredRevisionId,omitempty"`
	TargetRevisionID   *string `json:"targetRevisionId,omitempty"`
}
