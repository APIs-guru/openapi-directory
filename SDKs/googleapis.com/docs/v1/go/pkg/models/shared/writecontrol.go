package shared

// WriteControl
// Provides control over how write requests are executed.
type WriteControl struct {
	RequiredRevisionID *string `json:"requiredRevisionId,omitempty"`
	TargetRevisionID   *string `json:"targetRevisionId,omitempty"`
}
