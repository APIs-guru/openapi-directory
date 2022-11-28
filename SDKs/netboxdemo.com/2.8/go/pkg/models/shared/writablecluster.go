package shared

type WritableClusterInput struct {
	Comments     *string                `json:"comments,omitempty"`
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Group        *int64                 `json:"group,omitempty"`
	Name         string                 `json:"name"`
	Site         *int64                 `json:"site,omitempty"`
	Tags         []string               `json:"tags,omitempty"`
	Tenant       *int64                 `json:"tenant,omitempty"`
	Type         int64                  `json:"type"`
}
