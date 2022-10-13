package shared

type Compliance struct {
	Ids      []string `json:"ids"`
	Standard *string  `json:"standard"`
	Version  *string  `json:"version"`
}
