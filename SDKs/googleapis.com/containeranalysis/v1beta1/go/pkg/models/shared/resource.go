package shared

// Resource
// An entity that can have metadata. For example, a Docker image.
type Resource struct {
	ContentHash *Hash   `json:"contentHash,omitempty"`
	Name        *string `json:"name,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
