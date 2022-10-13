package shared

type NestedRole struct {
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	PrefixCount *int64  `json:"prefix_count"`
	Slug        string  `json:"slug"`
	URL         *string `json:"url"`
	VlanCount   *int64  `json:"vlan_count"`
}
