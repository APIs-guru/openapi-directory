package shared

type RackGroup struct {
	Description *string          `json:"description"`
	ID          *int64           `json:"id"`
	Name        string           `json:"name"`
	Parent      *NestedRackGroup `json:"parent"`
	RackCount   *int64           `json:"rack_count"`
	Site        NestedSite       `json:"site"`
	Slug        string           `json:"slug"`
}
