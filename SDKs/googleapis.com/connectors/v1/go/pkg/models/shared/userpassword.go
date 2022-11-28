package shared

// UserPassword
// Parameters to support Username and Password Authentication.
type UserPassword struct {
	Password *Secret `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
