package shared

// Source
// Specification of traffic source attributes.
type Source struct {
	IPBlocks   []string `json:"ipBlocks,omitempty"`
	Principals []string `json:"principals,omitempty"`
}
