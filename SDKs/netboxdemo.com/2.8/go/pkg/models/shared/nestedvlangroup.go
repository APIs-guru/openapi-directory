package shared

type NestedVlanGroup struct {
	ID        *int64  `json:"id,omitempty"`
	Name      string  `json:"name"`
	Slug      string  `json:"slug"`
	URL       *string `json:"url,omitempty"`
	VlanCount *int64  `json:"vlan_count,omitempty"`
}
