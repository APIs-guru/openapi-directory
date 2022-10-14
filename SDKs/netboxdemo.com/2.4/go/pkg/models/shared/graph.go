package shared

type GraphTypeType struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Graph struct {
	ID     *int64        `json:"id,omitempty"`
	Link   *string       `json:"link,omitempty"`
	Name   string        `json:"name"`
	Source string        `json:"source"`
	Type   GraphTypeType `json:"type"`
	Weight *int64        `json:"weight,omitempty"`
}
