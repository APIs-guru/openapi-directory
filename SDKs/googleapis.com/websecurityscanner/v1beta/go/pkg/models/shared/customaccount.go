package shared

// CustomAccount
// Describes authentication configuration that uses a custom account.
type CustomAccount struct {
	LoginURL *string `json:"loginUrl,omitempty"`
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
