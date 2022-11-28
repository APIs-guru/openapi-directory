package shared

// FolderUpdateTaskLocator
// Information on the task that has been started, and where to check it's status.
type FolderUpdateTaskLocator struct {
	ID    string            `json:"id"`
	Links map[string]string `json:"links,omitempty"`
}
