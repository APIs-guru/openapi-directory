package shared

type Tag struct {
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	Slug        string  `json:"slug"`
	TaggedItems *int64  `json:"tagged_items,omitempty"`
}
