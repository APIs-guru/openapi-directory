package shared

type Artifact struct {
	Checksum *string  `json:"checksum,omitempty"`
	ID       *string  `json:"id,omitempty"`
	Names    []string `json:"names,omitempty"`
}
