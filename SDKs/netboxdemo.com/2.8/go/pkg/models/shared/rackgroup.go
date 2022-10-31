package shared

type RackGroup struct {
	Description *string          `json:"description,omitempty"`
	ID          *int64           `json:"id,omitempty"`
	Name        string           `json:"name"`
	Parent      *NestedRackGroup `json:"parent,omitempty"`
	RackCount   *int64           `json:"rack_count,omitempty"`
	Site        NestedSite       `json:"site"`
	Slug        string           `json:"slug"`
}
