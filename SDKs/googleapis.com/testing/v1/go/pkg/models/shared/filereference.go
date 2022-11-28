package shared

// FileReference
// A reference to a file, used for user inputs.
type FileReference struct {
	GcsPath *string `json:"gcsPath,omitempty"`
}
