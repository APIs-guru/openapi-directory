package shared

// Category
// A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
type Category struct {
	DisplayName    *string         `json:"displayName,omitempty"`
	MoreHoursTypes []MoreHoursType `json:"moreHoursTypes,omitempty"`
	Name           *string         `json:"name,omitempty"`
	ServiceTypes   []ServiceType   `json:"serviceTypes,omitempty"`
}

// CategoryInput
// A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
type CategoryInput struct {
	Name *string `json:"name,omitempty"`
}
