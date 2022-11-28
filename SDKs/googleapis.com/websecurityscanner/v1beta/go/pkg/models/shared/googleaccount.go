package shared

// GoogleAccount
// Describes authentication configuration that uses a Google account.
type GoogleAccount struct {
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
