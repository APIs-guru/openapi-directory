package shared

type TopologyMap struct {
	Description    *string    `json:"description,omitempty"`
	DevicePatterns string     `json:"device_patterns"`
	ID             *int64     `json:"id,omitempty"`
	Name           string     `json:"name"`
	Site           NestedSite `json:"site"`
	Slug           string     `json:"slug"`
}
