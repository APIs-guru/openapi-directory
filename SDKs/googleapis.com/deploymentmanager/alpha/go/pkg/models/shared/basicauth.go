package shared

// BasicAuth
// Basic Auth used as a credential.
type BasicAuth struct {
	Password *string `json:"password,omitempty"`
	User     *string `json:"user,omitempty"`
}
