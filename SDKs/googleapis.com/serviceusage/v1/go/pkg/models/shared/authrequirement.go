package shared

// AuthRequirement
// User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
type AuthRequirement struct {
	Audiences  *string `json:"audiences,omitempty"`
	ProviderID *string `json:"providerId,omitempty"`
}
