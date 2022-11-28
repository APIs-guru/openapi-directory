package shared

type WritableVlanInput struct {
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Description  *string                `json:"description,omitempty"`
	Group        *int64                 `json:"group,omitempty"`
	Name         string                 `json:"name"`
	Role         *int64                 `json:"role,omitempty"`
	Site         *int64                 `json:"site,omitempty"`
	Status       *int64                 `json:"status,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Tenant       *int64                 `json:"tenant,omitempty"`
	Vid          int64                  `json:"vid"`
}
