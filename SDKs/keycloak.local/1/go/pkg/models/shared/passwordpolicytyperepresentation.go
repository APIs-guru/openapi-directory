package shared

type PasswordPolicyTypeRepresentation struct {
	ConfigType        *string `json:"configType"`
	DefaultValue      *string `json:"defaultValue"`
	DisplayName       *string `json:"displayName"`
	ID                *string `json:"id"`
	MultipleSupported *bool   `json:"multipleSupported"`
}
