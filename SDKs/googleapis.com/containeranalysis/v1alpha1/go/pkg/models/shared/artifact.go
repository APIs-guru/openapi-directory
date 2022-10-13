package shared

type Artifact struct {
	Checksum *string  `json:"checksum"`
	ID       *string  `json:"id"`
	Name     *string  `json:"name"`
	Names    []string `json:"names"`
}
