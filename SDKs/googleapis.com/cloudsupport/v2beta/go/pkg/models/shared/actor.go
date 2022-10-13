package shared

type Actor struct {
	DisplayName   *string `json:"displayName"`
	Email         *string `json:"email"`
	GoogleSupport *bool   `json:"googleSupport"`
}
