package shared

type PowerPanel struct {
	ID             *int64           `json:"id,omitempty"`
	Name           string           `json:"name"`
	PowerfeedCount *int64           `json:"powerfeed_count,omitempty"`
	RackGroup      *NestedRackGroup `json:"rack_group,omitempty"`
	Site           NestedSite       `json:"site"`
}
