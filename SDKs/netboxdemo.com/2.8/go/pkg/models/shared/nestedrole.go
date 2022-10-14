package shared

type NestedRole struct {
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	PrefixCount *int64  `json:"prefix_count,omitempty"`
	Slug        string  `json:"slug"`
	URL         *string `json:"url,omitempty"`
	VlanCount   *int64  `json:"vlan_count,omitempty"`
}
