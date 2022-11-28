package shared

// DocumentsTarget
// A target specified by a set of documents names.
type DocumentsTarget struct {
	Documents []string `json:"documents,omitempty"`
}
