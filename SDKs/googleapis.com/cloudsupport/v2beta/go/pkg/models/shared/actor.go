package shared

type Actor struct {
	DisplayName   *string `json:"displayName,omitempty"`
	Email         *string `json:"email,omitempty"`
	GoogleSupport *bool   `json:"googleSupport,omitempty"`
}
