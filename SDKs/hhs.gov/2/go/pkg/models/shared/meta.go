package shared

type Meta struct {
	Messages   []Message   `json:"messages,omitempty"`
	Pagination *Pagination `json:"pagination,omitempty"`
	Status     *int64      `json:"status,omitempty"`
}
