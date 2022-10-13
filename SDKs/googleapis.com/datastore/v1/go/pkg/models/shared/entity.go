package shared

type Entity struct {
	Key        *Key             `json:"key"`
	Properties map[string]Value `json:"properties"`
}
