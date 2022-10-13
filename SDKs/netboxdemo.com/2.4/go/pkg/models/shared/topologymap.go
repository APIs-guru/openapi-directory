package shared

type TopologyMap struct {
	Description    *string    `json:"description"`
	DevicePatterns string     `json:"device_patterns"`
	ID             *int64     `json:"id"`
	Name           string     `json:"name"`
	Site           NestedSite `json:"site"`
	Slug           string     `json:"slug"`
}
