package shared

type Role struct {
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	PrefixCount *int64  `json:"prefix_count"`
	Slug        string  `json:"slug"`
	VlanCount   *int64  `json:"vlan_count"`
	Weight      *int64  `json:"weight"`
}
