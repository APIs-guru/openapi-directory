package shared

type WritableTopologyMap struct {
	Description    *string `json:"description"`
	DevicePatterns string  `json:"device_patterns"`
	ID             *int64  `json:"id"`
	Name           string  `json:"name"`
	Site           *int64  `json:"site"`
	Slug           string  `json:"slug"`
}
