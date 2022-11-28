package shared

type WritableVrfInput struct {
	CustomFields  map[string]interface{} `json:"custom_fields,omitempty"`
	Description   *string                `json:"description,omitempty"`
	EnforceUnique *bool                  `json:"enforce_unique,omitempty"`
	Name          string                 `json:"name"`
	Rd            *string                `json:"rd,omitempty"`
	Tags          []string               `json:"tags,omitempty"`
	Tenant        *int64                 `json:"tenant,omitempty"`
}
