package shared

type WritableGraph struct {
	ID     *int64  `json:"id,omitempty"`
	Link   *string `json:"link,omitempty"`
	Name   string  `json:"name"`
	Source string  `json:"source"`
	Type   int64   `json:"type"`
	Weight *int64  `json:"weight,omitempty"`
}
