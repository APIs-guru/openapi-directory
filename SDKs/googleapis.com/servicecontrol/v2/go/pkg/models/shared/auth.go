package shared

// Auth
// This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
type Auth struct {
	AccessLevels []string               `json:"accessLevels,omitempty"`
	Audiences    []string               `json:"audiences,omitempty"`
	Claims       map[string]interface{} `json:"claims,omitempty"`
	Presenter    *string                `json:"presenter,omitempty"`
	Principal    *string                `json:"principal,omitempty"`
}
