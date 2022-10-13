package shared

type PowerPanel struct {
	ID             *int64           `json:"id"`
	Name           string           `json:"name"`
	PowerfeedCount *int64           `json:"powerfeed_count"`
	RackGroup      *NestedRackGroup `json:"rack_group"`
	Site           NestedSite       `json:"site"`
}
