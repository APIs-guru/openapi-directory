package shared

// File
// `File` containing source content.
type File struct {
	Content     *string `json:"content,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	Name        *string `json:"name,omitempty"`
}
