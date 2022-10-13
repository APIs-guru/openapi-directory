package shared

type GraphTypeType struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Graph struct {
	ID     *int64        `json:"id"`
	Link   *string       `json:"link"`
	Name   string        `json:"name"`
	Source string        `json:"source"`
	Type   GraphTypeType `json:"type"`
	Weight *int64        `json:"weight"`
}
