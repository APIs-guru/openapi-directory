package shared

type WritableGraphInput struct {
	Link   *string `json:"link,omitempty"`
	Name   string  `json:"name"`
	Source string  `json:"source"`
	Type   int64   `json:"type"`
	Weight *int64  `json:"weight,omitempty"`
}
