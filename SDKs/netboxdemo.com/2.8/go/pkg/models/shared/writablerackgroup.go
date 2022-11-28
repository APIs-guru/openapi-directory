package shared

type WritableRackGroupInput struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	Parent      *int64  `json:"parent,omitempty"`
	Site        int64   `json:"site"`
	Slug        string  `json:"slug"`
}
