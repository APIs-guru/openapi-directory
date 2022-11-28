package shared

// Channel
// A social media or web channel for a candidate.
type Channel struct {
	ID   *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}
