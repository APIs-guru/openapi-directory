package shared

type WritableVlanGroupInput struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	Site        *int64  `json:"site,omitempty"`
	Slug        string  `json:"slug"`
}
