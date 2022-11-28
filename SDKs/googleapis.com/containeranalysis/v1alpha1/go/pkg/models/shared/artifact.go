package shared

// Artifact
// Artifact describes a build product.
type Artifact struct {
	Checksum *string  `json:"checksum,omitempty"`
	ID       *string  `json:"id,omitempty"`
	Name     *string  `json:"name,omitempty"`
	Names    []string `json:"names,omitempty"`
}
