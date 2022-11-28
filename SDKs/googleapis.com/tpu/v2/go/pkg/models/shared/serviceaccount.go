package shared

// ServiceAccount
// A service account.
type ServiceAccount struct {
	Email *string  `json:"email,omitempty"`
	Scope []string `json:"scope,omitempty"`
}
