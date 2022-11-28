package shared

type WritableRackGroupInput struct {
	Name string `json:"name"`
	Site int64  `json:"site"`
	Slug string `json:"slug"`
}
