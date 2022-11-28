package shared

// Group
// Information about a group.
type Group struct {
	Email *string `json:"email,omitempty"`
	Title *string `json:"title,omitempty"`
}
