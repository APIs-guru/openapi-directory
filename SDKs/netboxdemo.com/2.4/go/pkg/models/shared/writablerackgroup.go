package shared

type WritableRackGroup struct {
	ID   *int64 `json:"id,omitempty"`
	Name string `json:"name"`
	Site int64  `json:"site"`
	Slug string `json:"slug"`
}
