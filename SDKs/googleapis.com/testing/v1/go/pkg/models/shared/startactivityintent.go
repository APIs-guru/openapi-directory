package shared

// StartActivityIntent
// A starting intent specified by an action, uri, and categories.
type StartActivityIntent struct {
	Action     *string  `json:"action,omitempty"`
	Categories []string `json:"categories,omitempty"`
	URI        *string  `json:"uri,omitempty"`
}
