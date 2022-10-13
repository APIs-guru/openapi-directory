package shared

type Artifact struct {
	Checksum *string  `json:"checksum"`
	ID       *string  `json:"id"`
	Names    []string `json:"names"`
}
