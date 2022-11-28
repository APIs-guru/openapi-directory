package shared

type WritablePrefixInput struct {
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Description  *string                `json:"description,omitempty"`
	IsPool       *bool                  `json:"is_pool,omitempty"`
	Prefix       string                 `json:"prefix"`
	Role         *int64                 `json:"role,omitempty"`
	Site         *int64                 `json:"site,omitempty"`
	Status       *int64                 `json:"status,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Tenant       *int64                 `json:"tenant,omitempty"`
	Vlan         *int64                 `json:"vlan,omitempty"`
	Vrf          *int64                 `json:"vrf,omitempty"`
}
