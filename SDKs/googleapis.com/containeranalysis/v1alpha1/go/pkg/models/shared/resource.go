package shared

type Resource struct {
	ContentHash *Hash   `json:"contentHash,omitempty"`
	Name        *string `json:"name,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
