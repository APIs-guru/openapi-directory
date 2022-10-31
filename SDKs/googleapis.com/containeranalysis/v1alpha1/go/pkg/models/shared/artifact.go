package shared

type Artifact struct {
	Checksum *string  `json:"checksum,omitempty"`
	ID       *string  `json:"id,omitempty"`
	Name     *string  `json:"name,omitempty"`
	Names    []string `json:"names,omitempty"`
}
