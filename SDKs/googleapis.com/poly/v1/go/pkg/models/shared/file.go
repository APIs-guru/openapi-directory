package shared

// File
// Represents a file in Poly, which can be a root, resource, or thumbnail file.
type File struct {
	ContentType  *string `json:"contentType,omitempty"`
	RelativePath *string `json:"relativePath,omitempty"`
	URL          *string `json:"url,omitempty"`
}
