package shared

// Error
// An error returned by the API.
type Error struct {
	Domain  *string `json:"domain,omitempty"`
	Message *string `json:"message,omitempty"`
	Reason  *string `json:"reason,omitempty"`
}
