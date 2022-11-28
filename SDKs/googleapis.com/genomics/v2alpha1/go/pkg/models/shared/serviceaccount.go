package shared

// ServiceAccount
// Carries information about a Google Cloud service account.
type ServiceAccount struct {
	Email  *string  `json:"email,omitempty"`
	Scopes []string `json:"scopes,omitempty"`
}
