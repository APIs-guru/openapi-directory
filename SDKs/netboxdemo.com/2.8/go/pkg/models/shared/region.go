package shared

type Region struct {
	Description *string       `json:"description"`
	ID          *int64        `json:"id"`
	Name        string        `json:"name"`
	Parent      *NestedRegion `json:"parent"`
	SiteCount   *int64        `json:"site_count"`
	Slug        string        `json:"slug"`
}
