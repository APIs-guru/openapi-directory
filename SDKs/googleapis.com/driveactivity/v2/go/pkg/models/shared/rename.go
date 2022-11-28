package shared

// Rename
// An object was renamed.
type Rename struct {
	NewTitle *string `json:"newTitle,omitempty"`
	OldTitle *string `json:"oldTitle,omitempty"`
}
