package shared

type WritableTopologyMapInput struct {
	Description    *string `json:"description,omitempty"`
	DevicePatterns string  `json:"device_patterns"`
	Name           string  `json:"name"`
	Site           *int64  `json:"site,omitempty"`
	Slug           string  `json:"slug"`
}
