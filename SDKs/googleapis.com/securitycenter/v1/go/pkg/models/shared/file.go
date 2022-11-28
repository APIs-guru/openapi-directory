package shared

// File
// File information about the related binary/library used by an executable, or the script used by a script interpreter
type File struct {
	Contents        *string `json:"contents,omitempty"`
	HashedSize      *string `json:"hashedSize,omitempty"`
	PartiallyHashed *bool   `json:"partiallyHashed,omitempty"`
	Path            *string `json:"path,omitempty"`
	Sha256          *string `json:"sha256,omitempty"`
	Size            *string `json:"size,omitempty"`
}
