package shared

type WritableRackGroup struct {
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	Parent      *int64  `json:"parent"`
	RackCount   *int64  `json:"rack_count"`
	Site        int64   `json:"site"`
	Slug        string  `json:"slug"`
}
