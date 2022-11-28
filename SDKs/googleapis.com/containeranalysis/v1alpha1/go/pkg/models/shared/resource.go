package shared

// Resource
//
//	Resource is an entity that can have metadata. E.g., a Docker image.
type Resource struct {
	ContentHash *Hash   `json:"contentHash,omitempty"`
	Name        *string `json:"name,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
