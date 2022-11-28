package shared

// ServiceAccount
// A Compute Engine service account, identical to the Compute Engine resource.
type ServiceAccount struct {
	Email  *string  `json:"email,omitempty"`
	Scopes []string `json:"scopes,omitempty"`
}
