package shared

type Region struct {
	Description *string       `json:"description,omitempty"`
	ID          *int64        `json:"id,omitempty"`
	Name        string        `json:"name"`
	Parent      *NestedRegion `json:"parent,omitempty"`
	SiteCount   *int64        `json:"site_count,omitempty"`
	Slug        string        `json:"slug"`
}
