package shared

type WritableRegionInput struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	Parent      *int64  `json:"parent,omitempty"`
	Slug        string  `json:"slug"`
}
