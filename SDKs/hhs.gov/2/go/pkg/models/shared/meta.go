package shared

type Meta struct {
	Messages   []Message   `json:"messages"`
	Pagination *Pagination `json:"pagination"`
	Status     *int64      `json:"status"`
}
