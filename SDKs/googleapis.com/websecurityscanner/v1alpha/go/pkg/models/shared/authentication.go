package shared

// Authentication
// Scan authentication configuration.
type Authentication struct {
	CustomAccount *CustomAccount `json:"customAccount,omitempty"`
	GoogleAccount *GoogleAccount `json:"googleAccount,omitempty"`
}
