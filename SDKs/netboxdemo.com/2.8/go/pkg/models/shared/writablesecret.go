package shared

type WritableSecretInput struct {
	CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
	Device       int64                  `json:"device"`
	Name         *string                `json:"name,omitempty"`
	Plaintext    string                 `json:"plaintext"`
	Role         int64                  `json:"role"`
	Tags         []string               `json:"tags,omitempty"`
}
