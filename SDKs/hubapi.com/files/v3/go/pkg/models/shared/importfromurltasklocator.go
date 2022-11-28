package shared

// ImportFromURLTaskLocator
// Information on the task that has been started, and where to check it's status.
type ImportFromURLTaskLocator struct {
	ID    string            `json:"id"`
	Links map[string]string `json:"links,omitempty"`
}
