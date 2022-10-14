package shared

type WritableVlanGroup struct {
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	Site        *int64  `json:"site,omitempty"`
	Slug        string  `json:"slug"`
	VlanCount   *int64  `json:"vlan_count,omitempty"`
}
