package shared

// Category
// A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
type Category struct {
	CategoryID     *string         `json:"categoryId,omitempty"`
	DisplayName    *string         `json:"displayName,omitempty"`
	MoreHoursTypes []MoreHoursType `json:"moreHoursTypes,omitempty"`
	ServiceTypes   []ServiceType   `json:"serviceTypes,omitempty"`
}

// CategoryInput
// A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
type CategoryInput struct {
	CategoryID  *string `json:"categoryId,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}
