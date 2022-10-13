package shared

type WritableVlanGroup struct {
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	Site        *int64  `json:"site"`
	Slug        string  `json:"slug"`
	VlanCount   *int64  `json:"vlan_count"`
}
