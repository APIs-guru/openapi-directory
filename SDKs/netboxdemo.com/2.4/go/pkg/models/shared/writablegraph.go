package shared

type WritableGraph struct {
	ID     *int64  `json:"id"`
	Link   *string `json:"link"`
	Name   string  `json:"name"`
	Source string  `json:"source"`
	Type   int64   `json:"type"`
	Weight *int64  `json:"weight"`
}
