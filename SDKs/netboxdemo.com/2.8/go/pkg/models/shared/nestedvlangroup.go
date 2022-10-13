package shared

type NestedVlanGroup struct {
	ID        *int64  `json:"id"`
	Name      string  `json:"name"`
	Slug      string  `json:"slug"`
	URL       *string `json:"url"`
	VlanCount *int64  `json:"vlan_count"`
}
