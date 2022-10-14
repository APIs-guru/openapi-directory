package shared

type VlanGroup struct {
	ID   *int64      `json:"id,omitempty"`
	Name string      `json:"name"`
	Site *NestedSite `json:"site,omitempty"`
	Slug string      `json:"slug"`
}
