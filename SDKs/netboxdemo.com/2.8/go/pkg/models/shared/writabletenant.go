package shared

type WritableTenantInput struct {
	Comments     *string                `json:"comments,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Description  *string                `json:"description,omitempty"`
	Group        *int64                 `json:"group,omitempty"`
	Name         string                 `json:"name"`
	Slug         string                 `json:"slug"`
	Tags         []string               `json:"tags,omitempty"`
}
